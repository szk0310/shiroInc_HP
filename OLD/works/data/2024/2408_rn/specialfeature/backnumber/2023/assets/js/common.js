


/*--------------------------------
      ハンバーガー
---------------------------------*/
$('#nav_toggle').click(function(){
	$("nav").slideToggle(600);
	$("header").toggleClass('open');
		$('.accordion-btn').removeClass('active');
	$('.accordion').slideUp();

});

$('nav li a ').click(function(){
	$("nav").slideToggle(100);
	$("header").toggleClass('open');
		$('.accordion-btn').removeClass('active');
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
	$('header').addClass('active');
  }, function() {
    //カーソルが離れた時
	  $(this).children('.dropdown').stop().slideUp();
	$('header').removeClass('active');
  }
);


 /*--------------------------------
SP　navi アコーディオン
 ---------------------------------*/
$('.accordion-btn').click(function(){
	if( (this).className !== 'accordion-btn active' ){
		$('.accordion-btn').removeClass('active');
		$('.accordion').slideUp();
	}
	$(this).parent().next(".accordion").slideToggle(600);
	$(this).toggleClass('active')
});

$(window).on('load resize', function(){
	$('.accordion-btn').removeClass('active');
	$('.accordion').slideUp();
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
		var str = str.split('.').shift();
		var str = str.slice(0,7);
			 if (windowWidth <= 768) {
		if(str == 'feature'){var position = target.offset().top - headerHeight - headerHeight;}
			 }
		$('body,html').stop().animate({scrollTop:position}, 500);
    }, 100);
}
$('a[href^="#"]').click(function() {
    var href= $(this).attr("href");
    var target = $(href);
    var position = target.offset().top - headerHeight;
		var str = window.location.href.split('/').pop();
		var str = str.split('.').shift();
		var str = str.slice(0,7);
		var str2 = window.location.href.split('/').slice( -2);
		var str2 = str2.slice(0,1);

	 if (windowWidth <= 768) {
		if(str == 'feature' ||　str2 == 'company'){var position = target.offset().top - headerHeight - headerHeight;}
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
		$('.menu-wrap.on').removeClass('active');
		var elem = document.getElementById('menu');
		var rect = elem.getBoundingClientRect();
		var elembottom = rect.bottom + window.pageYOffset;
		var getTopPosition  = $(window).scrollTop();
		if (getTopPosition >  elembottom - headerHeight) {
				$('.menu-wrap.on').addClass('active');
			} else {
				$('.menu-wrap.on').removeClass('active');
			}



/*--------------------------------
     modal　base
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
				$('.menu-wrap.on').addClass('active');
			} else {
				$('.menu-wrap.on').removeClass('active');
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
	 SP　navi アコーディオン
	 ---------------------------------*/

		$('.menu-accordion-btn').click(function(){
			$(this).next(".menu-accordion").slideToggle(600);
			$(this).toggleClass('active')
		});
		$('.menu-accordion a').click(function(){
			$('.menu-accordion-btn').removeClass('active');
			$('.menu-accordion').slideUp();
		}); 

		$(window).on('load resize', function(){
				$('.menu-accordion-btn').removeClass('active');
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
	  scrollPosition = $(window).scrollTop();

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
			window.scrollTo( 0 , scrollPosition );
		  return false;
		});
	});




