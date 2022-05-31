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
      slidesPerView: 1,        
    },
    1024: {  
      slidesPerView: 3,             
      spaceBetween: 48,
    },
  },
});