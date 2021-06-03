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
		arrows: false,
		dots: true,
  });
});

//posts__items

$(function(){
  $('.posts__items').slick({
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
      }
    },
    {
      breakpoint: 600,
      settings: {
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      }
    }
  ]
  });
});

$(window).ready(function(){
	if($(window).width() < 991){
		$('.nav__list').append($('.cart'));
	};
});

$(window).resize(function(){
	if($(this).width() > 990){
		$('.nav__icons').append($('.cart'));
	} else{
		$('.nav__list').append($('.cart'));
	}
});
