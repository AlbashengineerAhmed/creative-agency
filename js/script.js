const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function previousSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);

document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', previousSlide);


$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        transitionStyle:"backSlide",
        autoPlay:true
    });
});
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.querySelector(".nav-links");
  const openIcon = document.getElementById("open-icon");
  const closeIcon = document.getElementById("close-icon");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
    openIcon.style.display = menu.classList.contains("active") ? "none" : "inline-block";
    closeIcon.style.display = menu.classList.contains("active") ? "inline-block" : "none";
  });

  // Close the menu when a link is clicked
  menu.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      menu.classList.remove("active");
      closeIcon.style.display = "none";
      openIcon.style.display = "inline-block";
    }
  });
});






