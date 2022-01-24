import { defineStore } from "pinia";

export const useBoardStore = defineStore({
  id: "storage",
  state: () => ({
    count: 0,
  }),
  getters: {},
  actions: {
    add() {
      this.count++;
    },
  },
});
