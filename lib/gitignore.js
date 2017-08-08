const fs = require('fs'),
  Editorconfig = require('./editorconfig.js');

var Gitignore = {

  create: () => {
    var content = `# https://git-scm.com/docs/gitignore
# https://help.github.com/articles/ignoring-files
# Example .gitignore files: https://github.com/github/gitignore
.DS_Store
desktop.ini

/vendor/
/composer.phar

/wp*
!/wp-cli*
/index.php
/xmlrpc.php
/license.txt
/readme.html
`;
    fs.writeFileSync('.gitignore', content);
    Editorconfig.create();
  }
};

module.exports = Gitignore;
