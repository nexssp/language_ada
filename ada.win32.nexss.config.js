let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "Ada";
languageConfig.description =
  "Ada is a state-of-the art programming language that development teams worldwide are using for critical software.";
languageConfig.url = "https://www.adacore.com/";
languageConfig.extensions = [".adb"];
languageConfig.founders = ["Jean Ichbiah", "Tucker Taft"];
languageConfig.developers = ["GNAT, Green Hills Software"];
languageConfig.years = ["1980"];
languageConfig.executeCommandLine = "ada";
languageConfig.printCommandLine = "";
languageConfig.checkSyntax = "";
languageConfig.interactiveShell = "ada";
languageConfig.builders = {};
languageConfig.compilers = {
  adaWSL: {
    install: `Powershell -C "Set-Location -Path ${__dirname} ; wsl -u root install/InstallAdaWSL.ps1"`,
    command: "wsl gnatmake",
    args: "-q <file>;./<fileNoExt>", // -n don't display up to date
    help: ``,
  },
};
languageConfig.errors = require("./nexss.ada.errors");
languageConfig.languagePackageManagers = {
  alire: {
    installation: `Powershell -C "Set-Location -Path ${__dirname} ; wsl -u root install/InstallAlireWSL.ps1"`,
    messageAfterInstallation: "Alire has been installed.", //this message will be displayed after this package manager installation, maybe some action needed etc.
    installed: "wsl alr install",
    search: "wsl alr search",
    show: "wsl alr show",
    install: "wsl alr require",
    uninstall: "wsl alr remove",
    help: "wsl alr",
    version: "wsl alr version",
    init: () => {},
  },
};

module.exports = languageConfig;
