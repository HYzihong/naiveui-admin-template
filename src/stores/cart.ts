/*
 * @Author: your name
 * @Date: 2021-06-16 14:36:37
 * @LastEditTime: 2021-06-16 14:37:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /naiveui-admin-template/src/stores/cart.ts
 */
import { defineStore } from "pinia";
import { useUserStore } from "./user";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    /** @type {string[]} */
    rawItems: [],
  }),
  getters: {
    /**
     * @returns {Array<{ name: string; amount: number }>}
     */
    items: (state) =>
      state.rawItems.reduce((items, item) => {
        const existingItem = items.find((it: any) => it.name === item);

        if (!existingItem) {
          items.push({ name: item, amount: 1 });
        } else {
          existingItem.amount++;
        }

        return items;
      }, []),
  },
  actions: {
    /**
     * Add item to the cart
     * @param {string} name
     */
    addItem(name) {
      this.rawItems.push(name);
    },

    /**
     * Remove item from the cart
     * @param {string} name
     */
    removeItem(name: string) {
      const i = this.rawItems.lastIndexOf(name);
      if (i > -1) this.rawItems.splice(i, 1);
    },

    async purchaseItems() {
      const user = useUserStore();
      if (!user.name) return;

      console.log("Purchasing", this.items);
      const n = this.items.length;
      this.rawItems = [];

      return n;
    },
  },
});
