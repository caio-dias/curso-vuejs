import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('wordLength', function(valor) {
	let valorArr = valor.split(' ')
	
	valorArr.forEach((item, index) => {
		valorArr[index] = `${item} (${item.length})`
	})

	return valorArr.join(' ')
})

new Vue({
	render: h => h(App),
}).$mount('#app')
