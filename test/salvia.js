/*jslint node: true, nomen: true */
/*global describe, it */
'use strict';
var assert  = require("assert"),
  salvia = require("../salvia.js"),
  i18n = require('./../lib/i18n.js');

function ucfirst(string) {
  return string[0].toUpperCase() + string.slice(1);
}

String.prototype.ucfirst = function () {
  return this[0].toUpperCase() + this.slice(1);
};

describe(i18n.__('test').ucfirst(), function () {
  it(i18n.__('Output must be equals %s', i18n.__('test')), function () {
    assert.equal(i18n.__('test'), salvia());
  });
});
