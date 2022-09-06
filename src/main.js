import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";

import '@/assets/css/common.css';

// 引入elementUI
import './plugins/elementUI';
import './components'
// 引入工具函数
import utils from '@/assets/js/utils';
import validations from '@/assets/js/validations';

// 挂载到vue原型上
Vue.prototype.$utils = utils;
Vue.prototype.$validations = validations;

// 阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
