export default {
  state: {
    isModalOpen: false
  },
  mutations: {
    TOGGLE_MODAL: (state) => {
      state.isModalOpen = !state.isModalOpen;
    }
  }
};
