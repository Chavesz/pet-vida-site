import Vue from 'vue';
import './style.css'
import App from './App.vue'
import router from './router'
import './assets/styles/global.css'

Vue.use(router);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
