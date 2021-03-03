<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<!-- utilizando o filtro | nome do filtro, podendo usar quantos quiser -->
		<!-- inverter é um filtro global -->
		<p> {{ cpf | cpf | inverter}}</p>

		<!-- utilizando filtro com bind -->
		<input type="text" :value="cpf | cpf">

		<hr>
		
		<Frutas />
	</div>
</template>

<script>
import Frutas from './Frutas.vue'

//usando mixix, ele é como uma funcao, vc coloca nele tudo o que quiser, e re usa onde precisar
//usar mixin global é ruim, pq todo dado que fica nele, é transferido para todos que estao ligados a app.vue
//se o componente tiver um dado igual ao do mixin, o dado do componente tem prioridade
import FrutasMixin from './FrutasMixin'

export default {
	components: { Frutas},
	mixins: [FrutasMixin],
	filters: {
		cpf(cpf) {
			const arr = cpf.split('')
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')
			return arr.join('')
		}
	},
	data() {
		return {
			cpf: '30290249209'
		}
	}
}
</script>

<style>
#app , input {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 20px;
	font-size: 1.5rem;
}
</style>
