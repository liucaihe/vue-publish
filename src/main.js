import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
