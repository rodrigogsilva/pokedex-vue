import Vue from "vue";
import Vuex from "vuex";

import * as loading from "./modules/loading";
import * as pokemonModule from "./modules/pokemonModule";

Vue.use(Vuex);

export default new Vuex.Store({ modules: { pokemonModule, loading } });
