function KVP() {
    var Get_to_Know_Ramya = {
        Name: "Ramya",
        Age:"35",
        City:"Edmonton",
        Fav_color:"Black"
    }
document.getElementById('Dictionary').innerHTML=Get_to_Know_Ramya.Age;
}


function Door() {
    var Details = {
        color: "white",
        innershape:"arch",
        handle:"round",
        color:"25"
    }
document.getElementById('door_details').innerHTML= Details.color;
}

function Cellphone() {
    var phone ={
        Color: "Purple",
        make: "iPhone",
        model: "14"
    }
delete phone.make;
document.getElementById('Phone_details').innerHTML=phone.make;
}