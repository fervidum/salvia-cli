/*jslint node: true, nomen: true */
'use strict';
var osLocale = require('os-locale'),
  i18n = require('i18n'),
  locale = osLocale.sync().substr(0, 2);

i18n.configure({
  directory: require("path").dirname(module.filename) + '/../locales'
});

if (i18n.getLocales().indexOf(locale) >= 0) {
  i18n.setLocale(locale);
}

//i18n.prototype.ucfirst = function () {
//  return this[0].toUpperCase() + this.slice(1);
//};

module.exports = i18n;
