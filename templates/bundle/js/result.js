webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(6);
__webpack_require__(7);
__webpack_require__(2);

var $ = __webpack_require__(0);
var helper = __webpack_require__(8);
__webpack_require__(9);

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

    $(document).on('click', '.search-icon', function () {
        $('#submit').click();
    });
});



/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function numberCommaFormat(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"), 'g'), replace);
}

function scrollToElement($container, $element, speed){
    var elementTop = $element.offset().top;
    var elementHeight = $element.height();
    var containerTop = $container.offset().top;
    var containerHeight = $container.height();

    if ((((elementTop - containerTop) + elementHeight) > 0) && ((elementTop - containerTop) < containerHeight)) {

    } else {
        $container.animate({
            scrollTop: $element.offset().top - $container.offset().top + $container.scrollTop()
        }, speed);
    }
}

function upAndDownPopups(keyCode, $popup, $options, scroll) {
    var $selected = $popup.find('.selected');
    var $firstOption = $options.filter(':visible').eq(0);
    var $lastOption = $options.filter(':visible').eq(-1);

    if (keyCode == 40) { //down arrow
        var $nextOption = $options.slice($options.index($selected) + 1).filter(':visible').first();

        if($selected.length) {
            $selected.removeClass('selected');
            if($nextOption.length){
                $nextOption.addClass('selected');
                if(scroll) {
                    scrollToElement($popup, $nextOption, 50);
                }
            } else{
                $firstOption.addClass('selected');
                if(scroll) {
                    scrollToElement($popup, $firstOption, 50);
                }
            }
        } else {
            $firstOption.addClass('selected');
            if(scroll) {
                scrollToElement($popup, $firstOption, 50);
            }
        }
    } else if (keyCode == 38) { //up arrow
        var $prevOption = $options.slice(0, $options.index($selected)).filter(':visible').last();

        if($selected.length) {
            $selected.removeClass('selected');
            if($prevOption.length){
                $prevOption.addClass('selected');
                if(scroll) {
                    scrollToElement($popup, $prevOption, 50);
                }
            }else{
                $lastOption.addClass('selected');
                if(scroll) {
                    scrollToElement($popup, $lastOption, 50);
                }
            }
        } else {
            $lastOption.addClass('selected');
            if(scroll) {
                scrollToElement($popup, $lastOption, 50);
            }
        }
    } else if(keyCode == 13) { //enter button
        $selected.trigger('click');
    }
}

function currencyFormat(cents) {
    cents = Math.round(cents);

    if (cents == 0) {
        return cents.toFixed(2);
    } else if(cents < 100){
        if (cents > 0 || cents > -100) {
            return (cents/100).toFixed(2);
        } else {
            cents = cents.toString();
            return cents.substring(0,cents.length-2)+"."+cents.substring(cents.length-2)
        }
    }else {
        cents = cents.toString();
        return cents.substring(0,cents.length-2)+"."+cents.substring(cents.length-2)
    }
}

function currencyMath(leftVal, operator, curRightVal, round, both) {
    leftVal = parseFloat(leftVal);
    curRightVal = parseFloat(curRightVal) * 100;

    if (both == 'true') {
        leftVal = leftVal * 100;
    }

    var cents = {
        "+": curRightVal + leftVal,
        "-": curRightVal - leftVal,
        "*": curRightVal * leftVal,
        "/": curRightVal / leftVal,
        "%": curRightVal % leftVal
    }[operator];

    if (round == 'true') {
        cents = Math.round(cents);
    }

    if (cents == 0) {
        return cents.toFixed(2);
    } else {
        cents = cents.toString();
        return cents.substring(0,cents.length-2)+"."+cents.substring(cents.length-2)
    }
}

module.exports = {
    numberCommaFormat: numberCommaFormat,
    replaceAll: replaceAll,
    scrollToElement: scrollToElement,
    upAndDownPopups: upAndDownPopups,
    currencyFormat: currencyFormat,
    currencyMath: currencyMath
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);

$(document).ready(function() {
    $(document).on({
        mouseenter: function () {
            var $element = $(this);
            var $tipPopup = $('#tip-popup');
            var $tipPopupArrow = $tipPopup.find('#tip-arrow');

            //Change the description of the tippy popup
            $tipPopup.find('#tip-content').html($element.attr('data-title'));

            var elementPosition = $element.offset();
            var tipPopupHalvedWidth = $tipPopup.outerWidth()/2;

            var tipPopupLeftPos = ($element.outerWidth()/2 + elementPosition['left']) - tipPopupHalvedWidth;

            $tipPopupArrow.css({left: tipPopupHalvedWidth - $tipPopupArrow.outerWidth(true)/2});

            //move first before animating
            $tipPopup.finish().css({top: elementPosition['top'], left: tipPopupLeftPos, 'transition-duration': '0ms'});

            //then animate sliding up
            $tipPopup.css({
                display: 'block',
                'transition-duration': '350ms',
                transform: 'translate3d(0,' + -($tipPopup.outerHeight() + 13) + 'px, 0)',
                opacity: 1
            });
        },
        mouseleave: function () {
            var $tipPopup = $('#tip-popup');
            var tipPopupCssTop = parseInt($tipPopup.css('top')) - ($tipPopup.outerHeight() + 13);
            $tipPopup.css({transform: '', 'transition-duration': '', top: tipPopupCssTop});
            $tipPopup.animate({
                opacity: 0,
                top: tipPopupCssTop + 13 + 'px'
            }, 350, function() {
                $tipPopup.css({opacity: 0, top: '', left: '', display: 'none'});
            });
        }
    }, '.tippy');
});

/***/ })
],[5]);