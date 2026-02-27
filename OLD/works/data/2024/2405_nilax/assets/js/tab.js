$('.tab__head li').on('click',function(){
	$('.tab--active').removeClass('tab--active');
	$(this).addClass('tab--active');
	// クリックしたタブからインデックス番号を取得
	var index = $(this).index();
	// クリックしたタブと同じインデックス番号をもつコンテンツを表示
	$('.tab__cont').hide();
	$('.tab__cont').eq(index).fadeIn().css('display','flex');
});

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

/* 続きを読む
$(function () {
    var windowWidth = window.innerWidth;
    
	if (windowWidth <= 778) {
		var heightDefalt = '50vw';
	} else {
		heightDefalt = 'auto';
	}
	var autoHeight = $('.about-comeback__box-blue .about-comeback__body-txt').innerHeight();
	$('.about-comeback__box-blue .about-comeback__body-txt').css('height', heightDefalt);

	$('.about-comeback__more-btn').on('click',function(){
		
		if (windowWidth <= 778) {
			$(this).toggleClass('btn--open');
			if ($(this).hasClass('btn--open')) {
				$(this).prev('.about-comeback__body-txt').animate({ height: autoHeight }, 100);
				$(this).text('閉じる');
			} else {
				$(this).prev('.about-comeback__body-txt').animate({ height: heightDefalt }, 100);
				$(this).text('続きを読む');
			}
		}
		
	});
});
 */