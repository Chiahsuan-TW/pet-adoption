import { createStore } from "vuex";

export default createStore({
  state: {
    isLoveStyle: false,
    followAmount: null,
  },
  mutations: {
    hasLoveStyle(state) {
      state.isLoveStyle = true;
    },
    deleteLoveStyle(state) {
      state.isLoveStyle = false;
    },
    setFollowAmount(state, amount) {
      state.followAmount = amount;
    },
  },
  actions: {},
  modules: {},
});
