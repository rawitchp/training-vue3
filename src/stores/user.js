import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({ user: null }),
  getters: {
    fullName: (state) => {
      return state.user?.name + state.user?.lastName;
    },
  },
  actions: {
    setUser(payload) {
      this.user = payload;
    },
  },
});
