/*Testimonials js code */
var swiper = new Swiper(".swiper-testimonials", {
     effect: "coverflow",
     loop: true,
     grabCursor: true,
     centeredSlides: true,
     slidesPerView: "auto",
     slidesPerView: "3",
     coverflowEffect: {
       rotate: 50,
       stretch: 0,
       depth: 100,
       modifier: 1,
       slideShadows: false
     },
     pagination: {
       el: ".swiper-pagination"
     },
     breakpoints: {
       320: {
         slidesPerView: 1
       },
       640: {
         slidesPerView: 1
       },
       768: {
         slidesPerView: 2
       },
       1024: {
         slidesPerView: 3
       }
     }
   });

/*Banner images js code */
var swiper = new Swiper(".swipper-container", {
     // effect: "flip",
     grabCursor: true,
     loop: true,
     autoplay:{
          delay:3500,
          disableOnInteraction:false,
     },
     pagination: {
       el: ".swiper-pagination",
     },
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
   });

 