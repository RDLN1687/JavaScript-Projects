
function concat_method() {
    var A=('We are');
    var B =(' a Happy');
    var C=(' Family');
    var full = A.concat(B,C);
    document.getElementById('More strings').innerHTML=full;
}

function slice_method(){
    var proverb =('What you sow, so shall you reap');
    var slice_1= proverb.slice(17,23);
document.getElementById('A1').innerHTML=slice_1;
}
 
var text ='It is dark and a beautiful night';
var result = text.toUpperCase();
document.write(result);

var text ='It is dark and a beautiful night';
var result1= text.search('beautiful');
document.write(result1);

function string() {
    var A=87;
document.getElementById('string_method').innerHTML=A.toString();
}

function precision() {
    var A= 94.78768789;
document.getElementById('precision_method').innerHTML=A.toPrecision(5);
}

function to_fixed() {
    var A = 89.97;
    document.getElementById('to fixed').innerHTML=A.toFixed();
}

function value_of() {
    var A=8900;
    document.getElementById('value of').innerHTML=A.valueOf();
}