var $ = require('jquery');

var bannerTemplate = require('./../handlebars/home/banner.hbs');

function init() {
    var $categoryPopup = $('#category-popup');
    $categoryPopup.append(bannerTemplate({'banners': globals.banners}));

    var savedData = localStorage.getItem('saved');

    if (savedData !== null) {
        savedData = JSON.parse(localStorage.getItem('saved'));
        var saveCount = 0;

        for (var key in savedData) {
            saveCount += savedData[key].length;
        }
        if (saveCount > 0) {
            $('#number-saved').text(saveCount);
        } else {
            $('#number-saved').text('');
        }

    }
}

$(document).ready(function() {
    init();

    $("#category-button").hover(function() {
        $('#category-popup').addClass('active');
    }, function() {
        var $categoryPopup = $('#category-popup');
        if(!$categoryPopup.is(":hover")) {
            $categoryPopup.removeClass('active');
        }
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