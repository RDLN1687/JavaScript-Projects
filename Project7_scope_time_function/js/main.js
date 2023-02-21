var alpha = 95;
function subtract_number_1(){
    document.write(alpha - 5 +"<br>");
}
function subtract_number_2 (){
    document.write(alpha-56);
}
subtract_number_1();
subtract_number_2();


function add_number_1() {
    var A = 45;
    document.write(A +79);
}
function add_number_2() {
    document.write(A+78);
}
add_number_1();



function time() {
    if (new Date().getHours()>18){
        document.getElementById('Welcome').innerHTML= "Welcome to the party"
    }
}

if ( 34 > 23 ) {
    document.write("<br>"+'Sunday');
}

function Month() {
    Age = document.getElementById("Age").value;
    if (Age >= 23) {
        say = "Yay!!";
    }
    else  {
        say = "In a few Years";
    }
document.getElementById('Birthday').innerHTML = say;
}