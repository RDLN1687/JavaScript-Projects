function math_addition() {
  var addition= 2+4;
document.getElementById('add').innerHTML="2 + 4 = " + addition;
}

function math_subtraction(){
    var subtraction= 4-2;
  document.getElementById('sub').innerHTML="4 - 2 = " + subtraction;
  }
  
  function math_subtraction(){
    var subtraction= 4-2;
  document.getElementById('sub').innerHTML="4 - 2 = " + subtraction;
  }
  
  function math_division(){
    var division= 4-2;
  document.getElementById('div').innerHTML="4 / 2 = " + division;
  }
  
  function math_multiplication(){
    var multiplication= 4*2;
  document.getElementById('mult').innerHTML="4 * 2 = " + multiplication;
  }

  function Interesting () {
    var A = (82 + 3) * 2 / 4;
    document.getElementById ('multiple_operation').innerHTML= "(82 + 3) * 2 / 4 = " + A;
  }
  
  function Modulus() {
    var B = 8%3;
    document.getElementById ('Modulus_testing').innerHTML = "8 % 3 =" + B;
}

function negation_operator () {
    var C = 25;
    document.getElementById('unary').innerHTML= -C;
}

function increment () {
var D = 82;
D++;
document.getElementById('Inc').innerHTML=D;
}

function decrement () {
var E= 35;
E--;
document.getElementById('Decr').innerHTML =E;
}

window.alert(Math.random());

window.alert(Math.random()*34);