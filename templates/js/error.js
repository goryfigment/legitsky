require('./../css/general.css');
require('./../css/home.css');
require('./../css/header.css');
require('./../js/header.js');
require('./../library/fontawesome/fontawesome.js');

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

    $(document).on('click', '#search-input', function (e) {
        var $searchInput =  $('#search-input');

        if ($searchInput.val().trim().length > 0 && e.keyCode == 13) {
            $('#submit').click();
            $searchInput.prop('disabled', true);
        }
    });
});