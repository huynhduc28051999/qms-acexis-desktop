const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);
const { override, addWebpackAlias } = require('customize-cra')

const alias = {
  '@components': resolve('src/components'),
  '@pages': resolve('src/pages'),
  '@configs': resolve('src/configs'),
  '@utils': resolve('src/utils'),
  '@tools': resolve('src/tools'),
  '@assets': resolve('src/assets'),
  '@common': resolve('src/common')
}
module.exports = override(
  addWebpackAlias(alias),
)