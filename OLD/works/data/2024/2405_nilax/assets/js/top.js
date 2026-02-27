/*--------------------------------
   header固定
---------------------------------*/
var navPos = jQuery( '.header' ).offset().top; // 位置
var navHeight = jQuery( '.header' ).outerHeight(); // 高さ
$('.header').removeClass('is_fixed');       
jQuery( window ).on( 'scroll', function() {
			if ( jQuery( this ).scrollTop() > navPos ) {
				jQuery( 'body' ).css( 'padding-top', navHeight );
				jQuery( '.header' ).addClass( 'is_fixed' );
			} else {
				jQuery( 'body' ).css( 'padding-top', 0 );
				jQuery( '.header' ).removeClass( 'is_fixed' );
			}	
});




	