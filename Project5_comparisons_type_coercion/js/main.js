document.write("25"+8);

function Not_a_number() {
    document.getElementById('Test').innerHTML=0/0;
    document.getElementById('Test').innerHTML= isNaN('This is a string');
}

function show_infinity() {
    document.getElementById(Test_infinity).innerHTML= 3456E245789 ('Infinity');
}

document.write(8<2);

document.write(12<14);
document.write (89<56.78);
document.write (34+56);
document.write (38==38);
document.write (89==86);

Alpha =20;
Beta=20;
document.write(Alpha===Beta);

Alpha =20;
Beta='20';
document.write(Alpha===Beta);


document.write(84>23 && 78>34);
document.write(34>67 && 98<109);
document.write(10>9 || 20>10);

function Not_operator() {
    document.getElementById('Test1').innerHTML=!(9>10);
}