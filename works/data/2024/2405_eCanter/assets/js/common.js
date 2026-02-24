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
    $('#sp-menu-trigger').click(function() {
        
        var windowWidth = window.innerWidth;
        
        if (windowWidth <= 768) {
            $(this).toggleClass('is-active');
            if ($(this).hasClass('is-active')) {
                $('.gnav-wrap').fadeIn();
            } else {
                $('.gnav-wrap').fadeOut();
            }
        }    
    });  
    
    
});


$(window).on('load resize',function(){
    
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    
    /*--------------------------------
        header fixed
    ---------------------------------*/
	if ( !navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/) && windowWidth > 768 ) {
        $('header').addClass('is-fixed');
    } else if ( navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/) && windowWidth < windowHeight ){
        $('header').addClass('is-fixed');
    } else {
        $('header').removeClass('is-fixed');
	}
    
    /*--------------------------------
        SP menu
    ---------------------------------*/
    
    if (windowWidth <= 768) {
        $('.gnav-wrap').css('display','none');
            
    } else if (windowWidth > 768){
        $('#sp-menu-trigger').removeClass('is-active');
        $('.gnav-wrap').css('display','block');
    }
    
    
    /*--------------------------------
        headerの高さ分調整
    ---------------------------------*/
    var headerHeight = $('header').innerHeight();
    $('.l-main').css({'padding-top':headerHeight});
    
    
});

