$(document).ready(function() {
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["ComputerScience", "InformationTecnology", "DataScience", "CloudComputing", "CyberSecurity"],
        typeSpeed: 80,
        backSpeed: 40,
        loop: true
    });
});

// ***sticky nav

const navbar = document.querySelector(".navbar");
window.addEventListener('scroll', function() {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
});

// ***toggle menu/navbar script
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn i");
menuBtn.addEventListener('click', function() {
    menu.classList.toggle("active");
});