//four led and button

var b = require('bonescript');

var outputs = ["USR0", "USR1", "USR2", "USR3", "P9_11", "P9_13", "P9_15", "P9_17", "P9_23"];
var inputs = ["P8_7", "P8_9", "P8_11", "P8_13", "P8_15"];


for(var i in outputs) {
    b.pinMode(outputs[i], b.OUTPUT);
}

for(var i in inputs) {
    b.pinMode(inputs[i], b.INPUT);
}

for(var i in outputs) {
    b.digitalWrite(outputs[i], b.LOW);
}


setInterval(check,100);

function check(){
    b.digitalRead(inputs[0], checkButton0);
    b.digitalRead(inputs[1], checkButton1);
    b.digitalRead(inputs[2], checkButton2);
    b.digitalRead(inputs[3], checkButton3);
    b.digitalRead(inputs[4], checkButton4);
}

function checkButton0(x) {
  if(x.value == 1){
    b.digitalWrite(outputs[4], b.HIGH);
    b.digitalWrite(outputs[0], b.HIGH);
  }
  else{
    b.digitalWrite(outputs[4], b.LOW);
    b.digitalWrite(outputs[0], b.LOW);
  }
}

function checkButton1(x) {
  if(x.value == 1){
    b.digitalWrite(outputs[5], b.HIGH);
    b.digitalWrite(outputs[1], b.HIGH);
  }
  else{
    b.digitalWrite(outputs[5], b.LOW);
    b.digitalWrite(outputs[1], b.LOW);
  }
}

function checkButton2(x) {
  if(x.value == 1){
    b.digitalWrite(outputs[6], b.HIGH);
    b.digitalWrite(outputs[2], b.HIGH);
  }
  else{
    b.digitalWrite(outputs[6], b.LOW);
    b.digitalWrite(outputs[2], b.LOW);
  }
}

function checkButton3(x) {
  if(x.value == 1){
    b.digitalWrite(outputs[7], b.HIGH);
    b.digitalWrite(outputs[3], b.HIGH);
  }
  else{
    b.digitalWrite(outputs[7], b.LOW);
    b.digitalWrite(outputs[3], b.LOW);
  }
}

function checkButton4(x) {
  if(x.value == 1){
    b.digitalWrite(outputs[8], b.HIGH);
    b.digitalWrite(outputs[0], b.HIGH);
    b.digitalWrite(outputs[1], b.HIGH);
    b.digitalWrite(outputs[2], b.HIGH);
    b.digitalWrite(outputs[3], b.HIGH);
  }
  else{
    b.digitalWrite(outputs[8], b.LOW);
    b.digitalWrite(outputs[0], b.LOW);
    b.digitalWrite(outputs[1], b.LOW);
    b.digitalWrite(outputs[2], b.LOW);
    b.digitalWrite(outputs[3], b.LOW);
  }
}
