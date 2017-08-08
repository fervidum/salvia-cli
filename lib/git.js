const spawnSync = require('child_process').spawnSync;

var Git = {

  exists: () => {
    return (spawnSync('git').error === undefined);
  },

  init: () => {
    if (Git.exists()) {
      spawnSync('git', ['init']);
      spawnSync('git', ['add', '.']);
      spawnSync('git', ['reset', 'HEAD', '--', 'composer-setup.php']);
      spawnSync('git', ['commit', '-m', `initial commit from Salvia CLI

 ____        _       _          ____ _     ___
/ ___|  __ _| |_   _(_) __ _   / ___| |   |_ _|
\\___ \\ / _\` | \\ \\ / / |/ _\` | | |   | |    | |
 ___) | (_| | |\\ V /| | (_| | | |___| |___ | |
|____/ \\__,_|_| \\_/ |_|\\__,_|  \\____|_____|___|`]);
    }
  }
};

module.exports = Git;
