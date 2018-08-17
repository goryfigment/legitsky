webpackJsonp([1],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(11);
__webpack_require__(2);

var $ = __webpack_require__(0);


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



/***/ }),

/***/ 11:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[10]);