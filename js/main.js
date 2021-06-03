$(function(){
  $('.slider').slick({    
    	autoplay: true,
    	autoplaySpeed: 2000,    
   	touchThreshold: 10,
		speed: 300,
		draggable: false,
		swipe: false,
		dots: true,
  });
});
$(function(){
  $('.post__img').slick({    
    	autoplay: true,
    	autoplaySpeed: 2000,
    	slidesToShow: 1, 
   	// touchThreshold: 10,
		// speed: 300,
		// draggable: false,
		// swipe: false,
		arrows: false,
		dots: true,
		// variableWidth: true,
  });
});

//posts__items

$(function(){
  $('.posts__items').slick({    
    	// autoplay: true,
    	// autoplaySpeed: 2000,
    	// centerMode: true,
		arrows: true,
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: false,
		 responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,

        // slidesToScroll: 3,
        // infinite: true,
        // dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
 
        // slidesToScroll: 2
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
});

// $(".slick-arrow.slick-next").addClass("icon-arrow");


// $(".slick-arrow.slick-prev").addClass("icon-arrow")

