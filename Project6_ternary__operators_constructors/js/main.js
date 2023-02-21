function Gymnastics() {
    var Age, Can_Enroll;
    Age = document.getElementById("Age").value;
    Can_Enroll=(Age<5) ? "Better luck next year " : "Lets have fun";
    document.getElementById('Test').innerHTML=Can_Enroll + " at the Gymsnas";
}

function vehicle (Make, Model, Year, Color) {
    this.vehicle_Make = Make;
    this.vehicle_Model = Model;
    this.vehicle_Year = Year;
    this.vehicle_Color = Color;
}

var Jack = new vehicle ('Dodge', 'Viper', 2020, 'Red');
var Emily = new vehicle ('Jeep', 'Trail Hawk', 2019, 'White and Black');
var Erik = new vehicle ('Ford', ' Pinto', 1971, ' Mustard');
function myfunction() {
    document.getElementById ("Keywords_and_Constructors").innerHTML="Erik drives a " +  Erik.vehicle_Color + "-colored" + Erik.vehicle_Model + " manufactured in " + Erik.vehicle_Year;
}

function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 89 ;
        function Plus_one(){Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}