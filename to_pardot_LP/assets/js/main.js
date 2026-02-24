$(function () {

    /*--------------------------------
      smoothscroll
	 ---------------------------------*/
    var headerHeight = $('header').innerHeight() - 1;
    $('a[href^="#"]:not(.js-modal-open,.modal-close)').click(function () {
        var speed = 700;
        var href = $(this).attr("href");
        var target = $(href === "#" || href === "" ? 'html' : href);
        var position = target.offset().top - headerHeight;
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });

});

/*--------------------------------
      ハンバーガーmenu
	 ---------------------------------*/

$('#sp-menu-trigger').click(function(){
    $("header").toggleClass('open');
    $("header nav").slideToggle();
});


$('header nav li a ').click(function(){
    if($(window).innerWidth() <= 768 ){
    $('#sp-menu-trigger').trigger('click');
    $("header").removeClass('open');
    } else{
        ;
    }
});


$(window).on('load resize', function(){

		$("header").removeClass('open');

    if($(window).innerWidth() <= 768 ){
        //スマホの時の状態
        $('#sp-menu-trigger').show();
		$("header nav").hide();
    } else{
        //タブレット・PCの時の状態
        $('#sp-menu-trigger').hide();
		$("header nav").show();
    }
}); 

/*--------------------------------
       modal
	 ---------------------------------*/
$(function () {
  $('.js-modal-open').on('click', function () {
    var target = $(this).data('target');
    var modal = document.getElementById(target);
    scrollPosition = $(window).scrollTop();
    $('body').addClass('fixed').css({
      'top': -scrollPosition
    });
    $(modal).fadeIn();
    return false;
  });
  $('.modal-close').on('click', function () {
    $('body').removeClass('fixed');
    window.scrollTo(0, scrollPosition);
    $('.js-modal').fadeOut();
    return false;
  });
});

