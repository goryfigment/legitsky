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