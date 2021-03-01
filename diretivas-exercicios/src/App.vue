<template>
	<div id="app">
		<h1>Diretivas</h1>
		<!-- 
			descricao da diretiva:
			v-on = nome
			:click = argumentos
			.prevent = modificador
			pode se passar um valor entre aspas, se necessario

			ex: v-on:click.prevent=""

			podem ser registradas localmente, dentro do obj local, directives: {...}

			podem ser registradas globalmente, por exemplo no main.js
		-->

		<!-- o text coloca o texto dentro da tag -->
		<p v-text="'usando a diretiva v-text'"></p>

		<!-- o html coloca o html dentro da tag -->
		<p v-html="'usando a diretiva <strong>v-html</strong>'"></p>

		<p v-destaque="{cor1:'blue'}">usando a diretiva personalizada sem argumentos e modificadores</p>

		<p v-destaque:fundo.atrasar.alternar="confsDiretiva">diretiva personalizada com argumento fundo, modificadores atrasar e alternar, passando parametros via objeto.</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			confsDiretiva: {
				cor1: '#FF4500',
				cor2: '#FF8C00',
				atraso: 3000,
				intervalo: 500
			}
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
	font-size: 1.5rem;
}
</style>
