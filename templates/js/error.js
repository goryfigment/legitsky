require('./../css/general.css');
require('./../css/home.css');
require('./../css/header.css');
require('./../js/header.js');
require('./../library/fontawesome/fontawesome.js');

var contactSuccessTemplate = require('./../handlebars/home/contact_success.hbs');

var $ = require('jquery');

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