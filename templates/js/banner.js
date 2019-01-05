require('./../css/general.css');
require('./../css/banner.css');
require('./../library/fontawesome/fontawesome.js');

var $ = require('jquery');
var items = require('./../handlebars/banner/items.hbs');
var category = require('./../handlebars/banner/category.hbs');

function init() {
    var $inventoryContainer = $('#inventory-container');
    $inventoryContainer.append(items(globals.banner));

    var $categoryContainer = $('#category-container');
    $categoryContainer.append(category(globals.banner));
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

    $(document).on('click', '#side-bar-toggle', function () {
        var $sideBar = $('#side-nav-wrapper');
        var $header = $('#header-wrapper');
        var $mainWrapper = $('#main-wrapper');

        if($sideBar.hasClass('active')) {
            $sideBar.removeClass('active');
            $header.removeClass('active');
            $mainWrapper.removeClass('active');
        } else {
            $sideBar.addClass('active');
            $header.addClass('active');
            $mainWrapper.addClass('active');
        }
    });

    $(document).on('click', '.category', function () {
        var category = $(this).text();
        var $items = $('#inventory-container').find('.item');
        for (var i = 0; i < $items.length; i++) {
            var $currentItem = $($items[i]);
            var currentCategory = $currentItem.attr('data-category');
            if(currentCategory == category) {
                $currentItem.show();
            } else {
                $currentItem.hide();
            }
        }
    });

    $(document).on('keyup', '#banner-search-input', function () {
        var value = $(this).val().replace(' ', '').replace('-', '').toLowerCase();
        var $items = $('#inventory-container').find('.item');

        for (var i = 0; i < $items.length; i++) {
            var $currentItem = $($items[i]);
            var currentName = $currentItem.find('.item-name').text().replace(' ', '').replace('-', '').toLowerCase();

            if(currentName.indexOf(value) !== -1) {
                $currentItem.show();
            } else {
                $currentItem.hide();
            }
        }
    });
});