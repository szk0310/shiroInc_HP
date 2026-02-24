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
    
    
	$('#gnav .is-trigger').each(function(){
        $(this).on('click', function() {
			var windowWidth = window.innerWidth;
			if (windowWidth <= 768) {
				$(this).toggleClass('is-open');
				if ($(this).hasClass('is-open')) {
					$(this).find('.dropdown-nav').slideDown();
				} else {
					$(this).find('.dropdown-nav').slideUp();
				}
			}
        });
	});
	
	

    /*--------------------------------
      言語別
	 ---------------------------------*/
	var loadLang = $('.nturl.gt-current').attr('data-gt-lang');
	if(loadLang == 'ko'){
		$('.is-no-china').show();
		$('.is-no-korea').hide();
	} else if(loadLang == 'zh-CN'){
		$('.is-no-korea').show();
		$('.is-no-china').hide();
	} else {
		$('.is-no-china').show();
		$('.is-no-korea').show();
	}
	$('.nturl').click(function(){
		var lang = $(this).attr('data-gt-lang');
		if(lang == 'ko'){
			$('.is-no-china').show();
			$('.is-no-korea').hide();
		} else if(lang == 'zh-CN'){
			$('.is-no-korea').show();
			$('.is-no-china').hide();
		} else {
			$('.is-no-china').show();
			$('.is-no-korea').show();
		}
	});
	
});


$(window).on('load resize',function(){
    
    var windowWidth = window.innerWidth;
    
    /*--------------------------------
        SP menu
    ---------------------------------*/
    
    if (windowWidth <= 768) {
        $('.gnav-wrap').css('display','none');
            
    } else if (windowWidth > 768){
        $('#sp-menu-trigger').removeClass('is-active');
        $('.gnav-wrap').css('display','flex');
    }
    
    
    /*--------------------------------
        headerの高さ分調整
    ---------------------------------*/
	var headerHeight = $('header').innerHeight();
	$('.cont-wrap').css({'padding-top':headerHeight});
    
    
});

var timer = false;
$(window).resize(function() {
    if (timer !== false) {
        clearTimeout(timer);
    }
    timer = setTimeout(function() {
		var windowWidth = window.innerWidth;
		if (windowWidth > 768){
			$('.dropdown-nav').css('display','none');
			$('#gnav .is-trigger').removeClass('is-open');
		}
    }, 200);
});

/*--------------------------------
  fixed ヘッダー横スクロール
---------------------------------*/
$(window).on('scroll', function(){
    var windowWidth = window.innerWidth;
	if (windowWidth > 768) {
		$('header').css('left', -$(window).scrollLeft());
	}
});