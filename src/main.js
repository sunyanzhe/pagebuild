import Vue from 'vue'
import App from './App.vue'
import mcMktComp from '@jd/mc-mkt-comp'
import { demt } from "./assets/DockEventEmitter";
import store from './store/index.js'

import '@jd/mc-mkt-comp/lib/mc-mkt-comp.css'
import './assets/css/index.scss'

Vue.use(mcMktComp);

Vue.config.productionTip = false
Vue.prototype.$demt = demt;

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
