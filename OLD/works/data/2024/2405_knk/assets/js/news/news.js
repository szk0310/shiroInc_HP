$(function() {
	if($('a[aria-current="page"]').length < 1){
		$('.all').addClass('is-current');
	} else {
		$('.all').removeClass('is-current');
	}
	$('.is-trigger').each(function(){
        $(this).on('click', function() {
			$(this).toggleClass('is-open');
			if ($(this).hasClass('is-open')) {
				$(this).next('.news-cont').slideDown();
			} else {
				$(this).next('.news-cont').slideUp();
			}
        });
	});

});