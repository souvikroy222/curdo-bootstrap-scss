 /*=============== SWIPER POPULAR ===============*/
    
 var swiper = new Swiper(".mySwiper", {
  loop: true,  
  spaceBetween:24,
  grabCursor: true,   
  autoplay:true,     
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {    
    768: {
      slidesPerView: 2,        
    },
    670: {  
      slidesPerView: 2,             
      spaceBetween: 48,
    },
    900: {  
      slidesPerView: 2,             
      spaceBetween: 48,
    },

    1024: {  
      slidesPerView: 3,             
      spaceBetween: 48,
    },
  },
});