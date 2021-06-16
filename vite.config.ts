/*
 * @Author: your name
 * @Date: 2021-06-15 21:27:49
 * @LastEditTime: 2021-06-16 14:01:47
 * @LastEditors: Please set LastEditors
 * @Description: vite config
 * @FilePath: /naiveui-admin-template/vite.config.ts
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { join } from "path";

/**
 * @description: 获取路径
 * @param {string} dir
 * @return {string} full path
 */
// function pathResolve(dir: string) {
//   return resolve(__dirname, ".", dir);
// }

function pathJoin(dir: string) {
  return join(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": pathJoin("src/"),
    },
  },
});
