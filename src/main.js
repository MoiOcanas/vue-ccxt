// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//Golden layout
import vgl from 'vue-golden-layout'

//Tools
import store from './store/store'

Vue.config.productionTip = false
Vue.use(vgl)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store,
})
