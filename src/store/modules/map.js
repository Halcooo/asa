export default {
  state: {
    map: false,
  },
  getters: {
    getMapState(state) {
      return state.map;
    },
  },
  mutations: {
    setMapState(state, payload) {
      state.map = payload;
    },
  },
  actions: {},
};
