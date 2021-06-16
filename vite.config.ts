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
