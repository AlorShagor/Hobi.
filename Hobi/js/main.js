$(document).ready(function(){

    // Slider 
    $('.member-single-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:2000,
        speed:500,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })


    // Counter 
    $('.counter-num').counterUp({
        delay: 10,
        time: 1000,
    });
    
    $('.clients-details-part').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:2000,
        speed:500,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })



})