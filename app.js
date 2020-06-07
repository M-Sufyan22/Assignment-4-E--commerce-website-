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


//  Jquery Work

$('.buttons').click(function() {
    var buttonvalue = $(this).attr('data-filter');

    if (buttonvalue == 'all') {
        $('.image-filter').show('1000');
    } else {
        $('.image-filter').not('.' + buttonvalue).hide('200');
        $('.image-filter').filter('.' + buttonvalue).show('200');
    }
    $(this).addClass('active').siblings().removeClass('active');
});

// For LOgin Form

$(document).ready(function() {
    $("#search").click(function() {
        $(".search").show();
        $(".fa-close").show();
    });
    $(".fa-close").click(function() {
        $(".search").hide();
        $(".fa-close").hide();
    });

    $(".signup-form").hide();
    $(".log").addClass("activee");
    $(".fa-eye-slash").hide();

    $(".sign").click(function() {
        $(".signup-form").show();
        $(".login-form").hide();
        $(".sign").addClass("activee");
        $(".log").removeClass("activee");
    });

    $(".log").click(function() {
        $(".sign").removeClass("activee");
        $(".log").addClass("activee");
        $(".signup-form").hide();
        $(".login-form").show();
    });
    $(".fa-eye").click(function() {
        $(".fa-eye").hide();
        $(".fa-eye-slash").show();
    });
    $(".fa-eye-slash").click(function() {
        $(".fa-eye-slash").hide();
        $(".fa-eye").show();
    });
});