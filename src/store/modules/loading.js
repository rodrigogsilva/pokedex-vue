export const state = {
  isLoading: false,
};

export const mutations = {
  SET_LOADING(state, payLoad) {
    state.isLoading = payLoad;
  },
};

export const getters = {
  isLoading: (state) => state.isLoading,
};

export const actions = {
  async setLoading({ commit }, loading) {
    commit("SET_LOADING", loading);
  },
};
