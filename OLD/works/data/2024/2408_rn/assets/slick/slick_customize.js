$(function() {
			  $('.video1').on('loadedmetadata', function() {
			  var $video1 = $('.video1').get(0),
				  videoTime1 = Math.floor($video1.duration * 1000);
				$video1.play();

				$('.slider.mv').slick({
					autoplay: true,
					arrows: false,
					fade: true,
					speed: 1000,
					autoplaySpeed: 2500,
					swipe: false,
					pauseOnHover: false,
					pauseOnFocus: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
				  //dotsClass: 'video_dots',
				}).on('afterChange', function(event, slick, currentSlide, nextSlide) {
				  switch (currentSlide) {
					case 1:
					 // $(this).slick('slickSetOption', 'autoplaySpeed', videoTime1); 
					  $video1.play();
					  break;
					case 2:
					  $video1.pause();
					  $video1.currentTime = 0;
					  break;
				  }
				});
			  });

});
