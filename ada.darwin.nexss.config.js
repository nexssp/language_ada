let languageConfig = Object.assign({}, require("./ada.win32.nexss.config"));

languageConfig.compilers = {
  gnatUbuntu: {
    install: "brew install gnat" /** ??working? */,
    command: "gnatmake",
    args: "-q <file>;./<fileNoExt>", // -n don't display up to date
    help: ``,
  },
};
languageConfig.errors = require("./nexss.ada.errors");
languageConfig.languagePackageManagers = {
  alire: {
    installation: ``,
    messageAfterInstallation: "Alire has been installed.", //this message will be displayed after this package manager installation, maybe some action needed etc.
    installed: "alr install",
    search: "alr search",
    show: "alr show",
    install: "alr require",
    uninstall: "alr remove",
    help: "alr",
    version: "alr version",
    init: () => {},
  },
};

module.exports = languageConfig;
