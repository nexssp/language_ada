let languageConfig = Object.assign({}, require("./ada.win32.nexss.config"));
const os = require(`@nexssp/os`);
const sudo = os.sudo();

languageConfig.compilers = {
  gnat: {
    install: `${sudo} apt install gnat`,
    command: "gnatmake",
    args: "-q <file>;./<fileNoExt>", // -n don't display up to date
    help: ``,
  },
};

const distName = os.name();
languageConfig.dist = distName;

// TODO: Later to cleanup this config file !!
switch (distName) {
  case os.distros.ORACLE:
    languageConfig.compilers.gnat.install = `${sudo}yum install -y gcc-gnat`;
    break;
  case os.distros.ARCH:
    languageConfig.compilers.gnat.install = `${sudo}pacman -Sy --noconfirm gcc-ada`;
    break;
  default:
    languageConfig.compilers.gnat.install = replaceCommandByDist(
      languageConfig.compilers.gnat.install
    );
    break;
}

module.exports = languageConfig;
