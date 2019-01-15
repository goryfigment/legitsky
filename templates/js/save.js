require('./../css/general.css');
require('./../css/save.css');
require('./../css/header.css');
require('./../js/header.js');
require('./../library/fontawesome/fontawesome.js');

var $ = require('jquery');
var items = require('./../handlebars/banner/items.hbs');
var category = require('./../handlebars/banner/category.hbs');

var saveTemplate = require('./../handlebars/save/save_table.hbs');
var itemPopup = require('./../handlebars/banner/item_popup.hbs');

function init() {
    var savedData = {};

    if (localStorage.getItem('saved') !== null) {
        savedData = JSON.parse(localStorage.getItem('saved'));
    }

    var savedItemList = [];

    for (var key in savedData) {
        if (savedData.hasOwnProperty(key)) {
            var savedItems = savedData[key];
            var items = globals.banner[key]['items'];
            for (var i = 0; i < items.length; i++) {
                var currentItem = items[i];
                var currentId = currentItem['id'];
                currentItem['offer'] = currentItem['offers'].length;

                if(savedItems.indexOf(currentId) != -1) {
                    currentItem['lowest_price'] = Math.min.apply(Math,currentItem['offers'].map(function(o){return o['price'];}));
                    currentItem['banner_name'] = key;
                    currentItem['index'] = i;
                    savedItemList.push(currentItem);
                }
            }
        }
    }

    $('#save-wrapper').append(saveTemplate(savedItemList))
}

$(document).ready(function() {
    init();

    $(document).on('click', '.remove-button', function (e) {
        e.stopPropagation();

        var $this = $(this);
        var $item = $this.closest('tr');
        var bannerName = $item.attr('data-banner_name');
        var id = parseInt($item.attr('data-id'));

        var savedData = JSON.parse(localStorage.getItem('saved'));
        var savedList = savedData[bannerName];

        var index = savedList.indexOf(id);

        if(index != -1){
           savedList.splice(index, 1);
            $item.remove();
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
        var $item = $(this).closest('.item');
        var $overlay = $('#overlay');
        $overlay.addClass('active');
        var bannerName = $item.attr('data-banner_name');

        var savedData = JSON.parse(localStorage.getItem('saved'));
        var savedList = savedData[bannerName];
        var item = globals.banner[bannerName]['items'][parseInt($item.attr('data-index'))];

        var id = parseInt($item.attr('data-id'));
        var index = savedList.indexOf(id);

        item['saved'] = index != -1 ? false : true;
        item['banner_name'] = bannerName;

        $overlay.append(itemPopup(item));
    });
    //OPERATION POPUP//
});