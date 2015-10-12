//Name : Siddharth Gangal
//Roll no. : B13232
//Assignment : lab04
//topic : controlling leds on led matrix with the help of a range finder

#!/usr/bin/env node
// Code for drving an 8 by 8 LED Matrix
// http://www.adafruit.com/products/902
// BoneScript API: https://github.com/jadonk/bonescript
// Based on code from the BeagleBone Cookbook: http://shop.oreilly.com/product/0636920033899.do
// Mark A. Yoder, 31-Aug-2015

var b = require('bonescript');
var port = '/dev/i2c-2'
var matrix = 0x70;
var time = 1000; // Delay between images in ms

// The first byte is GREEN, the second is RED.
var smile =
	[0x00, 0x3c, 0x00, 0x42, 0x28, 0x89, 0x04, 0x85, 
	 0x04, 0x85, 0x28, 0x89, 0x00, 0x42, 0x00, 0x3c];
var frown =
	[0x3c, 0x00, 0x42, 0x00, 0x85, 0x20, 0x89, 0x00, 
	 0x89, 0x00, 0x85, 0x20, 0x42, 0x00, 0x3c, 0x00];
var neutral =
	[0x3c, 0x3c, 0x42, 0x42, 0xa9, 0xa9, 0x89, 0x89,
	 0x89, 0x89, 0xa9, 0xa9, 0x42, 0x42, 0x3c, 0x3c];
	
var red = [0x00, 0xff, 0x00, 0xff, 0x00, 0xff, 0x00, 0xff,
	 	   0x00, 0xff, 0x00, 0xff, 0x00, 0xff, 0x00, 0xff];
	 	   
var green = [ 0xff, 0x00, 0xff, 0x00, 0xff, 0x00, 0xff,0x00,
	 	    0xff, 0x00, 0xff, 0x00, 0xff, 0x00, 0xff,0x00];
var orange = [ 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,0xff,
	 	    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,0xff];
	 
var blank = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

b.i2cOpen(port, matrix);

b.i2cWriteByte(port,  0x21); // Start oscillator (p10)
b.i2cWriteByte(port,  0x81); // Disp on, blink off (p11)
b.i2cWriteByte(port,  0xe7); // Full brightness (page 15)

/*doFrown();
function doFrown() {
	b.i2cWriteBytes(port, 0x00, frown);
}
setTimeout(doNeutral, 1*time);
function doNeutral() {
	b.i2cWriteBytes(port, 0x00, neutral);
}
setTimeout(doSmile, 2*time);
function doSmile() {
	b.i2cWriteBytes(port, 0x00, smile);
}
// Fade the display
setTimeout(doFadeDown, 3*time);
var fade = 0xef;
function doFadeDown() {
    b.i2cWriteByte(port,  fade);
	fade--;
	if(fade >= 0xe0) {
		setTimeout(doFadeDown, time/10);
	} else {
		setTimeout(doFadeUp);
	}
}
function doFadeUp() {
    b.i2cWriteByte(port,  fade);
	fade++;
	if(fade <= 0xef) {
		setTimeout(doFadeUp, time/10);
	}
}
*/
// var b = require('bonescript');

var trigger = 'P9_16',  // Pin to trigger the ultrasonic pulse      input
    echo    = 'P9_41',  // Pin to measure to pulse width related to the distance        output
    ms = 100;           // Trigger period in ms
    
var startTime, pulseTime;
b.pinMode('P9_14',b.OUTPUT);
b.pinMode(echo,   b.INPUT, 7, 'pulldown', 'fast', doAttach);
function doAttach(x) {
    if(x.err) {
        console.log('x.err = ' + x.err);
        return;
    }
    // Call pingEnd when the pulse ends
    b.attachInterrupt(echo, true, b.FALLING, pingEnd);
}

b.pinMode(trigger, b.OUTPUT);

b.digitalWrite(trigger, 1);     // Unit triggers on a falling edge.
                                // Set trigger to high so we call pull it low later

// Pull the trigger low at a regular interval.
setInterval(ping, ms);

// Pull trigger low and start timing.
function ping() {
    // console.log('ping');
    b.digitalWrite(trigger, 0);
    startTime = process.hrtime();
}

// Compute the total time and get ready to trigger again.
function pingEnd(x) {
    if(x.attached) {
        console.log("Interrupt handler attached");
        return;
    }
    if(startTime) {
        pulseTime = process.hrtime(startTime);
        b.digitalWrite(trigger, 1);
        var m = (pulseTime[1]/1000000-0.8).toFixed(3);
        // console.log('pulseTime = ' + m);
        var c = ((m/58)*1000);
        console.log('range = ' + c + ' in cm');
        if(c > 50){
         	// b.i2cWriteBytes(port, 0x00, blank);
            b.i2cWriteBytes(port, 0x00, green);
        }
        else if(25<c && c<50){
        	// b.i2cWriteBytes(port, 0x00, blank);
        	b.i2cWriteBytes(port, 0x00, orange);  
        }
        else{
        	
        	// b.i2cWriteBytes(port, 0x00, blank);
             b.i2cWriteBytes(port, 0x00, red);
        	   
        }
    }
}
