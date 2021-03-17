<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button
			@click="exibir = !exibir"
			variant="primary"
			class="mb-4">
				Mostrar mensagem
		</b-button>
		<!-- 
			padroes de animacoes com classes:
			* = alguma coisa

			para mostrar o elemento na tela:
			*-enter = antes de começar a animacao
			*-enter-active = no meio da transicao
			*-enter-to = pra onde ele vai chegar, ao final

			para tirar o elemento da tela:
			*-leave
			*-leave-active
			*-leave-to

			se nao escolhermos uma nomeclatura, o padrao de inicio é v-...
		-->

		<!--
			so é possivel um elemento dentro da tag
			setando o type, o vue usará oq esta setado como tempo padrao da animacao, sempre se usa o menor
			o appear serve para a animacao acontecer no momento que a pagina é carregada
		-->
		<transition name="fade" appear>
			<b-alert variant="info" show v-if="exibir">{{ mensagem }}</b-alert>
		</transition>

		<transition name="slide" type="animation" appear>
			<b-alert variant="info" show v-if="exibir">{{ mensagem }}</b-alert>
		</transition>

		<hr>

		<!-- escolhendo o tipo da animacao -->
		<b-select v-model="tipoAnimacao" class="mb-4">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select>

		<!-- 
			transicionando entre elementos, cada um precisa ter o key
			mode = primeiro um sai, depois o outro entra
		-->
		<transition :name="tipoAnimacao" mode="out-in">
			<b-alert variant="info" show v-if="exibir" key="info">{{ mensagem }}</b-alert>
			<b-alert variant="warning" show v-else key="warn">{{ mensagem }}</b-alert>
		</transition>
	</div>
</template>

<script>

export default {
	data() {
		return {
			mensagem: 'Uma mensagem de informacao para o usuario',
			exibir: false,
			tipoAnimacao: 'fade'
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

/* classes de transicao */
/* mostrar o elemento */
/* comeco com fade, pq o nome da animacao setada é fade */
.fade-enter {
	opacity: 0;
}

.fade-enter-active {
	transition: opacity 2s;
}

.fade-enter-to {
	opacity: 1;
}

/* esconder o elemento */
.fade-leave {
	opacity: 1;
}

.fade-leave-active {
	transition: opacity 2s;
}

.fade-leave-to {
	opacity: 0;
}

/* slide */

@keyframes slide-in {
	from { transform: translateY(40px); }
	to { transform: translateY(0); }
}

@keyframes slide-out {
	from { transform: translateY(0); }
	to { transform: translateY(40px); }
}

.slide-enter, .slide-leave-to {
	opacity: 0;
}

.slide-enter-active {
	animation: slide-in 2s ease;
	transition: opacity 2s;

}

.slide-leave-active {
	animation: slide-out 2s ease;
	transition: opacity 2s;
}
</style>
