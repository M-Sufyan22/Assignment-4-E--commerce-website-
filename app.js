// JAVA SCRIPT Work

// time counter

var countDownDate = new Date("jun 30, 2020 24:00:00").getTime();


var x = setInterval(function() {


    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "EXPIRED";
    }
}, 1000);


function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}


function myFunction2() {
    var x = document.getElementById("myInput2");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}