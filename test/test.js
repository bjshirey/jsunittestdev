/**
 * Created by brian on 11/11/14.
 */

    /* non functional */
/*
var test = require('unit.js');
var example = 'hello';
test.string(example);
test.must(example).be.a.string();
test.assert(typeof example === 'string');
*/

var assert = require('assert');

describe('array', function(){
    describe('indexOf()', function(){
        it('should return -1 when value not present', function(){
            assert.equal(-1, [1,2,3].indexOf(5));
        });
    });
});





