import Vue from 'vue'
import Vuex from 'vuex'

import main from './main'

// 全局引入
Vue.use(Vuex)

export default new Vuex.Store({
  ...main
})