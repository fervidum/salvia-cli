const commandExists = require('command-exists'),
//  execSync = require('child_process').execSync,
  spawnSync = require('child_process').spawnSync,
  versionCompare = require('compare-versions');

function phpversion() {
  var version = spawnSync('php', ['-r', 'echo phpversion();'], {encoding: 'utf-8'}).stdout;
  version = version.match(/^(\d+)?\.?(\d+)?\.?(\d+)/g);
  return version[0];
}

module.exports = {
  hasCommand: () => {
    return (spawnSync('php').error === undefined);
  },
  version: () => {
    return phpversion();
  },
  requirement: (minimum) => {
    //5.3.2+ Composer minumum
    //5.3.4+ Composer recomended
    return (versionCompare(phpversion(), minimum) >= 1);
  }
};
