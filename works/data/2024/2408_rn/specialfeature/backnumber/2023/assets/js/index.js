/*--------------------------------
  画面リサイズ MV対応
---------------------------------*/
var timer = 0;
var windowWidth = window.innerWidth;

window.addEventListener('resize',function(){
var ua = navigator.userAgent;

if (ua.indexOf('iPhone') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0 )) {
// スマホ用の処理
} else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
// タブレット用の処理
} else {
　  if (timer > 0) {
    clearTimeout(timer);
  }
 
  timer = setTimeout(function () {
    location.reload();
  }, 200);
}
	

});


