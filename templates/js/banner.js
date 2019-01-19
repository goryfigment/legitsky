require('./../css/general.css');
require('./../css/header.css');
require('./../css/banner.css');
require('./../js/header.js');
require('./../library/fontawesome/fontawesome.js');
require('./../library/slick/slick/slick.css');
require('./../library/slick/slick/slick-theme.css');
require('./../library/slick/slick/slick.min.js');

var $ = require('jquery');
var items = require('./../handlebars/banner/items.hbs');
var category = require('./../handlebars/banner/category.hbs');
var itemPopup = require('./../handlebars/banner/item_popup.hbs');
var featuredBanner = require('./../handlebars/banner/featured_banner.hbs');

function init() {
    var $bannerWrapper = $('#banner-wrapper');

    for (var b = 0; b < globals.banners.length; b++) {
        var currentBanner = globals.banners[b];
        if (currentBanner['url'] == globals.banner_name) {
            $bannerWrapper.append(featuredBanner(currentBanner));
            break;
        }
    }

    var $inventoryContainer = $('#inventory-container');
    var itemData = globals.banner;

    var savedData = localStorage.getItem('saved');

    if (savedData !== null) {
        savedData = JSON.parse(localStorage.getItem('saved'));
    }

    itemData['saved'] = savedData !== null && savedData.hasOwnProperty(globals.banner_name) ? savedData[globals.banner_name] : [];
    var bannerItems = itemData['items'];

    for (var i = 0; i < bannerItems.length; i++) {
        var currentItem = bannerItems[i];
        currentItem['lowest_price'] = Math.min.apply(Math,currentItem['offers'].map(function(o){return o['price'];}));
        currentItem['lowest_price'] = parseFloat(currentItem['lowest_price']).toFixed(2);
    }

    $inventoryContainer.append(items(itemData));
    var $categoryContainer = $('#category-container');
    $categoryContainer.append(category(globals.banner));

    $bannerWrapper.slick({
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

    $(document).on('click', '#all-button', function () {
        var $items = $('.item');
        for (var i = 0; i < $items.length; i++) {
            $($items[i]).show();
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

    $(document).on('click', '.save-button', function (e) {
        e.stopPropagation();
        var $this = $(this);
        $this.closest('.item').addClass('saved');
        var id = parseInt($this.closest('.item').attr('data-id'));
        var $numberSaved = $('#number-saved');
        var numberSaved = $numberSaved.text();

        var savedData = {};

        if (localStorage.getItem('saved') !== null) {
            savedData = JSON.parse(localStorage.getItem('saved'));
        }

        if(!savedData.hasOwnProperty(globals.banner_name)) {
            savedData[String(globals.banner_name)] = [];
        }

        savedData[globals.banner_name].push(id);
        $numberSaved.text(numberSaved !== '' ? parseInt(numberSaved)+1 : 1);

        localStorage.setItem('saved', JSON.stringify(savedData));
    });

    $(document).on('click', '.remove-button', function (e) {
        e.stopPropagation();
        var $this = $(this);

        var savedData = JSON.parse(localStorage.getItem('saved'));
        var savedList = savedData[globals.banner_name];
        var $numberSaved = $('#number-saved');
        var numberSaved = $numberSaved.text();

        var id = parseInt($this.closest('.item').attr('data-id'));
        var index = savedList.indexOf(id);

        if(index != -1){
            $(this).closest('.item').removeClass('saved');
            savedList.splice(index, 1);
            $numberSaved.text(numberSaved != 1 ? parseInt(numberSaved)-1 : '');
        }

        localStorage.setItem('saved', JSON.stringify(savedData));
    });

    //OPERATION POPUP//
    $(document).on('click', '#item-wrapper-popup', function (e) {
        e.stopPropagation();
    });

    $(document).on('click', 'body', function () {
        var $overlay = $('#overlay');
        $overlay.removeClass('active');
        $overlay.empty();
    });

    $(document).on('click', '#favorite-button', function (e) {
        e.stopPropagation();
        var $this = $(this);
        var id = parseInt($this.attr('data-id'));
        var $numberSaved = $('#number-saved');
        var numberSaved = $numberSaved.text();

        var savedData = {};

        if (localStorage.getItem('saved') !== null) {
            savedData = JSON.parse(localStorage.getItem('saved'));
        }

        if(!savedData.hasOwnProperty(globals.banner_name)) {
            savedData[globals.banner_name] = [];
        }

        savedData[globals.banner_name].push(id);
        $('.item[data-id=' + String(id) + ']').addClass('saved');
        $this.attr("id","unfavorite-button");
        $this.text('Undo Favorite');
        $numberSaved.text(numberSaved !== '' ? parseInt(numberSaved)+1 : 1);

        localStorage.setItem('saved', JSON.stringify(savedData));
    });

    $(document).on('click', '#unfavorite-button', function (e) {
        e.stopPropagation();
        var $this = $(this);
        var id = parseInt($this.attr('data-id'));
        var savedData = JSON.parse(localStorage.getItem('saved'));
        var savedList = savedData[globals.banner_name];
        var index = savedList.indexOf(id);
        var $numberSaved = $('#number-saved');
        var numberSaved = $numberSaved.text();

        if(index != -1) {
            $('.item[data-id=' + String(id) + ']').removeClass('saved');
            $this.attr("id","favorite-button");
            $this.text('Favorite');
            savedList.splice(index, 1);
            $numberSaved.text(numberSaved != 1 ? parseInt(numberSaved)-1 : '');
        }

        localStorage.setItem('saved', JSON.stringify(savedData));
    });

    $(document).on('click', '.item', function (e) {
        e.stopPropagation();
        var $this = $(this);
        var $overlay = $('#overlay');
        $overlay.addClass('active');

        var savedData = localStorage.getItem('saved');
        var savedList = [];

        if (savedData !== null) {
            savedData = JSON.parse(savedData);
        }

        if(savedData.hasOwnProperty(globals.banner_name)) {
            savedList = savedData[globals.banner_name];
        }

        console.log(savedList)

        var item = globals.banner['items'][parseInt($this.attr('data-index'))];
        var id = parseInt($this.attr('data-id'));
        var index = savedList.indexOf(id);

        item['saved'] = index != -1 ? false : true;
        item['banner_name'] = globals.banner_name;

        $overlay.append(itemPopup(item));
    });
    //OPERATION POPUP//
});