export default {
  state: {
    step: 1
  },
  mutations: {
    GO_TO_NEXT_STEP: (state) => {
      state.step++;
    },
    GO_TO_BACK_STEP: state => {
      if (state.step > 1) {
        state.step--;
      }
    },
    GO_TO_FIRST_MODAL_STEP: state => {
      state.step = 1;
    }
  }
};
