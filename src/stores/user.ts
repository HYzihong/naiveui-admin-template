/*
 * @Author: your name
 * @Date: 2021-06-16 14:36:49
 * @LastEditTime: 2021-06-16 14:37:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /naiveui-admin-template/src/stores/user.ts
 */
// @ts-check
import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    name: "Eduardo",
    /** @type {boolean} */
    isAdmin: true,
  }),
  actions: {
    /**
     * Attempt to login a user
     * @param {string} user
     * @param {string} password
     */
    async login(user: string, password: string) {
      const userData = await apiLogin(user, password);

      this.patch({
        name: user,
        ...userData,
      });
    },
    logout() {
      this.patch({
        name: "",
        isAdmin: false,
      });

      // we could do other stuff like redirecting the user
    },
  },
});

/**
 * Simulate a login
 * @param {string} a
 * @param {string} p
 */
function apiLogin(a: string, p: string) {
  if (a === "ed" && p === "ed") return Promise.resolve({ isAdmin: true });
  if (p === "ed") return Promise.resolve({ isAdmin: false });
  return Promise.reject(new Error("invalid credentials"));
}
