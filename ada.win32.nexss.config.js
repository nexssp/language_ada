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
  crystalWSL: {
    install: `Powershell -C "Set-Location -Path ${__dirname} ; wsl -u root install/InstallAdaWSL.ps1"`,
    command: "wsl gnatmake",
    args: "-q <file>;./<fileNoExt>", // -n don't display up to date
    help: ``,
  },
};
languageConfig.errors = require("./nexss.ada.errors");
languageConfig.languagePackageManagers = {};

module.exports = languageConfig;
