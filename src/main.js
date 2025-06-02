import Vue from 'vue';
import './style.css'
import App from './App.vue'
import router from './router'
import './assets/styles/global.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
