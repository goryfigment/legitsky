webpackJsonp([1],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = function() {
    var outStr = '';
    for(var arg in arguments){
        if(typeof arguments[arg]!='object'){
            if(arguments[arg] == 'base_url') {
                arguments[arg] = globals.base_url;
            } else if(arguments[arg] == 'banner_name') {
                arguments[arg] = globals.banner_name;
            }
            outStr += arguments[arg];
        }
    }
    return outStr;
};

/***/ }),

/***/ 14:
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

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(1);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression;

  return "    <div class=\"item "
    + ((stack1 = __default(__webpack_require__(16)).call(alias1,(depth0 != null ? depth0.id : depth0),(depths[1] != null ? depths[1].saved : depths[1]),{"name":"contains","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-category=\""
    + alias3(alias2((depth0 != null ? depth0.category : depth0), depth0))
    + "\" data-id=\""
    + alias3(alias2((depth0 != null ? depth0.id : depth0), depth0))
    + "\" data-index=\""
    + alias3(alias2((data && data.index), depth0))
    + "\">\r\n        <div class=\"details-container\">\r\n            <div class=\"save-icon\"><i class=\"fas fa-star\"></i></div>\r\n            <img src=\""
    + alias3(__default(__webpack_require__(0)).call(alias1,"/templates/bundle/assets/banner/","banner_name","/",((stack1 = (depth0 != null ? depth0.picture : depth0)) != null ? stack1["0"] : stack1),{"name":"concat","hash":{},"data":data}))
    + "\"/>\r\n            <div class=\"item-details-wrapper\">\r\n                <h3 class=\"item-name\">"
    + alias3(alias2((depth0 != null ? depth0.name : depth0), depth0))
    + "</h3>\r\n                <div class=\"item-price\">"
    + alias3(alias2((depth0 != null ? depth0.lowest_price : depth0), depth0))
    + "</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"save-button-wrapper\">\r\n            <div class=\"save-button\"><i class=\"far fa-star\"></i></div>\r\n            <div class=\"remove-button\"><i class=\"fas fa-star\"></i></div>\r\n        </div>\r\n    </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "saved";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = function(elem, list, options) {
    if(list.indexOf(elem) > -1) {
        return options.fn(this);
    }
    return options.inverse(this);
};

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(1);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <div class=\"category\">"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"all-button\">All</div>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.category : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(1);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    return "active";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.escapeExpression;

  return "                    <img class=\"sub-image\" data-index=\""
    + alias1(container.lambda((data && data.index), depth0))
    + "\" src=\""
    + alias1(__default(__webpack_require__(0)).call(depth0 != null ? depth0 : (container.nullContext || {}),"/templates/bundle/assets/banner/",(depths[1] != null ? depths[1].banner_name : depths[1]),"/",depth0,{"name":"concat","hash":{},"data":data}))
    + "\"/>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "favorite";
},"7":function(container,depth0,helpers,partials,data) {
    return "unfavorite";
},"9":function(container,depth0,helpers,partials,data) {
    return "Favorite";
},"11":function(container,depth0,helpers,partials,data) {
    return "Undo Favorite";
},"13":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "            <tr>\r\n                <td>"
    + alias2(alias1((depth0 != null ? depth0.seller : depth0), depth0))
    + "</td>\r\n                <td>"
    + alias2(alias1((depth0 != null ? depth0.condition : depth0), depth0))
    + "</td>\r\n                <td>"
    + alias2(alias1((depth0 != null ? depth0.price : depth0), depth0))
    + "</td>\r\n                <td><a href=\""
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\" target=\"_blank\"><button class=\"link-button\">View Offer</button></a></td>\r\n            </tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div id=\"item-wrapper-popup\">\r\n    <div id=\"top-section-wrapper\">\r\n        <div>\r\n            <img id=\"image-preview\" data-index=\""
    + alias2(alias1((data && data.index), depth0))
    + "\" class=\""
    + ((stack1 = __default(__webpack_require__(9)).call(alias3,(data && data.index),"==",0,{"name":"ifCond","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-click=\""
    + alias2(__default(__webpack_require__(0)).call(alias3,"/templates/bundle/assets/banner/",(depth0 != null ? depth0.banner_name : depth0),"/",((stack1 = (depth0 != null ? depth0.picture : depth0)) != null ? stack1["0"] : stack1),{"name":"concat","hash":{},"data":data}))
    + "\" src=\""
    + alias2(__default(__webpack_require__(0)).call(alias3,"/templates/bundle/assets/banner/",(depth0 != null ? depth0.banner_name : depth0),"/",((stack1 = (depth0 != null ? depth0.picture : depth0)) != null ? stack1["0"] : stack1),{"name":"concat","hash":{},"data":data}))
    + "\"/>\r\n            <div id=\"image-slider\">\r\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.picture : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\r\n        </div>\r\n        <div class=\"item-details-wrapper\">\r\n            <h2>"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</h2>\r\n        </div>\r\n        <div class=\"right-section\">\r\n            <button class=\"favorite-button\" id=\""
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.saved : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.program(7, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "-button\" data-id=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" data-banner_name=\""
    + alias2(alias1((depth0 != null ? depth0.banner_name : depth0), depth0))
    + "\">"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.saved : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.program(11, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "</button>\r\n        </div>\r\n    </div>\r\n\r\n    <table cellpadding=\"10px\">\r\n        <thead>\r\n            <tr>\r\n                <th scope=\"col\">Seller</th>\r\n                <th scope=\"col\">Condition</th>\r\n                <th scope=\"col\">Price</th>\r\n                <th scope=\"col\">Offer</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.offers : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </tbody>\r\n    </table>\r\n</div>";
},"useData":true,"useDepths":true});

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);
__webpack_require__(47);
__webpack_require__(5);
__webpack_require__(6);
__webpack_require__(8);

var $ = __webpack_require__(2);
var items = __webpack_require__(15);
var category = __webpack_require__(17);

var saveTemplate = __webpack_require__(48);
var itemPopup = __webpack_require__(18);

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
                    currentItem['lowest_price'] = parseFloat(currentItem['lowest_price']).toFixed(2);
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
        var bannerName = $this.attr('data-banner_name');

        var savedData = {};

        if (localStorage.getItem('saved') !== null) {
            savedData = JSON.parse(localStorage.getItem('saved'));
        }

        if(!savedData.hasOwnProperty(bannerName)) {
            savedData[bannerName] = [];
        }

        savedData[bannerName].push(id);
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
        var bannerName = $this.attr('data-banner_name');
        var savedData = JSON.parse(localStorage.getItem('saved'));
        var savedList = savedData[bannerName];
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

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(1);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <tr class=\"item\" data-banner_name=\""
    + alias2(alias1((depth0 != null ? depth0.banner_name : depth0), depth0))
    + "\" data-id=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" data-index=\""
    + alias2(alias1((depth0 != null ? depth0.index : depth0), depth0))
    + "\">\r\n            <td class=\"image-column\" width=\"110px\"><img src=\""
    + alias2(__default(__webpack_require__(0)).call(alias3,"/templates/bundle/assets/banner/",(depth0 != null ? depth0.banner_name : depth0),"/",((stack1 = (depth0 != null ? depth0.picture : depth0)) != null ? stack1["0"] : stack1),{"name":"concat","hash":{},"data":data}))
    + "\"/></td>\r\n            <td>"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</td>\r\n            <td>"
    + alias2(__default(__webpack_require__(49)).call(alias3,(depth0 != null ? depth0.lowest_price : depth0),{"name":"numCommaFormat","hash":{},"data":data}))
    + "</td>\r\n            <td><button class=\"offer-button\">"
    + alias2(alias1((depth0 != null ? depth0.offer : depth0), depth0))
    + " Offer"
    + ((stack1 = __default(__webpack_require__(9)).call(alias3,(depth0 != null ? depth0.offer : depth0),">",1,{"name":"ifCond","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</button></td>\r\n        </tr>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "s";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<table>\r\n    <thead>\r\n        <tr>\r\n            <th scope=\"col\"></th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Lowest Price</th>\r\n            <th scope=\"col\">Offers</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

var helper = __webpack_require__(14);
module.exports = function(x) {
    return helper.numberCommaFormat(x);
};

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = function(v1, operator, v2, options) {
    switch (operator) {
        case '==':
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '===':
            return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '<':
            return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
            return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '&&':
            return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case '||':
            return (v1 || v2) ? options.fn(this) : options.inverse(this);
        case '!=':
            return (v1 != v2) ? options.fn(this) : options.inverse(this);
        default:
            return options.inverse(this);
    }
};

/***/ })

},[46]);