import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//diretiva personalizada
Vue.directive('destaque', {
	bind(el, binding, vnode) {
		//usando valor fixo
		//el.style.backgroundColor = '#ccc'
		
		//pegando parametros passados passando como v-destaque="'#ccc'"
		//el.style.backgroundColor = binding.value
		
		const aplicarCor = cor => {
			if(binding.arg === 'fundo') {
				el.style.backgroundColor = cor
			} else {
				el.style.color = cor
			}
		}

		//pegando modificadores
		let atraso = 0
		if(binding.modifiers['atrasar']) {
			atraso = binding.value.atraso
		}

		//pegando parametros passados por objeto
		const cor1 = binding.value.cor1
		const cor2 = binding.value.cor2

		let corAtual = cor1

		setTimeout(() => {
			if(binding.modifiers['alternar']) {
				setInterval(() => {
					corAtual = corAtual === cor1 ? cor2 : cor1
					aplicarCor(corAtual)
				}, binding.value.intervalo);
			} else {
				aplicarCor(binding.value.cor1)
			}
		}, atraso)
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
