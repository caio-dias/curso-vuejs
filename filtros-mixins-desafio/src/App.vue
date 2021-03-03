<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<p v-for="frase in frases" :key="frase">
			{{ frase | spaceForComma }}
		</p>
		<hr>
		<!-- Exercício 2 e 3 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<p v-for="frase in frases" :key="frase">
			{{ frase | wordLength }}
		</p>
		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
	</div>
</template>

<script>
import FrasesMixin from './FrasesMixin'

export default {
	mixins: [FrasesMixin],
	filters: {
		spaceForComma(words) {
			return words.split(' ').join(',')
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.9rem;
}
</style>
