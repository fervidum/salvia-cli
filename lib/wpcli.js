const fs = require('fs'),
  process = require('process'),
  spawnSync = require('child_process').spawnSync,
  Git = require('./git.js');

var Wpcli = {

  config: () => {
    var content = `debug:

core download:
  locale: pt_BR
`;

    fs.writeFileSync('wp-cli.yml', content);
    Wpcli.download();
  },

  download: () => {
    Git.init();
//    console.log('wp core download');
//    console.log(process.platform);
    var isWin = /^win/.test(process.platform);
//    console.log(isWin);
    var wpclibin = './vendor/bin/wp';
//    console.log(wpclibin);

    if (isWin) {
      wpclibin += '.bat';
    }

    spawnSync(wpclibin, ['core', 'download']);//, '--path=wp'
//    spawnSync(wpclibin, ['server']);
  }
};

module.exports = Wpcli;
