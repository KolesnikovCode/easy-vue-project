export default {
  state: {
    user: null
  },
  mutations: {
    SET_USER: (state, payload) => {
      state.user = {
        id: payload.uid,
        name: payload.displayName,
        photo: payload.photoURL
      }
    },
    UNSET_USER: state => {
      state.user = null
    }
  }
};
