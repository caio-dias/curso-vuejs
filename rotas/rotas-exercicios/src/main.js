import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

Vue.config.productionTip = false

new Vue({
  //adicionando o router globalmente
  router,
  render: h => h(App),
}).$mount('#app')
