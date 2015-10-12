/*****

Author: Siddharth Gangal
Version 1
****/


// #!/usr/bin/env node

var b = require('bonescript');

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
        if(c<25)
            b.digitalWrite('P9_14' , b.HIGH);
          else
             b.digitalWrite('P9_14' , b.LOW);
    }
}
