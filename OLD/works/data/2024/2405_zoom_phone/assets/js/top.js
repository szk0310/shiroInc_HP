$(function () {
    
	/*--------------------------------
	 	Q&A アコーディオン
	 ---------------------------------*/
	$('.faq-txt-q').on('click',function(){
		$(this).toggleClass('is-active');
		$(this).next('.faq-txt-a').slideToggle();
	});
	
	/*--------------------------------
	 	グロナビ is-current
	 ---------------------------------*/
	$('.gnav ul li a').click(function(){
		$(this).addClass('is-current');
		$('.gnav ul li a').not($(this)).removeClass('is-current');
	});
	
	/*--------------------------------
	 	lightbox options
	 ---------------------------------*/
	lightbox.option({
		'maxWidth': 600,
		'positionFromTop': 0,
	});
	
});


// スクロール可能のヒントを出す
new ScrollHint('.table-scroll-wrap', {
  i18n: {
    scrollable: 'スクロールできます'
  }
});


$(function() {

	/**
	 * 現在スクロール位置によるグローバルナビのアクティブ表示
	 */
	var scrollMenu = function() {
		// 配列宣言
		// ここにスクロールで点灯させる箇所のidを記述する
		// 数値は全て0でOK
		var array = {
		  "#top": 0,
		  "#about": 0,
		  "#case": 0,
		  "#lineup": 0,
		  "#strengths": 0,
		  "#faq": 0,
		};

		var $globalNavi = new Array();

		// 各要素のスクロール値を保存
		var headerHeight = $('header').innerHeight();
		for (var key in array) {
			if ($(key).offset()) {
				array[key] = $(key).offset().top; // 数値丁度だとずれるので10px余裕を作る
				$globalNavi[key] = $('.gnav ul li a[href="' + key + '"]');
			}
		}

		// スクロールイベントで判定
		$(window).scroll(function () {
			var mvHeight = $('#top').innerHeight();
			for (var key in array) {
				if ($(window).scrollTop() > array[key] - headerHeight) {
					$('.gnav ul li a').each(function() {
						$(this).removeClass('is-current');
					});
					$globalNavi[key].addClass('is-current');
				} else if($(window).scrollTop() < mvHeight - headerHeight) {
					$('.gnav ul li:first-child a').each(function() {
						$(this).addClass('is-current');
					});
				}
			}
		});

		// スクロールイベントで判定
		$(window).on('load resize', function(){
			var mvHeight = $('#top').innerHeight();
			for (var key in array) {
				if ($(window).scrollTop() > array[key] - headerHeight) {
					$('.gnav ul li a').each(function() {
						$(this).removeClass('is-current');
					});
					$globalNavi[key].addClass('is-current');
				} else if($(window).scrollTop() < mvHeight - headerHeight) {
					$('.gnav ul li:first-child a').each(function() {
						$(this).addClass('is-current');
					});
				}
			}
		});
	}

	// 実行
	scrollMenu();
});