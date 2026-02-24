//スクロール
$(function(){
	// ページ内リンクをクリックすると
	$('a[href^=#]').click(function(){
 		// スクロールスピード
 		var speed = 500;
 		// クリックしたリンク先を保存
		var href= $(this).attr("href");
		// クリックしたリンク先が#または空のときは
		var target = $(href == "#" || href == "" ? 'html' : href);
		// トップへ移動する
		var position = target.offset().top;
		// リンク先へスムーズに移動する
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});



$(function(){
	setTimeout(showContent,1000);
	function showContent(){
		$('body').css({ opacity: 1.0 });
	}
	
  $("#menu_trigger_open").on("click", function() {
	  $(this).addClass("active");
	  $("#spnav_over").fadeIn(600);
		return false;
  });
  $("#menu_trigger_close").on("click", function() {
	  $(this).removeClass("active");
	  return false;
  });
  $("#menu_trigger_close").on("click", function() {
	  $("#menu_trigger_open").removeClass("active");
	  $("#spnav_over").fadeOut(500);
	  return false;
  });
  $("#spnav_over").on("click", function() {
	  $(this).removeClass("active");
	  $("#spnav_over").fadeOut(500);
	  
  });
  $('.spnav_list li a').on("click", function() {
     $(this).removeClass("active");
		 $("#spnav_over").fadeOut(500);  
	});
  $('.spnav_list li a').on("click", function() {
     $("#menu_trigger_open").removeClass("active");
	  $("#spnav_over").fadeOut(500);
	});
});