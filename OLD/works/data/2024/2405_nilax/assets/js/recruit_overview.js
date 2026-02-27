$('.tab__head li').on('click',function(){
	$('.tab--active').removeClass('tab--active');
	$(this).addClass('tab--active');
	// クリックしたタブからインデックス番号を取得
	var index = $(this).index();
	// クリックしたタブと同じインデックス番号をもつコンテンツを表示
	$('.tab__cont').hide();
	$('.tab__cont').eq(index).fadeIn().css('display','flex');
});


/* 続きを読む
$('.about-comeback__more-btn').on('click',function(){
		
		$(this).toggleClass('btn--open');
		if ($(this).hasClass('btn--open')) {
			$(this).prev('.about-comeback__body-txt').addClass('txt--open');
			$(this).text('閉じる');
		} else {
			$(this).prev('.about-comeback__body-txt').removeClass('txt--open');
			$(this).text('続きを読む');
		}

});


$(window).on('load resize', function(){
    var windowWidth = window.innerWidth;
    
	if (windowWidth <= 778) {
		var heightDefalt = '50vw';
	} else {
		heightDefalt = 'auto';
	}
});
 */

/* 続きを読む */
$(function () {
    var windowWidth = window.innerWidth;
    
	if (windowWidth <= 778) {
		var heightDefalt = '50vw';
	} else {
		heightDefalt = '';
	}
	$('.about-comeback__box-blue .about-comeback__body-txt').css('height', heightDefalt);
	
	$('.about-comeback__more-btn').on('click',function(){
		var autoHeight = $('.about-comeback__box-blue .about-comeback__body-txt').css('height', 'auto').height();
		$(this).toggleClass('btn--open');
		if ($(this).hasClass('btn--open')) {
			$(this).prev('.about-comeback__body-txt').animate({ height: autoHeight }, 200).delay(1000);
			$(this).text('閉じる');
		} else {
			$(this).prev('.about-comeback__body-txt').animate({ height: '50vw' }, 200);
			$(this).text('続きを読む');
		}

	});
});


var lastWidth = window.innerWidth;

$(window).on('load resize', function () {
    var windowWidth = window.innerWidth;
	
	// 画面横幅がリサイズされた場合
	if(lastWidth != windowWidth){
    
		if (windowWidth <= 778) {
			var heightDefalt = '50vw';
		} else {
			heightDefalt = '';
		}
		$('.about-comeback__box-blue .about-comeback__body-txt').css('height', heightDefalt);
		$('.about-comeback__more-btn').removeClass('btn--open');
		$('.about-comeback__more-btn').text('続きを読む');
		
		lastWidth = window.innerWidth;
	}
});


/* 続きを読む */
/*
$(function () {
    var windowWidth = window.innerWidth;
    
	if (windowWidth <= 778) {
		var heightDefalt = '50vw';
	} else {
		heightDefalt = '';
	}
	$('.about-comeback__box-blue .about-comeback__body-txt').css('height', heightDefalt);
});


var lastWidth = window.innerWidth;

$(window).on('load resize', function () {
    var windowWidth = window.innerWidth;
    
	if (windowWidth <= 778) {
		var heightDefalt = '50vw';
	} else {
		heightDefalt = '';
	}
	var autoHeight = $('.about-comeback__box-blue .about-comeback__body-txt').css({height : 'auto'}).height();
	$('.about-comeback__box-blue .about-comeback__body-txt').css('height', heightDefalt);

	if (windowWidth <= 778) {
		$('.about-comeback__more-btn').off('click');
		$('.about-comeback__more-btn').on('click',function(){

			$(this).toggleClass('btn--open');
			if ($(this).hasClass('btn--open')) {
				$(this).prev('.about-comeback__body-txt').animate({ height: autoHeight }, 200);
				$(this).text('閉じる');
			} else {
				$(this).prev('.about-comeback__body-txt').animate({ height: '' }, 200);
				$(this).text('続きを読む');
			}

		});
	} else {
		$('.about-comeback__box-blue .about-comeback__body-txt').css('height', '');
	}
	if(lastWidth != windowWidth){
		$('.about-comeback__more-btn').toggleClass('btn--open');
		$('.about-comeback__more-btn').text('続きを読む');
	}
});



var window_width = window.innerWidth;
var timer = false;
$(window).on('orientationchange resize', function () {
    var resize_width = window.innerWidth;
    if (window_width != resize_width) {
        if (timer !== false) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
			if (window_width > 778) {
				$('.about-comeback__box-blue .about-comeback__body-txt').css('height', '');
			} else {
				
			}
            window_width = resize_width;
        }, 500);
    }
});
*/