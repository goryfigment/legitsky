require('./../css/general.css');
require('./../css/category.css');
require('./../library/fontawesome/fontawesome.js');

var $ = require('jquery');


$(document).ready(function() {
    $('.catalog-item-container').hover(function() {
        $(this).closest('.catalog-item').find('.favorite-button').css('opacity', '1');
    }, function() {
        $(this).closest('.catalog-item').find('.favorite-button').css('opacity', '0');
    });

    $('.favorite-button').hover(function() {
        $(this).css('opacity', '1');
        $(this).closest('.catalog-item').find('.catalog-item-container').addClass('hover');
    }, function() {
        $(this).css('opacity', '0');
        $(this).closest('.catalog-item').find('.catalog-item-container').removeClass('hover');
    });
});

