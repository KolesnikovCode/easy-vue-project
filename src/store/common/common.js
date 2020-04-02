export default {
  state: {
    isLoaded: false
  },
  mutations: {
    SET_IS_LOADED: (state, newVal) => {
      state.isLoaded = newVal;
    }
  }
};
