/*
 * @Author: your name
 * @Date: 2021-06-16 10:25:18
 * @LastEditTime: 2021-06-16 10:34:07
 * @LastEditors: Please set LastEditors
 * @Description: babel config
 * @FilePath: /naiveui-admin-template/babel.config.js
 */
module.exports = {
  // https://jestjs.io/docs/getting-started or https://www.jestjs.cn/docs/getting-started
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
};
