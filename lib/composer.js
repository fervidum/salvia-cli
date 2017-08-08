//const fs = require('fs'),
//  path = require('path'),
//  i18n = require('./lib/i18n.js'),
//  prompt = require('prompt'),
//  colors = require("colors/safe"),
//  request = require('request'),
//  hashFiles = require('hash-files');
const https = require('https'),
  fs = require('fs'),
  path = require('path'),
  hashFile = require('hash-files'),
  spawnSync = require('child_process').spawnSync,
  process = require('process'),
  Gitignore = require('./gitignore.js');

var Composer = {

  get: (slug) => {
    process.chdir(slug);
    https.get('https://getcomposer.org/installer', (res) => {
      res.pipe(fs.createWriteStream('composer-setup.php'));
      res.on('end', () => {
        hashFile({algorithm: 'sha384', files: ['composer-setup.php']}, function(error, hash) {
          Composer.verify(hash);
        });
      });
    });
  },

  verify: (actualSignature) => {
    https.get('https://composer.github.io/installer.sig', (res) => {
      res.setEncoding('utf8');
      let expectedSignature = '';
      res.on('data', (chunk) => { expectedSignature += chunk.trim(); });
      res.on('end', () => {
        if (expectedSignature == actualSignature) {
          spawnSync('php', ['composer-setup.php', '--quiet']);
          spawnSync('php', ['composer.phar', 'require', 'wp-cli/wp-cli']);
          Gitignore.create();
        } else {
          console.log('Invalid installer signature');
        }
        fs.unlinkSync('composer-setup.php');
      });
    }).on('error', (e) => {
    });
  }
};

module.exports = Composer;
