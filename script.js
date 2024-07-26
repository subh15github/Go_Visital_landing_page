

/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);


/**
 * HEADER
 * active header when window scroll down to 150px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

// home section

// Get all the background divs
var backgrounds = document.querySelectorAll('.background');
// Get the slider and the images
const slider = document.querySelector('.home-slider-images');
const images = Array.from(slider.children);

// Set the initial image index
let imageIndex = 0;

// Update the slider
function updateSlider() {
    // Remove the 'active', 'previous', 'next', and 'inactive' classes from all images
    images.forEach(image => {
        image.classList.remove('active', 'previous', 'next', 'inactive');
    });

    // Add the 'active' class to the current image
    images[imageIndex].classList.add('active');

    // Add the 'previous' class to the image before the current one
    if (imageIndex - 1 >= 0) {
        images[imageIndex - 1].classList.add('previous');
    } else {
        images[images.length - 1].classList.add('previous');
    }

    // Add the 'next' class to the image after the current one
    if (imageIndex + 1 < images.length) {
        images[imageIndex + 1].classList.add('next');
    } else {
        images[0].classList.add('next');
    }

    // Add the 'inactive' class to the other images
    images.forEach((image, index) => {
        if (index !== imageIndex && index !== (imageIndex - 1 + images.length) % images.length && index !== (imageIndex + 1) % images.length) {
            image.classList.add('inactive');
        }
    });

    // Set the opacity of all the background divs to 0
    backgrounds.forEach((background) => {
        background.style.opacity = 0;
    });
    // If the current image is active, set the opacity of the corresponding background div to 1
    if (images[imageIndex].classList.contains('active')) {
        backgrounds[imageIndex].style.opacity = 1;
    }
    // Update the image index
    imageIndex = (imageIndex + 1) % images.length;
}
updateSlider();
// Update the slider every 3 seconds
setInterval(updateSlider, 3000);

images[1].classList.add('next');
images[2].classList.add('inactive');
images[0].classList.add('active');
images[4].classList.add('previous');
images[0].classList.add('active');


// logo section

$(document).ready(function(){
  $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 4
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 3
          }
      }]
  });
});


