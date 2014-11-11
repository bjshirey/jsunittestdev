/**
 * Created by brian on 11/11/14.
 */

var libToTest = (function(){
    return {
        'square' : function(arg) {
            if (typeof arg === "number") {
                return arg * arg;
            } else {
                return null;
            }
        },
        'noop' : function() {

        },
    };
});