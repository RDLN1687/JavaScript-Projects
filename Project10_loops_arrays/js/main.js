function Count_to_twentyfive() {
   var number="";
   var X= 1;
   while (X<26) {
    number += "<br>" + X;
    X++;
   }

document.getElementById('Lets count to 25').innerHTML = number;
}


var Students =["Brooklyn", "Jordan", "Concia", "Naomi", "Devora", "Adrian"];
var content ="";
var Y;
function for_loop() {
     for (Y=0; Y < Students.length; Y++) {
    content += Students[Y] + "<br>";
}

document.getElementById('List of students in Grade 6').innerHTML=content;
}


function array_function() {
 var weather = [];
 weather[0] = "Gloomy";
 weather[1]="Sunny";
 weather[2]=" Raining";
 weather[3]="Windy";
  document.getElementById("Array").innerHTML= "Today's weather forecast :" + weather[2];
}

function statment1() {
   var X= 3; {
      let X= 8;
   }
   document.getElementById('statement').innerHTML= X;
}

var Y= return_statement(8,98);
document.getElementById('return statement').innerHTML=Y;
function return_statement(a,b) {
   return (a*b);
}

let Naomi ={
   born: "2020",
   weight: "3.2kgs",
   height: "50cms",
   description: function() {
      return "Naomi was born in " + this.born + "weighing" + this.weight + "and was approx height of " + this.height;
   }
};
document.getElementById("child").innerHTML=description();