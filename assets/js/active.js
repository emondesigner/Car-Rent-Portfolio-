

$(function(){
// .................................. CAR  BRANDS  SLIDER SECTION START..................................  
$('.brands_slider').slick({
    autoplay:true,
    slidesToShow: 6,
    autoplaySpeed:10000,
    arrows:false,
    infinite:true,
    slidesToScroll:1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2
          }
        },
        {
          breakpoint:768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    
});
// .................................. CAR  BRANDS  SLIDER SECTION END..................................


// .................................. CAR  STYLE  SLIDER SECTION START .................................. 
$('.style_slider').slick({
    autoplay:true,
    slidesToShow: 6,
    autoplaySpeed:10000,
    arrows:false,
    infinite:true,
    slidesToScroll:1,
    
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2
          }
        },
        {
          breakpoint:768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    
});
//  ..................................CAR  STYLE  SLIDER SECTION END .................................. 


// ........................SCROLL REVEAL JS START........................
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 1000,
  delay: 300,
});
ScrollReveal().reveal('.hero_info, .about_area', {origin: 'left'});
ScrollReveal().reveal('.hero_img, .style_slider, .about_info', {origin: 'right'});
ScrollReveal().reveal('#detail_date, .brands_slider, .car, .footer, .all_vehicles', {origin: 'bottom'});
ScrollReveal().reveal('.head_tittle, .copy-right', {origin: 'top'});

ScrollReveal().reveal('.service_box, .car_content_box', {origin: 'bottom', delay:500,interval: 500});
ScrollReveal().reveal('.icon', {origin: 'bottom', delay:200,interval: 500});
// ........................SCROLL REVEAL JS END........................




})  

  