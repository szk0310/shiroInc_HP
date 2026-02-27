$(function () {
	
	/* ブレイクポイント
	---------------------------------------------------------------------------- */
	var is_pc = '(min-width:768px)';
	var is_sp = '(max-width:767px)';



	/* PC・SPで画像切り替え (IE)
	---------------------------------------------------------------------------- */
	var $set_elem = $('.is-imgswitch'),
		pc_name = '_pc',
		sp_name = '_sp';

	var userAgent = window.navigator.userAgent.toLowerCase();
	if( userAgent.indexOf('msie') != -1 || userAgent.indexOf('trident') != -1 ){
		$set_elem.each(function(){
			var $this = $(this);
			function img_size(){
				if( window.matchMedia( is_pc ).matches ){
					$this.attr('src',$this.attr('src').replace(sp_name,pc_name));
				} else {
					$this.attr('src',$this.attr('src').replace(pc_name,sp_name));
				}
			}
			$(window).resize(function(){img_size();});
			img_size();
		});
	}




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
    $('.sp-menu-trigger').click(function() {
            $(this).toggleClass('is-open');
            if ($(this).hasClass('is-open')) {
                $('.gnav-wrap').slideDown();
            } else {
                $('.gnav-wrap').slideUp();
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
        $('#sp-menu-trigger').removeClass('is-open');
        $('.gnav-wrap').css('display','block');
    }
    
    
    /*--------------------------------
        headerの高さ分調整
    ---------------------------------*/
    
    if (windowWidth <= 768) {
        var headerHeight = $('header').innerHeight();
        $('.main').css({'padding-top':headerHeight});
    } else if (windowWidth > 768){
        $('.main').css({'padding-top':0});
    }
    

	/*--------------------------------
       コンテンツが少ない時のフッターの位置
	---------------------------------*/
   // var contentsMinHeight = $(window).height() - $('header').innerHeight() - $('footer').innerHeight();
	var contentsMinHeight = $(window).height()  - $('footer').innerHeight();
    $('.main-wrap').css('min-height', contentsMinHeight);


    
});

