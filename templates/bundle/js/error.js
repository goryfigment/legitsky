webpackJsonp([4],{

/***/ 10:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);
__webpack_require__(10);
__webpack_require__(5);
__webpack_require__(6);
__webpack_require__(8);

var $ = __webpack_require__(2);

function init() {

}

$(document).ready(function() {
    init();

    $(document).on('click', '#category-button', function () {
        $('html, body').animate({scrollTop: $(document).height()}, 'slow');
        return false;
    });

    $(document).on('keydown', '#search-input', function (e) {
        var $searchInput =  $('#search-input');

        if ($searchInput.val().trim().length > 0 && e.keyCode == 13) {
            $('#submit').click();
            $searchInput.prop('disabled', true);
        }
    });

    $('form').submit(function(e){
        if ($('#search-input').val().trim().length < 1) {
            e.preventDefault();
        }
    });

    $(document).on('click', '#search-input', function (e) {
        var $searchInput =  $('#search-input');

        if ($searchInput.val().trim().length > 0 && e.keyCode == 13) {
            $('#submit').click();
            $searchInput.prop('disabled', true);
        }
    });
});

/***/ })

},[50]);