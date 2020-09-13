let languageConfig = Object.assign({}, require("./ada.win32.nexss.config"));

let sudo = "sudo ";
if (process.getuid && process.getuid() === 0) {
  sudo = "";
}

languageConfig.compilers = {
  gnat: {
    install: `${sudo} apt install gnat`,
    command: "gnatmake",
    args: "-q <file>;./<fileNoExt>", // -n don't display up to date
    help: ``,
  },
};

const {
  replaceCommandByDist,
  dist,
} = require(`${process.env.NEXSS_SRC_PATH}/lib/osys`);

const distName = dist();
languageConfig.dist = distName;

// TODO: Later to cleanup this config file !!
switch (distName) {
  case "Arch Linux":
    languageConfig.compilers.gnat.install = `${sudo}pacman -Sy --noconfirm gcc-ada`;
    break;
  default:
    languageConfig.compilers.gnat.install = replaceCommandByDist(
      languageConfig.compilers.gnat.install
    );
    break;
}

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
