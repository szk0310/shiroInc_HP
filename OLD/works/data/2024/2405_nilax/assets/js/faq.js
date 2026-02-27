$(function() {
	$('.faq__wrap').each(function(){
        $(this).children('.faq__q').on('click', function() {
			$(this).toggleClass('is-open');
			if ($(this).hasClass('is-open')) {
				$(this).next('.faq__a').slideDown();
			} else {
				$(this).next('.faq__a').slideUp();
			}
        });
	});

});