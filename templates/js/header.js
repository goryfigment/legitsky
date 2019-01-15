var $ = require('jquery');
var bannerTemplate = require('./../handlebars/home/category_popup.hbs');

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

    $("#category-button").hover(function () {
        $("#category-popup").stop(true,true).show(0);
    }, function () {
        $("#category-popup").stop(true,true).delay(100).hide(0);
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

    $(document).on('click', '#category-popup .banner-item', function (e) {
        e.stopPropagation();
        $(this).closest('a').click();
    });
});