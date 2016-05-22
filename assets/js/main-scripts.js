/***
===========================
Main JS functionality
===========================
***/

//$(document).ready(function() {
//
//});

function show() {
    var menu = document.getElementById('my');
    my.style.display = 'block';
}

function hide() {
    var menu = document.getElementById('my');
    my.style.display = 'none';
}

function init() {
    var menu = document.getElementById('my');
    menu.onmouseover = show;
    menu.onmouseout = hide;
}

init();
