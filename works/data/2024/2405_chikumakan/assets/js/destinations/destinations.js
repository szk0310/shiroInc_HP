$(function () {
    /*--------------------------------
        画像拡大
    ---------------------------------*/
    $(".is-img-open").modaal({
        type: "inline",
		width: 1140,
		background: '#2B2624',
		overlay_opacity: 0.92, 
		custom_class: 'is-gallery'
    });
    $(".is-gellery-open").modaal({
        type: "inline",
		width: 1140,
		background: '#2B2624',
		overlay_opacity: 0.92, 
		custom_class: 'is-gallery'
    });
	
	$('.is-modaal-close').on('click', function () {
		$('.is-gellery-open').not(this).modaal('close');
	});
});