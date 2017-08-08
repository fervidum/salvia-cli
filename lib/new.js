const fs = require('fs'),
  i18n = require('./i18n.js'),
  prompt = require('prompt'),
  colors = require('colors/safe'),
  removeAccents = require('remove-accents'),
  path = require('path'),
  Composer = require('./composer.js');

function New() {

  'use strict';

  prompt.message = '';
  prompt.delimiter = '';

  prompt.start();

  var schema = {
    properties: {
      name: {
        description: colors.green(i18n.__('Theme Name')),
//        pattern: /^[a-zA-Z\s\-]+$/,
//        message: i18n.__('Name must be only letters, spaces, or dashes'),
        default: 'Salvia'
      }
    }
  };

  prompt.get(schema, function (err, result) {
    var slug = removeAccents(result.name.toLowerCase()).replace(/\s/g, '');
    fs.mkdir(slug);
    Composer.get(slug);
  });

}

module.exports = New;
