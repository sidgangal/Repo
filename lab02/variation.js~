//blink 5 times

var b = require('bonescript');

var state = b.LOW;

b.pinMode("P9_12", b.OUTPUT);
b.pinMode("P9_16", b.INPUT);

setInterval(check, 100);

function check(){
    b.digitalRead("P9_16",blink);
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function blink(x) {
  	if(x.value == 1)
  	{
  		for (var i = 5; i >= 1; i--) {
  			b.digitalWrite("P9_12", b.HIGH);
  			sleep(10);
  			b.digitalWrite("P9_12", b.LOW);
  		}
  	}
 }
