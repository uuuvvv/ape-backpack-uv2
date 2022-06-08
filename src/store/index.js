import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

// 全局引入
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})