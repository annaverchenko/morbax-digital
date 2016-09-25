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

$(document).ready(function(){
    $('.slider5').bxSlider({
        slideWidth: 426,
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 1,
        slideMargin: 0
    });
});

// vanilla JS
// init with element
var grid = document.querySelector('.grid');
var msnry = new Masonry( grid, {
    // options...
    itemSelector: '.grid-item',
    columnWidth: 288
});

// init with selector
var msnry = new Masonry( '.grid', {
    // options...
});

