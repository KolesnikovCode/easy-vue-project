export default {
  state: {
    step: 1
  },
  mutations: {
    GO_TO_NEXT_STEP: (state) => {
      state.step++;
    }
  }
};
