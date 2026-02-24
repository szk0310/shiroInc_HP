$(function () {
    var barValue = $('.img-range').val();
	$('.control-range').val(barValue);
	
	// ドラッグ時の処理
	$('.img-wrap input').on( 'input', function () {
		$('.btn-start').removeClass('is-play');
		$('.btn-start').addClass('is-stop');
		barValue = $(this).val();
		$('.img-range').val(barValue);
		$('.control-range').val(barValue);
		var ret = ( '00' + barValue ).slice( -2 );
		
		
		var set_elem = $('.draggable-area img');
		
		var elmNum = set_elem.attr('src').slice(-6);
		
		set_elem.each(function(){
			var $this = $(this);
			set_elem.attr('src',$this.attr('src').replace(elmNum, ret + '.jpg'));
		});
		
	});
	
	//自動再生の処理
	$('.btn-start.is-stop').click(function(){
		$(this).toggleClass('is-stop');
		$(this).toggleClass('is-play');
		//初期化
		//$('.img-wrap input').val(1);
		var set_elem = $('.draggable-area img');
		var elmNum = set_elem.attr('src').slice(-6);
		/* set_elem.each(function(){
			var $this = $(this);
			set_elem.attr('src',$this.attr('src').replace(elmNum, '00.png'));
		}); */
		
		//カウント
		var initialStart = 30;
		var initialEnd = 35;
		var step = 1;
		var count = initialStart;
		
		var dataRange = $('.img-wrap input');
		
		var countup = () => {
			count += step;
			dataRange.val(count);
			var ret = ( '00' + count ).slice( -2 );
			elmNum = set_elem.attr('src').slice(-6);
			set_elem.each(function(){
				var $this = $(this);
				set_elem.attr('src',$this.attr('src').replace(elmNum, ret + '.jpg'));
			});
			var srcVal = set_elem.attr('src');
		};
		var id = setInterval(() => {
			countup();
			if (count > initialEnd - step) {
				// clearInterval(id);
				count = 0;
			}
			// 停止ボタンを押した時の処理
			if ($(this).hasClass('is-stop')) {
				clearInterval(id);
			}
		}, 150);
		
		count = initialStart;
		
		
		// 停止ボタンを押した時の処理
		if ($(this).hasClass('is-stop')) {
			var stop_elmNum = set_elem.attr('src').slice(-6).slice(0,-4);
			clearInterval(id);
			
			$('.img-range').val(stop_elmNum);
			$('.control-range').val(stop_elmNum);

			set_elem.each(function(){
				var $this = $(this);
				set_elem.attr('src',$this.attr('src').replace(elmNum, stop_elmNum + '.jpg'));
			});
		}
	});
	
	
	
	const inputRange = RangeTouch.setup('[type=range]')
});


