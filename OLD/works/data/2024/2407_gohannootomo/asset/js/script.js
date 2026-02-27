
/* ページ内リンク */
$(function(){
  $(window).on('load resize', function () {
    $('a[href^="#"]').click(function(){
      var speed  = 400;
      var href   = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var adjust = 0;
      if( $('.p-header__navi_box.is_position-fixed').length ){
        adjust = $('.p-header__navi_box.is_position-fixed').height();
      }
      if (!target.length) {
        return false;
      }
      var position = target.offset().top - adjust;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
  });
});



/* モーダルウィンドウ */
$(function(){
  if( $('.js_modaal__video').length ){
    $('.js_modaal__video').modaal({
      type: 'video',
    });
  }
  if( $('.js_modaal__image').length ){
    $('.js_modaal__image').modaal({
      type: 'image',
    });
  }
});



/* rwdImageMaps */
$(function(){
  $(document).ready(function(){
    $('img[usemap]').rwdImageMaps();
  });
});



/* footer__pagetop_btn */
$(function(){
  if( $('.p-footer__pagetop_btn').length ){
    $(window).on('load scroll resize', function () {
      scrollHeight        = $(document).height();
      scrollPosition      = $(window).height() + $(window).scrollTop();
      footHeight          = $('.p-footer__info').innerHeight();
      pagetopHeight       = $('.p-footer__pagetop_btn').height();
      floatingbottomHeight  = 0;

      if( $('.p-floatingcart').is(':visible') ){
        floatingbottomHeight  = $( $('.p-floatingcart:visible') ).height();
      }

      if( $('.p-minicart').is(':visible') ){
        floatingbottomHeight  = $( $('.p-minicart:visible') ).height();
      }

      //console.log( scrollHeight + '/' + footHeight );

      $('.p-footer__pagetop_btn').css('bottom',floatingbottomHeight);

      if ( scrollHeight - scrollPosition - ( pagetopHeight * 2.5 ) <= footHeight - floatingbottomHeight ) {
        $('.l-page').removeClass('is_pagetopbtn-fixed');
        $('.p-footer__pagetop_btn').css('bottom',0);
      } else {
        $('.l-page').addClass('is_pagetopbtn-fixed');
        $('.p-footer__pagetop_btn').css('bottom',floatingbottomHeight);
      }
    });
  }
});



/* hamburgermenu */
$(function(){
  if( $('.js_hamburgermenu__btn').length ){
    $('.js_hamburgermenu__btn').click(function(){
      $('.l-page').toggleClass('is_hamburgermenu-open');
      $('body').toggleClass('is_scroll-disable');
      return false;
    });
  }
});



/* customsearch */
$(function(){
  if( $('.js_customsearch__btn').length ){
    $('.p-customsearch.is_position-right .js_customsearch__btn').click(function(){
      $('.l-page').toggleClass('is_customsearch-r-open');
      $('body').toggleClass('is_scroll-disable');
      return false;
    });
    $('.p-customsearch.is_position-bottom .js_customsearch__btn').click(function(){
      $('.l-page').toggleClass('is_customsearch-b-open');
      $('body').toggleClass('is_scroll-disable');
      return false;
    });
  }
});

/* customsearch */
$(function(){
  if( $('.js_searchresultdisplayformat').length ){

    $('.js_searchresultdisplayformat__swicth--box').click(function(){
      $('.js_searchresultdisplayformat__target').removeClass('is_displayformat-list');
      $('.js_searchresultdisplayformat__target').addClass('is_displayformat-box');
      $('.js_searchresultdisplayformat__swicth--list').removeClass('is_searchresultdisplayformat-select');
      $('.js_searchresultdisplayformat__swicth--box').addClass('is_searchresultdisplayformat-select');
    });

    $('.js_searchresultdisplayformat__swicth--list').click(function(){
      $('.js_searchresultdisplayformat__target').removeClass('is_displayformat-box');
      $('.js_searchresultdisplayformat__target').addClass('is_displayformat-list');
      $('.js_searchresultdisplayformat__swicth--box').removeClass('is_searchresultdisplayformat-select');
      $('.js_searchresultdisplayformat__swicth--list').addClass('is_searchresultdisplayformat-select');
    });

  }
});

/* js_customsearch__narrowdown_select */
$(function(){
  if( $('.js_customsearch__narrowdown_select').length ){
      $('.js_customsearch__narrowdown_select select').change(function() {
        $(this).nextAll('select').prop('selectedIndex', 0);
        $(this).nextAll('select').hide();
        $(this).next('select').show();
      });
  }

});





/* js_slide__tophero01 */
$(function(){

  if( $('#js_slide__tophero01_item01').length ){
    $('#js_slide__tophero01_item01 ul').slick({
      infinite: true,
      autoplay: true,
      dots: true,
      autoplaySpeed: 10000,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      //centerMode: true,
      //variableWidth: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
          }
        },
      ]
    });
  }

    /*if( $('.js_slide__bnr01-md[data-slide]').length ){
      $('.js_slide__bnr01-md[data-slide] ul').slick({
        infinite: false,
        autoplay: true,
        //dots: true,
        autoplaySpeed: 3000,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        //variableWidth: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              centerMode: true,
            }
          },
        ]
      });
    }*/




    if( $('.js_slide__tophero01-lg .swiper').length ){
      const mySwiper = new Swiper('.js_slide__tophero01-lg .swiper', {
        initialSlide: 0,
        loop: true,
        //slidesPerView: 1,
        slidesPerView: 'auto',
        //centerdSlides: true,
        pagination: {
          el: '.swiper-tophero-pagination',
          type: 'bullets',
          clickable: true,
        },
        paginationClickable: true,
        navigation: {
          nextEl: '.swiper-tophero-button-next',
          prevEl: '.swiper-tophero-button-prev',
        },
        /*scrollbar: {
          el: '.swiper-scrollbar',
        },*/
        /*breakpoints: {
         768: {
           slidesPerView: 7.0,
           spaceBetween: 10,
         },
         1200: {
           slidesPerView: 10.0,
           spaceBetween: 10,
         },
       }*/
      });
    }

    if( $('.js_slide__bnr01-md .swiper').length ){
      const mySwiper = new Swiper('.js_slide__bnr01-md .swiper', {
        //loop: true,
        slidesPerView: 1.07,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        breakpoints: {
         768: {
           loop: false,
           slidesPerView: 3.5,
           spaceBetween: 25,
         },
       }
      });
    }

    if( $('.js_slide__minicartlist-md .swiper').length ){
      const mySwiper = new Swiper('.js_slide__minicartlist-md .swiper', {
        centerdSlides: true,
        width: 230,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
    }

    if( $('.js_slide__productlist01-md .swiper').length ){
      const mySwiper = new Swiper('.js_slide__productlist01-md .swiper', {
        //loop: true,
        //centeredSlides: true,
        slidesPerView: 2.0,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
         620: {
           loop: false,
           slidesPerView: 2.2,
           spaceBetween: 15,
         },
         768: {
           loop: false,
           slidesPerView: 3.0,
           spaceBetween: 20,
         },
          980: {
            loop: false,
            slidesPerView: 4.0,
            spaceBetween: 20,
          },
          1200: {
            loop: false,
            slidesPerView: 5.0,
            spaceBetween: 20,
          },
       }
      });
    }

    if( $('.js_slide__productdetailimg01 .swiper').length ){
      const mySwiper = new Swiper('.js_slide__productdetailimg01 .swiper', {
        loop: true,
        spaceBetween: 1,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        /*scrollbar: {
          el: '.swiper-scrollbar',
        },*/
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }

    if( $(':not(.p-customsearch) .js_slide__customsearchdateselectday01 .swiper').length ){
      const mySwiper = new Swiper(':not(.p-customsearch) .js_slide__customsearchdateselectday01 .swiper', {
        loop: false,
        spaceBetween: 10,
        slidesPerView: 4.2,
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        breakpoints: {
         768: {
         slidesPerView: 10.2,
         },
       }
      });
    }

    if( $('.p-customsearch .js_slide__customsearchdateselectday01 .swiper').length ){
      const mySwiper = new Swiper('.p-customsearch .js_slide__customsearchdateselectday01 .swiper', {
        loop: false,
        spaceBetween: 10,
        slidesPerView: 4.2,
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        breakpoints: {
         768: {
         slidesPerView: 6.2,
         },
       }
      });
    }

});


if( $('.js_slide__catelistmenu01-md .swiper').length ){
  const mySwiper = new Swiper('.js_slide__catelistmenu01-md .swiper', {
    //loop: true,
    //centeredSlides: true,
    /*slidesPerView: 4.5,*/
    //width: 150,
    //spaceBetween: 10,
    slidesPerView: 3.0,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
     768: {
       slidesPerView: 7.0,
       spaceBetween: 10,
     },
     1200: {
       slidesPerView: 10.0,
       spaceBetween: 10,
     },
    }
  });
}



/* アコーディオン */
$(function(){
  if( $('.js_accordionmenu01').length ){
    $('.p-accordionmenu__box_item--trigger').click(function(){
      $(this).toggleClass('is_accordionmenu-open');
      $(this).next('.p-accordionmenu__box_item--target').toggleClass('is_accordionmenu-open');
      return false;
    });
  }
});



/* アコーディオン */
$(function(){
  if( $('.js_accordioninfo01').length ){
    $('.p-accordioninfo__box_item--trigger').click(function(){
      $(this).toggleClass('is_accordioninfo-open');
      $(this).next('.p-accordioninfo__box_item--target').toggleClass('is_accordioninfo-open');
      return false;
    });
  }
});



/* ミニカート */
$(function(){
  if( $('.js_minicart01').length ){
    $('.p-minicart__box_item--trigger').click(function(){
      //$(this).toggleClass('js_minicart-open');
      //$(this).next('.p-minicart__box_item--target').toggleClass('js_minicart-open');
      $('.js_minicart01').toggleClass('js_minicart-open');
      return false;
    });
  }
});



/* マイページメニュー */
$(function(){
  if( $('.js_mypagemenu01').length ){
    $('.p-mypagemenu__box_item--trigger').click(function(){
      $(this).toggleClass('is_mypagemenu-open');
      $(this).next('.p-mypagemenu__box_item--target').toggleClass('is_mypagemenu-open');
      return false;
    });
  }
});



/* 支払い方法 */
$(function(){
  if( $('.js_paymentmethod01').length ){

    var item = $('.p-paymentmethod__menu input[type="radio"]:checked').attr('data-item');
    $('.p-paymentmethod__box_item').removeClass('is_paymentmethod-open');
    $('.p-paymentmethod__box_item[data-item="' + item + '"]').addClass('is_paymentmethod-open');

    $('.js_paymentmethod__trigger').change(function(){
        item = $(this).attr('data-item');
        $('.p-paymentmethod__box_item').removeClass('is_paymentmethod-open');
        $('.p-paymentmethod__box_item[data-item="' + item + '"]').addClass('is_paymentmethod-open');
    });
  }
});



/* ショップ検索 */
$(function(){
  if( $('.js_shopsearchlist01').length ){
    $('.p-shopsearchlist__box_item--trigger').click(function(){
      $(this).toggleClass('is_shopsearchlist-open');
      $(this).next('.p-shopsearchlist__box_item--target').toggleClass('is_shopsearchlist-open');
      return false;
    });
  }
});



/* ポップメニューアコーディオン */
$(function(){
  if( $('.js_popmenu01').length ){
    $('.p-mod__popmenu01__box_item--trigger').click(function(){
      $(this).toggleClass('is_popmenu-open');
      $(this).next('.p-mod__popmenu01__box_item--target').toggleClass('is_popmenu-open');
      return false;
    });
    $('.p-mod__popmenu01__box_item--target').click(function(){
      $(this).prev('.p-mod__popmenu01__box_item--trigger').click();
      return false;
    });
  }
});



/* 吹き出し */
$(function(){
  if( $('.js_popballoon01').length ){
    $('.js_popballoon01').hover(
      function() {
        $(this).addClass('is_popballoon-open');
      },
      function() {
        $(this).removeClass('is_popballoon-open');
      }
    );
    /*$('.p-mod__popballoon01__box_item--trigger').click(function(){
      $(this).toggleClass('is_popballoon-open');
      $(this).next('.p-mod__popballoon01__box_item--target').toggleClass('is_popballoon-open');
      return false;
    });
    $('.p-mod__popballoon01__box_item--target').click(function(){
      $(this).prev('.p-mod__popballoon01__box_item--trigger').click();
      return false;
    });*/
  }
});



/* 入力チェック */
$(function(){
});
$(function() {
$('.js_inputcheck__doublebyte').change(function(){
	var txt  = $(this).val();
	var han = txt.replace(/[Ａ-Ｚａ-ｚ０-９！”＃＄％＆’（）＝～｜‘｛＋＊｝＜＞？＿－＾￥＠「；：」、。・]/g,function(s){return String.fromCharCode(s.charCodeAt(0)-0xFEE0)});
	$(this).val(han);
});
});



/* タグの高さ確保 */
/*$(function(){
  if( $('.p-productlist__slide .p-productlist__box_item--tag').length ){
    $(window).on('load resize', function () {
      $('.p-productlist__slide').each(function(i) {
        var tagHeight = new Array();
        $('.p-productlist__box_item--tag',this).each(function(idx){
          tagHeight[idx]=$(this).height();
        });
        var tagHeightMax = Math.max.apply(null,tagHeight);
        $('.p-productlist__box_item--tag',this).css({'height':tagHeightMax+'px'});
      });
    });
  }
});*/




/* お気に入りボタン（サンプル） */
$(function(){
    $('.p-productlist__box_item--img-favorite').click(function(){
      $(this).parents('.p-productlist__box_item').toggleClass('is_product-favorite');
      return false;
    });
    $('.p-productdetail__box_fav').click(function(){
      $(this).parents('.p-productdetail').toggleClass('is_product-favorite');
      return false;
    });
});




/* 同意チェック */
$(function(){
  if( $('.is_check-checkbox').length ){

    $('.is_check-checkbox-target').addClass('is_btnlink-disable');
    $('.is_check-checkbox-trigger[type=checkbox]').change(function() {
      if($(this).prop('checked')){
        $('.is_check-checkbox-target').removeClass('is_btnlink-disable');
      }else{
        $('.is_check-checkbox-target').addClass('is_btnlink-disable');
      }
    });

  }
});




/* レビュー */
$(function(){
  if( $('.js_reviewstar01').length ){

    $('.js_reviewstar01 object').click(function(e){
      var w = $(this).width();
      var x = e.offsetX;
      //var s = Math.round( ( x/w * 5 ) , 1 );
      var s = x / w * 5;
      var n = Math.ceil( s );
      //alert( s + '/' + (x/w*5) )
      $(this).parents('.js_reviewstar01').attr('data-score',n);
    });

  }
});



/* 【検証用】ログオフ／ログイン切り替え */
/*$(function(){

  $('.l-wrapper').prepend('<div class="js_switch__testaccount"><ul><li class="js_switch__testaccount_logoff">ログオフ</li><li class="js_switch__testaccount_login is_testaccount-select">ログイン</li><li class="js_switch__testaccount_emergency">緊急時</li></ul></div>');

  //$('.l-page').removeClass('is_account-login').addClass('is_account-logoff');
  $('.l-page').removeClass('is_account-logoff').addClass('is_account-login');

  $('.js_switch__testaccount_logoff').click(function(){
    $('.js_switch__testaccount ul li').removeClass('is_testaccount-select');
    $('.js_switch__testaccount ul li.js_switch__testaccount_logoff').addClass('is_testaccount-select');
    $('.l-page').removeClass('is_account-login').addClass('is_account-logoff');
    return false;
  });

  $('.js_switch__testaccount_login').click(function(){
    $('.js_switch__testaccount ul li').removeClass('is_testaccount-select');
    $('.js_switch__testaccount ul li.js_switch__testaccount_login').addClass('is_testaccount-select');
    $('.l-page').removeClass('is_account-logoff').addClass('is_account-login');
    return false;
  });

  $('.js_switch__testaccount_emergency').click(function(){
    $('.js_switch__testaccount ul li.js_switch__testaccount_emergency').toggleClass('is_testaccount-select02');
    $('.l-page').toggleClass('is_state-emergency');
    return false;
  });

});
*/
