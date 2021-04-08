let languageConfig = Object.assign({}, require("./ada.win32.nexss.config"));
const sudo = process.sudo;

languageConfig.compilers = {
  gnat: {
    install: `${sudo} apt -y install gcc-gnat`,
    command: "gnatmake",
    args: "-q <file>;./<fileNoExt>", // -n don't display up to date
    help: ``,
  },
};

const distName = process.distro;
languageConfig.dist = distName;

// TODO: Later to cleanup this config file !!
switch (distName) {
  case process.distros.ORACLE:
    languageConfig.compilers.gnat.install = `${sudo}yum install -y gcc-gnat`;
    break;
  case process.distros.ARCH:
    languageConfig.compilers.gnat.install = `${sudo}pacman -Sy --noconfirm gcc-ada`;
    break;
  case process.distros.UBUNTU:
    languageConfig.compilers.gnat.install = `${sudo}apt-get install -y gnat`;
    break;
  default:
    languageConfig.compilers.gnat.install = process.replacePMByDistro(
      languageConfig.compilers.gnat.install
    );
    break;
}

module.exports = languageConfig;
