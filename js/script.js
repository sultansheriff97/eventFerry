let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    effect: "coverflow", // Enables the coverflow effect
    grabCursor: true,    // Cursor indicates grabbing for usability
    centeredSlides: true,
    slidesPerView: "auto", // Adjusts slide visibility dynamically
    loop: true,
  
    coverflowEffect: {
      rotate: 0,         // No rotation
      stretch: 0,        // No stretch
      depth: 100,        // Distance between slides
      modifier: 2,       // Intensity of depth effect
      slideShadows: true // Enables shadows for depth
    },
  
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
  
    breakpoints: {
      320: {
        slidesPerView: 1, // On small screens, show 1 slide
        coverflowEffect: {
          depth: 60, // Reduced depth for smaller screens
        },
      },
      768: {
        slidesPerView: 2, // Medium screens: show 2 slides
        coverflowEffect: {
          depth: 80,
        },
      },
      1024: {
        slidesPerView: 3, // Large screens: show 3 slides
        coverflowEffect: {
          depth: 100,
        },
      }
    }
  });
  