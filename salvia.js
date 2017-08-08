//const PHP = require('./lib/php.js');
const New = require('./lib/new.js');
//const Composer = require('./lib/composer.js');
//const fs = require('fs');
//const path = require('path');
//const spawnSync = require('child_process').spawnSync;
//const process = require('process');
//const Wpcli = require('./lib/wpcli.js');
//const Git = require('./lib/git.js');

function Salvia() {
//  if (PHP.hasCommand()) {
//    console.log('has php');
//  } else {
//    console.log('not php');
//  }

  //  if (PHP.requirement('5.3.4')) {
//    console.log('permited version');
//  } else {
//    console.log('not permited version');
//  }

//  console.log(PHP.hasCommand());

//  console.log(PHP.version());
//  var slug = 'project';
//  fs.mkdir(slug);
//  Composer.get(slug);

  New();
//  if (Git.exists()) {
//    Git.init();
//  }

//
//  , wpcliCoreDownload());
////  wpcliCoreDownload();
//
//}
//
//function wpcliCoreDownload() {
//  var isWin = /^win/.test(process.platform);
//  var wpclibin = './vendor/bin/wp';
//
//  if (isWin) {
//    wpclibin += '.bat';
//  }
//
////  spawnSync(wpclibin, ['core', 'download', '--path=wp']);
//  spawnSync(wpclibin, ['server']);
}

module.exports = Salvia;
