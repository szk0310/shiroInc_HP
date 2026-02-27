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
        SP menu
    ---------------------------------*/
    $('.menu-trigger').click(function() {
        
        var windowWidth = window.innerWidth;
        
        if (windowWidth <= 768) {
            $(this).toggleClass('is-active');
            if ($(this).hasClass('is-active')) {
                $('.gnav').fadeIn();
            } else {
                $('.gnav').fadeOut();
            }
        }    
    });  
    
    $('.is-anchorlink').click(function() {
        var windowWidth = window.innerWidth;
        
        if (windowWidth <= 767) {
            $('.menu-trigger').removeClass('is-active');
            $('.gnav').fadeOut();
        }    
    });  
    
    
});


$(window).on('load resize',function(){
    
    var windowWidth = window.innerWidth;
    
    /*--------------------------------
        SP menu
    ---------------------------------*/
    
    if (windowWidth <= 768) {
        $('.gnav').css('display','none');
            
    } else if (windowWidth > 768){
        $('.menu-trigger').removeClass('is-active');
        $('.gnav').css('display','block');
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

