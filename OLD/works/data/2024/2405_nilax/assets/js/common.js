$(function () {

    /*--------------------------------
      smoothscroll
	 ---------------------------------*/
    var headerHeight = $('header').innerHeight() - 1;
    $('a[href^="#"]').click(function () {
        var speed = 700;
        var href = $(this).attr("href");
        var target = $(href === "#" || href === "" ? 'html' : href);
        var position = target.offset().top - headerHeight;
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });
	
	var urlHash = location.hash;
	if (urlHash) {
		var position = $(urlHash).offset().top - headerHeight;
		$('html, body').animate({ scrollTop: position }, 0);
	}
    	
	
	
    /*--------------------------------
      pagetop
	 ---------------------------------*/
    var pagetop = $('.pagetop');
    pagetop.hide();
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    
    
    /*--------------------------------
        toggle menu
    ---------------------------------*/
    $('.header__toggle-item').click(function() {
		$(this).toggleClass('is-active');
		if ($(this).hasClass('is-active')) {
		   $('.header-nav__dropdown').fadeIn();

			$('.header').addClass('is-active');
			let position = $('.header').offset().top;
			let speed = 600;
			$("html,body").animate({scrollTop:position},speed);

		} else {
		   $('.header-nav__dropdown').fadeOut();
			$('.header').removeClass('is-active');
		}
    });  
    	
	
	$('.header-nav__dropdown-ttl').click(function() {
		$(this).toggleClass('is-active');
		$(this).next('.header-nav__dropdown-list').slideToggle();
		$('.header-nav__dropdown-ttl').not($(this)).next('.header-nav__dropdown-list').slideUp();
    });  
	
    $('.footer__brand-accordion--sp').click(function() {
		$(this).toggleClass('is-active');
		$('.footer__list-txt').slideToggle();
		
		let position = $('.footer__bottom').offset().top - 100;
		let speed = 600;
		$("html,body").animate({scrollTop:position},speed);

    });  
    
    
    
    /*--------------------------------
        nav menu
    ---------------------------------*/
    $('.header-nav--close').click(function() {
		$('.header__toggle-item').removeClass('is-active');
		$('.header-nav__dropdown').fadeOut();
		$('.header').removeClass('is-active');
    });  
    	
});


$(window).on('load resize',function(){

    var windowWidth = window.innerWidth;
    
    /*--------------------------------
        toggle menu 
    ---------------------------------*/   
	$('.header').removeClass('is-active');
	$('.header').removeClass('is_fixed');
	$('.header__toggle-item').removeClass('is-active');
	$('.header-nav__dropdown-ttl').removeClass('is-active');
	$('.header-nav__dropdown').css('display','none');
	$('.footer__brand-accordion--sp').removeClass('is-active');
	var windowWidth = window.innerWidth;

	if (windowWidth <= 778) {
		$('.header-nav__dropdown-list').slideUp();
		$('.footer__list-txt').slideUp();
	}else{
		$('.header-nav__dropdown-list').slideDown();
		$('.footer__list-txt').slideDown();
	}

    
    
    /*--------------------------------
        headerの高さ分調整
    
    if (windowWidth <= 768) {
        var headerHeight = $('header').innerHeight();
        $('main').css({'padding-top':headerHeight});
    } else if (windowWidth > 768){
        $('main').css({'padding-top':0});
    }
   
    ---------------------------------*/
    
});

