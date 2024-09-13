

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



    
})  

  