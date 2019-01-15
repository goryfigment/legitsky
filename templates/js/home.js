require('./../css/general.css');
require('./../css/home.css');
require('./../css/header.css');
require('./../js/header.js');
require('./../library/fontawesome/fontawesome.js');
require('./../library/slick/slick/slick.css');
require('./../library/slick/slick/slick-theme.css');
require('./../library/slick/slick/slick.min.js');

var bannerTemplate = require('./../handlebars/home/banner.hbs');

var $ = require('jquery');

function init() {
    var $bannerContainer = $('#banner-container');
    $bannerContainer.append(bannerTemplate({'banners': globals.banners}));
    $('#banner-wrapper').slick({
        dots: true,
        infinite: true,
        speed: 1500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : false
    });
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
});