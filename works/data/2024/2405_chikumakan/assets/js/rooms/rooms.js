$(function () {
    /*--------------------------------
        スライドショー
    ---------------------------------*/
	$('.p-rooms-box').each(function(){
		$(this).find('.p-rooms-slide-wrap').slick({
			autoplay: false,
			arrows: true,
			prevArrow: '<div class="slide-arrow arrow-prev is-imghover"></div>',
			nextArrow: '<div class="slide-arrow arrow-next is-imghover"></div>', 
			dots: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			pauseOnHover: false,
			speed: 1000,
			autoplaySpeed: 3000
		});
	});
});