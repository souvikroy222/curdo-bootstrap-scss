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


/*=============== SCROLL REVEAL ANIMATION ===============*/
const scrollReveal=ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2500,
  delay:400,

})


scrollReveal.reveal(`.main__second-section`,{delay:300,origin:'top'})
scrollReveal.reveal(`.main__first-section`,{delay:500,origin:'bottom'})

scrollReveal.reveal(`.infos__left-section`,{delay:300,origin:'bottom'})
scrollReveal.reveal(`.infos__right-section`,{delay:300,origin:'bottom'})
scrollReveal.reveal(`.extra__infos__left-section`,{delay:300,origin:'top'})
scrollReveal.reveal(`.features__section`,{delay:300,origin:'bottom'})
scrollReveal.reveal(`.featured__section-title`,{delay:300,origin:'top'})
scrollReveal.reveal(`.featured__section-subtitle`,{delay:400,origin:'top'})
scrollReveal.reveal(`.featured__section-left`,{delay:300,origin:'top'})
scrollReveal.reveal(`.featured__section-right`,{delay:500,origin:'bottom'})
scrollReveal.reveal(`.subscribe_container`,{delay:300,origin:'top'})
scrollReveal.reveal(`.footer_section`,{delay:300,origin:'top'})









