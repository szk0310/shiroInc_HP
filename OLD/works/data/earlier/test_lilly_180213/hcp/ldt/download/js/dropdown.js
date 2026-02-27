if (window.matchMedia( '(min-width: 751px)' ).matches) {
$(function() {
    $(".dropdown").hover(function() {
        $(".g_nav_sub:not(:animated)", this).slideDown(500);
    }, function() {
        $(".g_nav_sub", this).slideUp(300);
    });
});
}