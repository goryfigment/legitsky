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

var contactSuccessTemplate = __webpack_require__(57);

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

    $(document).on('click', '#search-icon-button', function () {
        var $searchInput = $('#search-input');

        if ($searchInput.val().trim().length > 0) {
            $('#submit').click();
            $searchInput.prop('disabled', true);
        }
    });

    $(document).on('click', '#contact-submit', function (e) {
        e.preventDefault();
        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var message = $('#message').val().trim();

        if (name.length > 0 && email.length > 0 && message.length > 0) {
            var postData = {
                'name': name,
                'email': email,
                'message': message
            };

            $.ajax({
                url: globals.base_url + '/contact-submit/',
                data: postData,
                dataType: 'json',
                type: "GET",
                success: function (response) {
                    if(response['success']) {
                        var $policyWrapper = $('#policy-wrapper');
                        $policyWrapper.empty();
                        $policyWrapper.append(contactSuccessTemplate({}));
                    }
                }
            });
        }
    });
});

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(1);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"success-container\">\r\n    <h3>Thank you for your feedback!</h3>\r\n    <div>Message has been sent!</div>\r\n</div>";
},"useData":true});

/***/ })

},[50]);