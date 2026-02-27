$(function() {
	// 切り替える対象にclass属性。
	var elem = $('.is-switch');

	// 切り替えの対象のsrc属性の末尾の文字列。
	var sp = '_sp.';
	var pc = '_pc.';

	// 画像を切り替えるウィンドウサイズ。
	var replaceWidth = 779;

	function imageSwitch() {
		// ウィンドウサイズを取得する。
		var windowWidth = window.innerWidth;

		// ページ内にあるすべての`.switch`に適応される。
		elem.each(function() {
			var $this = $(this);
			// ウィンドウサイズが768px以上であれば_spを_pcに置換する。
			if(windowWidth >= replaceWidth) {
				$this.attr('src', $this.attr('src').replace(sp, pc));

			// ウィンドウサイズが768px未満であれば_pcを_spに置換する。
			} else {
				$this.attr('src', $this.attr('src').replace(pc, sp));
			}
		});
	}
	imageSwitch();
});