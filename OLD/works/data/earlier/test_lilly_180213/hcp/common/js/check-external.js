$(function(){
	/**
	 * [checkExtlink 特定の外部リンクで警告表示]
	 */
	var checkExtlink = function(){
		var TARGET_URL = 'www.boehringerplus.jp';
		var CODE = '<div class="g-tpl-external-modal-wrap">\
	<div class="g-tpl-modal">\
	<div class="g-tpl-modal-dialog">\
		<div class="g-tpl-modal-content g-tpl">\
\
			<div class="g-tpl-modal-header">\
				<span class="btn-close">ｘ</span>\
				<h4 class="g-tpl-modal-title" id="H1">日本イーライリリーのサイトから外部サイトへ移動します。</h4>\
			</div><!-- /g-tpl-modal-header -->\
\
			<div class="g-tpl-modal-body clearfix">\
				<p>ここから先は日本イーライリリー株式会社のウェブサイトではありません。 このままページを表示する場合は「はい」を押してください。戻る場合は「元のページに戻る」を押してください。</p>\
\
				<div class="g-tpl-modal-btn-wrap">\
					<p class="btn-yes">\
						<a href="#" target="_blank">はい</a>\
					</p>\
					<p class="btn-back">\
						<a href="#">元のページに戻る</a>\
					</p>\
				</div><!-- /g-tpl-modal-btn-wrap -->\
\
			</div><!-- /g-tpl-modal-body -->\
\
		</div><!-- /g-tpl-modal-content -->\
	</div><!-- /g-tpl-modal-dialog -->\
</div><!-- /g-tpl-modal -->\
\
<div class="g-tpl-modal-backdrop"></div>\
</div><!-- /g-tpl-external-modal-wrap -->';


		// INIT
		$('body').append( CODE );
		var $modal = $('.g-tpl-external-modal-wrap');
		var $modal_outer = $('.g-tpl-modal');
		var $modal_dialog = $('.g-tpl-modal-dialog');

		var $btn_close = $('.btn-close', $modal);
		var $btn_yes_a = $('.btn-yes a', $modal);


		$('a').each(function(){
			var $this = $(this);
			var thisHref = $this.attr('href');

			$this.on('click', function(){
				if( thisHref.search( TARGET_URL ) != -1 && !$this.hasClass('dialog-no') ){

					$btn_yes_a.attr('href',thisHref);
					$('html,body').addClass('is-external-modal-open');
					$modal.addClass('is-open');

					return false;
				}
			}); // $this.on('click', function(){



		}); // $('a').each(function(){



		// canelBubble
		// [ イベントバブリング抑止 ]
		function canelBubble(_ev){
			if(_ev.stopPropagation){
			// Modern
				_ev.stopPropagation();
			}else{
			// IE9
				_ev.cancelBubble = true;
			}
		}

		// イベントバブリング抑止
		$modal_dialog.on('click', function(_ev){
			canelBubble(_ev);
		});



		// 閉じる処理
		$btn_close.on('click', function(){
			$('html,body').removeClass('is-external-modal-open');
			$modal.removeClass('is-open');
		});

		$('.btn-back a', $modal).on('click', function(){
			$btn_close.trigger('click');
			return false;
		});
		$btn_yes_a.on('click', function(){
			$btn_close.trigger('click');
		});
		$modal_outer.on('click', function(){
			$('html,body').removeClass('is-external-modal-open');
			$modal.removeClass('is-open');
		});


	};
	checkExtlink();
});
