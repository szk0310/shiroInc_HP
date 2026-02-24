
$(function(){
	var $win = $(window);
	var A = APP.GLOBAL;

	// visual
	// [ ビジュアルまわり ]
	var visual = function(){
		var $wrapper = $('#sec-visual');

		// SLICK INIT
		$('.list', $wrapper).on('init', function(){
			$wrapper.addClass('is-active');
		}).slick({
			fade: true,

			autoplay: true,
			autoplaySpeed: 4000,
			speed: 1500,

			arrows: false,
			draggable: false,
			pauseOnFocus: false,
			pauseOnHover: false,
			pauseOnDotsHover: false

		});

	};
	visual();


	// info
	// [ お知らせまわり ]
	var info = function(){
		var $wrapper = $('#sec-info');

		// SLICK INIT
		$('.list', $wrapper).on('init', function(){
			$wrapper.addClass('is-active');
		}).slick({
			draggable: false,
			vertical: true,

			autoplay: true,
			autoplaySpeed: 3500,
			pauseOnFocus: false,
			pauseOnHover: false,
			pauseOnDotsHover: false
		});

		// btn
		// [ next/prevボタン ]
		$('.btn-prev', $wrapper).on('click', function(){
			$('.slick-prev', $wrapper).trigger('click');
		});
		$('.btn-next', $wrapper).on('click', function(){
			$('.slick-next', $wrapper).trigger('click');
		});

	};
	info();




	// contents
	// [ SP時のアコーディオンまわり ]
	var contents = function(){
		var $wrapper = $('#sec-contents');
		var A = APP.GLOBAL;

			$('.logo a', $wrapper).on('click', function(){
				if( A.isSP_VIEW ){
				// SP幅
					var $this = $(this);
					var $item_list = $this.parent().next();

					if( !$this.hasClass('is-open') ){
						$this.addClass('is-open');
						$item_list.stop().slideDown('fast');
					}else{
						$this.removeClass('is-open');
						$item_list.stop().hide();
					}

					return false;
				}

			}); // $('.logo a', $wrapper).off().on('click', function(){


			$win.on('resize', function(){
				if( A.isSP_VIEW ){
					$('.logo a[target="_blank"]', $wrapper).addClass('dialog-no');
				}else{
					$('.logo a[target="_blank"]', $wrapper).removeClass('dialog-no');

					$('.logo a', $wrapper).removeClass('is-open');
					$('.item-list', $wrapper).removeAttr('style');
				}
			}).trigger('resize');



	};
	contents();


});
