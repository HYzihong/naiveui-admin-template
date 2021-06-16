/*
 * @Author: your name
 * @Date: 2021-06-15 21:27:49
 * @LastEditTime: 2021-06-16 08:43:06
 * @LastEditors: Please set LastEditors
 * @Description: main
 * @FilePath: /yh-admin/src/main.ts
 */
import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import "@/styles/index.css";
// 通用字体
// import 'vfonts/Lato.css'
// 等宽字体
// import 'vfonts/FiraCode.css'

createApp(App).use(router).mount("#app");
