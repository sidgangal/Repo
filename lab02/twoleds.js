/*****

Author: Siddharth Gangal
Version 1
****/
var b = require('bonescript');

var state = b.LOW;

var s , v;

b.pinMode("USR0", b.OUTPUT);
b.pinMode("USR1", b.OUTPUT);
b.pinMode("P9_12", b.OUTPUT);
b.pinMode("P9_13", b.OUTPUT);
b.pinMode("P9_14", b.INPUT);
b.pinMode("P9_16", b.INPUT);
b.pinMode("P9_16", b.INPUT);
b.pinMode("P9_16", b.INPUT);
setInterval(check, 1);

function toggle() {
    b.digitalWrite("P9_13", state);
    b.digitalWrite("USR1", state);
    if(state == b.LOW) state = b.HIGH;
    else state = b.LOW;
    b.digitalWrite("P9_12", state);
    b.digitalWrite("USR0", state);
}

function check(){
    b.digitalRead("P9_16",checkButton1);
}
function checkButton1(x) {
  s = x.value;
  b.digitalRead("P9_14",checkButton2);
}
function checkButton2(y) {
  v = y.value;
  if(s== 1 && v== 1){
    b.digitalWrite("P9_12", b.HIGH);
    b.digitalWrite("P9_13", b.HIGH);
  }
  else if((s == 0 && v == 1) || (s == 1 && v == 0)){
    b.digitalWrite("P9_12", b.LOW);
    b.digitalWrite("P9_13", b.HIGH);
  }
  else{
    b.digitalWrite("P9_12", b.LOW);
    b.digitalWrite("P9_13", b.LOW);
  }
}
