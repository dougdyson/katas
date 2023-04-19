const add = require('./add');
const assert = require('assert');

describe("Add two numbers", function(){
  it("should pass basic tests", function() {
    assert.strictEqual(add("1", "1"), "2");
    assert.strictEqual(add("123", "456"), "579");
    assert.strictEqual(add("888", "222"), "1110");
    assert.strictEqual(add("1372", "69"), "1441");
    assert.strictEqual(add("12", "456"), "468");
    assert.strictEqual(add("101", "100"), "201");
    assert.strictEqual(add('63829983432984289347293874', '90938498237058927340892374089'), "91002328220491911630239667963")
  });
});