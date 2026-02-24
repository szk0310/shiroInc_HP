$(function () {
    /*--------------------------------
        スライドショー(MV)
    ---------------------------------*/
    $('.p-mv-slide-wrap').slick({
        autoplay: true,
        arrows: true,
		prevArrow: '<div class="slide-arrow arrow-prev is-imghover"></div>',
		nextArrow: '<div class="slide-arrow arrow-next is-imghover"></div>', 
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        speed: 1000,
        autoplaySpeed: 3000
    });
});

$(window).on('scroll', function(){
	var windowWidth = window.innerWidth;
	var windowHeight = $(window).height();
	
	var scrollTop = $(window).scrollTop();
	var viewTop = $('.p-sec-view').offset().top;
	var viewHeight = $('.p-sec-view').innerHeight();
	if(windowWidth > 768) {
		var bgPosition = (scrollTop - viewTop + viewHeight) / 3;
	} else {
		bgPosition = scrollTop / 18;
	}
	
	
	if (scrollTop > (viewTop - windowHeight) ){
		$('.p-sec-view').css('background-position', 'center top -'+ bgPosition + 'px');
	}
});