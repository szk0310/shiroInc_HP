


/*--------------------------------
      ハンバーガー
---------------------------------*/
$('#nav_toggle').click(function(){
	$("nav").slideToggle(600);
	$("header").toggleClass('open');
		$('.accordion-btn').removeClass('is-active');
	$('.accordion').slideUp();

});

$('nav li a ').click(function(){
	$("nav").slideToggle(100);
	$("header").toggleClass('open');
	$('.accordion-btn').removeClass('is-active');
	$('.accordion').slideUp();

});

$(window).on('load resize', function(){
	if($(window).innerWidth() < 768 ){
		//スマホの時の状態
		$('#nav_toggle').show();
	}else{
		//タブレット・PCの時の状態
		$("header").removeClass('open');
		$('#nav_toggle').hide();
		$('nav').hide();
	}
}); 


 /*--------------------------------
 ドロップダウンメニュー
 ---------------------------------*/

$('.dropdown-btn').hover(
	function() {
		//カーソルが重なった時
		$(this).children('.dropdown').stop().slideDown();
	$('header').addClass('is-active');
}, function() {
	//カーソルが離れた時
	$(this).children('.dropdown').stop().slideUp();
	$('header').removeClass('is-active');
  }
);

	$('.focus-btn').focus(function(){
		$(this).next('.dropdown').slideDown();
		$(this).addClass('is-active');
		$(this).parent().prev().children('.dropdown').slideUp();
		$(this).parent().next().children('.dropdown').slideUp();
		$(this).parent().prev().children('.focus-btn').removeClass('is-active');
		$(this).parent().next().children('.focus-btn').removeClass('is-active');
	});
	$('body').click(function(){
		$('.dropdown').slideUp();
	});	


 /*--------------------------------
SP_navi_アコーディオン
 ---------------------------------*/
$('.accordion-btn').click(function(){
	if( (this).className !== 'accordion-btn is-active' ){
		$('.accordion-btn').removeClass('is-active');
		$('.accordion').slideUp();
	}
	$(this).parent().next(".accordion").slideToggle(600);
	$(this).toggleClass('is-active')
});

$(window).on('load resize', function(){
	$('.accordion-btn').removeClass('is-active');
	$('.accordion').slideUp();
}); 

$('.accordion-end').blur(function(){
	$('.accordion-btn').removeClass('is-active');
	$('.accordion').slideUp();
	$('nav').slideUp();
	$("header").removeClass('open');
});

 
	

var windowWidth = window.innerWidth;

    /*--------------------------------
      smoothscroll
	 ---------------------------------*/
var headerHeight = $('header').innerHeight() - 1;
var urlHash = location.hash;
if(urlHash) {
    $('body,html').stop().scrollTop(0);
    setTimeout(function(){
        var target = $(urlHash);
        var position = target.offset().top - headerHeight;
		var str = window.location.href.split('/').pop();
		str = str.split('.').shift();
		str = str.slice(0,7);
		if (windowWidth <= 768) {
			if(str == 'feature'){position = target.offset().top - headerHeight - headerHeight;}
		}
		$('body,html').stop().animate({scrollTop:position}, 500);
    }, 100);
}
$('a[href^="#"]').click(function() {
    var href= $(this).attr("href");
    var target = $(href);
    var position = target.offset().top - headerHeight;
		var str = window.location.href.split('/').pop();
		str = str.split('.').shift();
		str = str.slice(0,7);
		var str2 = window.location.href.split('/').slice( -2);
		str2 = str2.slice(0,1);

	if (windowWidth <= 768) {
		if(str == 'feature' || str2 == 'company'){position = target.offset().top - headerHeight - headerHeight;}
	}
    $('body,html').stop().animate({scrollTop:position}, 500);

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
      header
	 ---------------------------------*/
    var header = $('#top header');
header.hide();
	//var mvHeight = $('#mv').innerHeight() - 200;
var mvHeight = 30;

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > mvHeight) {
            header.slideDown();

        } else {
            header.slideUp();
        }
    });



$(window).on('load resize', function(){
	/*--------------------------------
        コンテンツが少ない時のフッターの位置
---------------------------------*/
   // var contentsMinHeight = $(window).height() - $('header').innerHeight() - $('footer').innerHeight();
	var contentsMinHeight = $(window).height()  - $('footer').innerHeight();
    $('.wrap').css('min-height', contentsMinHeight);

	
	
/*--------------------------------
      featute フロートメニュー
 ---------------------------------*/
		$('.menu-wrap.on').removeClass('is-active');
		var elem = document.getElementById('menu');
		var rect = elem.getBoundingClientRect();
		var elembottom = rect.bottom + window.pageYOffset;
		var getTopPosition  = $(window).scrollTop();
		if (getTopPosition >  elembottom - headerHeight) {
				$('.menu-wrap.on').addClass('is-active');
			} else {
				$('.menu-wrap.on').removeClass('is-active');
			}



/*--------------------------------
     modal_base
 ---------------------------------*/
	var style = $('modal-content').style;
	style.height = '100vh';

	
});
	

	$(window).on("scroll", function () {

		var elem = document.getElementById('menu');
		var rect = elem.getBoundingClientRect();
		var elembottom = rect.bottom + window.pageYOffset;
		//var elemtop = rect.top + window.pageYOffset;
		//var elemleft = rect.left + window.pageXOffset;
		//var elemright = rect.right + window.pageXOffset;
		var getTopPosition  = $(window).scrollTop();
		if (getTopPosition >  elembottom - headerHeight) {
				$('.menu-wrap.on').addClass('is-active');
			} else {
				$('.menu-wrap.on').removeClass('is-active');
			}

		
		var elem_sp = document.getElementById('mv-inn');
		var rect_sp = elem_sp.getBoundingClientRect();
		var elemtop_sp = rect_sp.top + window.pageYOffset;

		if ($(this).scrollTop() >  elemtop_sp  + headerHeight) {
			$('.menu-wrap_sp').addClass('fix')
			} else {
				$('.menu-wrap_sp').removeClass('fix')
		}


    });



/*--------------------------------
SP_menu_アコーディオン
---------------------------------*/

		$('.menu-accordion-btn').click(function(){
			$(this).next(".menu-accordion").slideToggle(600);
			$(this).toggleClass('is-active')
		});
		$('.menu-accordion a').click(function(){
			$('.menu-accordion-btn').removeClass('is-active');
			$('.menu-accordion').slideUp();
		}); 

		$(window).on('load resize', function(){
				$('.menu-accordion-btn').removeClass('is-active');
				$('.menu-accordion').slideUp();
		}); 

		$('#nav_toggle').focus(function(){
			$('.menu-accordion-btn').removeClass('is-active');
			$('.menu-wrap_sp').removeClass('fix')
			$('.menu-accordion').slideUp();

			$('.menu-wrap_sp').addClass('fix')			
		});


		$('.menu-end').blur(function(){
			$('.menu-accordion-btn').removeClass('is-active');
			$('.menu-wrap_sp').removeClass('fix')
			$('.menu-accordion').slideUp();
		});



/*--------------------------------
  モーダル
---------------------------------*/

	// モーダルウィンドウを開く
	$(function(){
		$('.modal-btn').on('click', function(){
			var target = $(this).data('target');
			var modal = document.getElementById(target);
			var scrollPosition = $(window).scrollTop();

			$('body').addClass('fixed').css({'top': -scrollPosition});
			$(modal).fadeIn();
			return false;
		});
	});

	// モーダルウィンドウを閉じる
	$(function(){
		$('.modal-close').on('click', function(){
			$('.modal-content').fadeOut();
			$('body').removeClass('fixed');
			var scrollPosition = $(window).scrollTop();
			window.scrollTo( 0 , scrollPosition );
			return false;
		});
	});




