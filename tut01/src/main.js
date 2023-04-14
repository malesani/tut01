import Vue from 'vue'
import App from './App.vue'
import store from './store'
import i18n from './i18n'

// import store from './store/store.js'
Vue.config.productionTip = false

new Vue({
  store,
  i18n,

  // store,
  render: h => h(App)
}).$mount('#app')
