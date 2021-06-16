/*
 * @Author: your name
 * @Date: 2021-06-15 21:50:31
 * @LastEditTime: 2021-06-16 14:28:56
 * @LastEditors: Please set LastEditors
 * @Description: router main
 * @FilePath: /yh-admin/router/index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/about.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

// vue-router.esm-bundler.js:72 [Vue Router warn]: Component "default" in record with path "/" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.
