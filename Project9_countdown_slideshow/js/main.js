function Countdown() {
   var seconds= document.getElementById("seconds").value;

    function tick() {
        seconds=seconds-1;
        timer.innerHTML = seconds;
        var time= setTimeout(tick, 1000);
        if (seconds == -1) {
            alert ("Times up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

 