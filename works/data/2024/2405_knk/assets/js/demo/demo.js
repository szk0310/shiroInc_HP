
$(function () {
    
		var windowWidth = window.innerWidth;

		/*--------------------------------
			PC 仕様表
		---------------------------------*/
		var box = $('.table-wrap');

		if (windowWidth > 768){
			//.boxの下に.moreを作る
			if($('.btn-more').length < 1) {
				box.after('<div class="btn-more is-trigger">もっと見る</div>');
			}
			var more = $('.btn-more');


			var boxInnerH = $('.product-detail-table').innerHeight();
			if (boxInnerH < 800) {
				more.hide();
			} else {
				box.css({ height: '800px'});
			}
			$('.is-trigger').on('click', function() {
				$(this).toggleClass('is-open');
				var innerH = $('.product-detail-table').innerHeight();
				if ($(this).hasClass('is-open')) {
					box.addClass('is-open');
					more.text('閉じる');
					box.animate({
						height: innerH
					}, 200);
				} else {
					box.removeClass('is-open');
					more.text('もっと見る');
					box.animate({
						height: '800px'
					}, 200);
				}
			});
		}
});