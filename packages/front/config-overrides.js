const { removeModuleScopePlugin, override, babelInclude } = require("customize-cra");
const path = require("path");

function addAlias(config){
  config.resolve = {
    ...config.resolve,
    alias:{"@common":path.resolve(__dirname,"../common/build")}
  }
  return config
}

module.exports = override(
  addAlias,

  //remove limitaions of create-react-app
  removeModuleScopePlugin(),
  babelInclude([path.resolve("src"), path.resolve("../common/build")])
);