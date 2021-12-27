import { createStore } from "vuex";

export default createStore({
  state: {
    isLoveStyle: false,
  },
  mutations: {
    changeLoveStyle(state) {
      state.isLoveStyle = true;
    },
  },
  actions: {},
  modules: {},
});
