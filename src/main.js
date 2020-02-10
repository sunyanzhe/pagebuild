import Vue from 'vue'
import App from './App.vue'
import { demt } from "./assets/DockEventEmitter";

import './assets/css/index.scss'
Vue.config.productionTip = false
Vue.prototype.$demt = demt;
new Vue({
  render: h => h(App),
}).$mount('#app')
