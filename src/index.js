import Vue from 'vue'
import router from './router'
import App from './App'

import 'assets/css/app.styl'
Vue.config.productionTip = false
Vue.config.ignoredElements = [
  'z-product-card'
]
/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
