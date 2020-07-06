// JAVA SCRIPT Work

// pre loader

function bodyload() {
    document.getElementById("pre-loader").style.display = "none";
}

// go to top

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector(".nav-sec").style.top = "0";
        } else {
            document.querySelector(".nav-sec").style.top = "-100px";
        }
        if (prevScrollpos < currentScrollPos) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
        prevScrollpos = currentScrollPos;

    }
    // go to top function
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// 
var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

})


// time counter

var countDownDate = new Date("jun 30, 2021 24:00:00").getTime();


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

// touch-slider = carousel 




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


//