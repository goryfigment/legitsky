require('./../css/general.css');
require('./../css/result.css');
require('./../css/header.css');
require('./../js/header.js');
require('./../library/tippy/tippy.css');
require('./../library/fontawesome/fontawesome.js');

var $ = require('jquery');
var helper = require('./../js/helpers.js');
require('./../library/tippy/tippy.js');

function getGoogleUrl() {
    $('#google-link').attr('href', 'https://www.google.com/search?tbm=shop&q=' + encodeURIComponent(globals.q).replace(/%20/g, "+"));
}

function getCraigslistUrl(url) {
    $('#craigslist-link').attr('href', url + 'search/sss?query=' +  encodeURIComponent(globals.q).replace(/%20/g, "+"));
}

function getEbayUrl() {
    $.ajax({
        url: globals.base_url + '/ebay/search',
        data: {'q': globals.q},
        dataType: 'json',
        type: "GET",
        success: function (response) {
            console.log(JSON.stringify(response));

            $('#ebay-link').attr('href', response['url']);
        }
    });
}

function getFacebookUrl() {
    //https://www.facebook.com/marketplace/search?query=goku%20shirt
    $('#facebook-link').attr('href', 'https://www.facebook.com/marketplace/search?query=' + encodeURIComponent(globals.q));
}

//Affiliate
function getRakutenUrl() {
    //https://www.rakuten.com/search/goku%20shirt/
    $('#rakuten-link').attr('href', 'https://www.rakuten.com/search/' +  encodeURIComponent(globals.q));

}

//Affiliate
function getEtsyUrl() {
    //https://www.etsy.com/search?q=test
    $('#etsy-link').attr('href', 'https://www.etsy.com/search?q=' +  encodeURIComponent(globals.q));
}

//Affiliate
function getAmazonUrl() {
    //https://www.amazon.com/s?url=search-alias%3Daps&field-keywords=goku+shirt
    $('#amazon-link').attr('href', 'https://www.amazon.com/s?url=search-alias%3Daps&field-keywords=' +  encodeURIComponent(globals.q).replace(/%20/g, "+"));
}

//Affiliate
function getWalmartUrl() {
    //https://www.walmart.com/search/?query=goku%20shirt
    $('#walmart-link').attr('href', 'https://www.walmart.com/search/?query=' + encodeURIComponent(globals.q))
}

function init() {
    var craigslistData = localStorage.getItem("craigslist");

    if (localStorage.getItem("craigslist") !== null) {
        craigslistData = JSON.parse(craigslistData);

        $('#craigslist-value').text(craigslistData['name']);
        getCraigslistUrl(craigslistData['url']);
    }

    getEbayUrl();
    getFacebookUrl();
    getGoogleUrl();
    getEtsyUrl();
    getRakutenUrl();
    getWalmartUrl();
    getAmazonUrl();
}

$(document).ready(function() {
    init();

    $(document).on('click', 'body', function () {
        var $selectionWrapper = $('#selection-wrapper');
        if($selectionWrapper.hasClass('active')){
            $selectionWrapper.removeClass('active');
        }
    });

    $(document).on('click', '#selection-wrapper', function (e) {
        e.stopPropagation();
    });

    $(document).on('click', '#craigslist-input', function (e) {
        e.stopPropagation();

        var $selectionWrapper = $('#selection-wrapper');
        if($selectionWrapper.hasClass('active')){
            $selectionWrapper.removeClass('active');
        } else {
            $selectionWrapper.addClass('active');
            $selectionWrapper.find('#selection-input').focus();

        }
    });

    $(document).on('keyup', '#selection-input', function (e) {
        var $selectionInput = $(this);
        var $selectionPopup = $selectionInput.closest('#selection-wrapper');
        var $selectionContainer = $selectionInput.siblings('#selection-container');
        var $items = $selectionPopup.find('li');
        var $activeItem = $selectionPopup.find('li.selected');
        var keycode = e.keyCode;

        if($selectionPopup.is(':visible') && (keycode == 38 || keycode == 40)) {
            helper.upAndDownPopups(keycode, $selectionContainer, $items, true);
            return;
        } else if(keycode == 13 && $activeItem.length) {
            $activeItem.click();
            return;
        }

        var searchValue = $selectionInput.val().toLowerCase().trim();
        var $labels = $selectionPopup.find('label');
        var $combinedArray = $.merge($labels, $items);

        for (var i = 0; i < $combinedArray.length; i++) {
            var $currentItem = $($combinedArray[i]);
            var currentValue = $currentItem.text().toLowerCase();

            if(currentValue.indexOf(searchValue) != -1 || searchValue == '') {
                $currentItem.show();
            } else {
                $currentItem.hide();
            }
        }
    });

    $(document).on('click', '.outer-wrapper li', function () {
        var $item = $(this);
        var $popup = $item.closest('#selection-wrapper');
        var name = $item.text();
        var url = $item.attr('data-value');

        $('#craigslist-value').text(name);
        $('#craigslist-input').css('border', 'solid 1px #d6d6d6');
        $popup.removeClass('active');

        localStorage.setItem('craigslist', JSON.stringify({name: name, url: url}));
    });

    $(document).on({
        mouseenter: function () {
            var $item = $(this);
            var $activeItem = $item.siblings('.selected');
            $activeItem.removeClass('selected');
            $item.addClass('selected');
        },
        mouseleave: function () {
           $(this).removeClass("selected");
        }
    }, '.outer-wrapper li');

    $(document).on('click', '#craigslist-link', function (e) {
        var craigslistData = localStorage.getItem("craigslist");

        if (localStorage.getItem("craigslist") !== null) {
            craigslistData = JSON.parse(craigslistData);
            $('#craigslist-link').attr('href', craigslistData['url'] + 'search/sss?query=' +  encodeURIComponent(globals.q).replace(/%20/g, "+"));
        } else {
            e.stopPropagation();
            $('#craigslist-input').css('border', 'solid 2px #ff0000')
        }
    });
});

