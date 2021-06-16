/*
 * @Author: your name
 * @Date: 2021-06-15 21:27:49
 * @LastEditTime: 2021-06-16 15:08:04
 * @LastEditors: Please set LastEditors
 * @Description: main
 * @FilePath: /yh-admin/src/main.ts
 */
import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import "@/styles/index.scss";
// 通用字体
// import 'vfonts/Lato.css'
// 等宽字体
// import 'vfonts/FiraCode.css'
import { createPinia } from "pinia";

createApp(App).use(router).use(createPinia()).mount("#app");
