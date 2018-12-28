require('./../css/general.css');
require('./../css/home.css');
require('./../library/fontawesome/fontawesome.js');

var bannerTemplate = require('./../handlebars/home/banner.hbs');

var $ = require('jquery');

function init() {
    var $bannerContainer = $('#banner-container');
    $bannerContainer.append(bannerTemplate({'banners': globals.banners}));

    console.log(globals.banners)
}

$(document).ready(function() {
    init();

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
});