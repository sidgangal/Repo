var b = require('bonescript');

var state = b.LOW;

var s1,s2,s3,s4 ;

b.pinMode("P9_11", b.OUTPUT);
b.pinMode("P9_13", b.OUTPUT);
b.pinMode("P9_15", b.OUTPUT);
b.pinMode("P9_17", b.OUTPUT);
b.pinMode("P9_12", b.INPUT);
b.pinMode("P9_14", b.INPUT);
b.pinMode("P9_16", b.INPUT);
b.pinMode("P9_18", b.INPUT);
setInterval(check, 1);

// function toggle() {
//     b.digitalWrite("P9_13", state);
//     b.digitalWrite("USR1", state);
//     if(state == b.LOW) state = b.HIGH;
//     else state = b.LOW;
//     b.digitalWrite("P9_12", state);
//     b.digitalWrite("USR0", state);
// }

function check(){
    b.digitalRead("P9_12",checkButton1);
}
function checkButton1(x) {
  s1 = x.value;
  b.digitalRead("P9_14",checkButton2);
}
function checkButton2(y) {
  s2 = y.value;
  b.digitalRead("P9_16",checkButton3);
}
function checkButton3(z) {
  s3 = z.value;
  b.digitalRead("P9_18",checkButton4);
}
function checkButton4(q) {
  s4 = q.value;
  if(s1 == 1){
    b.digitalWrite("P9_11", b.HIGH);
    // b.digitalWrite("P9_13", b.HIGH);
  }
  else
     b.digitalWrite("P9_11", b.LOW);
  if(s2 == 1){
    // b.digitalWrite("P9_12", b.LOW);
    b.digitalWrite("P9_13", b.HIGH);
  }
  else
     b.digitalWrite("P9_13", b.LOW);
  if(s3 == 1){
    // b.digitalWrite("P9_12", b.LOW);
    b.digitalWrite("P9_15", b.HIGH);
  }
  else
     b.digitalWrite("P9_15", b.LOW);
  if(s4 == 1){
    b.digitalWrite("P9_17", b.HIGH);
  }
  else
     b.digitalWrite("P9_17", b.LOW);
}