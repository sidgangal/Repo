var b = require('bonescript');

b.pinMode('P9_11', b.INPUT);
b.pinMode('P9_13', b.INPUT);
b.pinMode('P9_15', b.INPUT);
b.pinMode('P9_17', b.INPUT);

b.pinMode('P9_12', b.OUTPUT);
b.pinMode('P9_14', b.OUTPUT);
b.pinMode('P9_16', b.OUTPUT);
b.pinMode('P9_18', b.OUTPUT);

setInterval(check,100);

function check(){
b.digitalRead('P9_11', checkButton1);
b.digitalRead('P9_13', checkButton2);
b.digitalRead('P9_15', checkButton3);
b.digitalRead('P9_17', checkButton4);
}

function checkButton1(x) {

if(x.value == 1){
    b.digitalWrite('P9_12', b.HIGH);
  }

 else{
 b.digitalWrite('P9_12', b.LOW);
 }

}

function checkButton2(x) {

if(x.value == 1){
    b.digitalWrite('P9_14', b.HIGH);
  }

 else{
 b.digitalWrite('P9_14', b.LOW);
 }
}

function checkButton3(x) {

if(x.value == 1){
    b.digitalWrite('P9_16', b.HIGH);
  }

 else{
 b.digitalWrite('P9_16', b.LOW);
 }
}

function checkButton4(x) {

if(x.value == 1){
    b.digitalWrite('P9_18', b.HIGH);
  }

 else{
 b.digitalWrite('P9_18', b.LOW);
 }
}
