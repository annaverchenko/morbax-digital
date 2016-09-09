/***
===========================
Main JS functionality
===========================
***/

jQuery(document).ready(function() {
    jQuery('#myform select, input').styler();
});

$(document).ready(function(){
    $('.slider4').bxSlider({
        slideWidth: 290,
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 1,
        slideMargin: 1.5
    });
});

//(function($) {
//    $(function() {
//
//        $('input, select').styler();
//
//    });
//})(jQuery);