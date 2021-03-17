<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert
			show
			dismissible
			v-for="mensagem in mensagens"
			:key="mensagem.texto"
			:variant="mensagem.type">
			{{ mensagem.texto }}
		</b-alert>
		<b-card>
			<b-form-group label="Nome">
				<b-form-input
					type="text"
					size="lg"
					v-model="usuario.nome"
					placeholder="informe o nome">	
				</b-form-input>
			</b-form-group>
			<b-form-group label="Email">
				<b-form-input
					type="text"
					size="lg"
					v-model="usuario.email"
					placeholder="informe o email">	
				</b-form-input>
			</b-form-group>
			<hr>
			<b-button
				@click="salvar"
				size="lg"
				variant="primary">
				Salvar
			</b-button>
			<b-button
				class="ml-2"
				@click="obterUsuarios"
				size="lg"
				variant="success">
				Listar usuarios
			</b-button>
		</b-card>
		<hr>
		<b-list-group class="mb-4">
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
				<strong>Nome:</strong> {{ usuario.nome }}<br>
				<strong>Email:</strong> {{ usuario.email }}<br>
				<strong>Id:</strong> {{ id }}<br>
				<b-button
					variant="warning"
					size="lg"
					@click="carregar(id)">
					Carregar
				</b-button>
				<b-button
					class="ml-2"
					variant="danger"
					size="lg"
					@click="excluir(id)">
					Excluir
				</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			mensagens: [],
			id: null,
			usuario: {
				nome: '',
				email: ''
			},
			usuarios: []
		}
	},
	methods: {
		limpar() {
			this.usuario.nome = ''
			this. usuario.email = ''
			this.usuario.id = null
			this.mensagens = []
		},
		salvar() {
			//mandando dados via post ou fazendo a alteracao de um usuario, e limpando o form ao sucesso do metodo
			const metodo = this.id ? 'patch' : 'post'
			const finalUrl = this.id ? `/${this.id}.json` : '.json'

			this.$http[metodo](`/usuarios${finalUrl}`, this.usuario)
				.then(() => {
					this.limpar()
					this.mensagens.push({
						texto: 'Operação realizada com sucesso!',
						type: 'success'
					})
				})
		},
		obterUsuarios() {
			//metodo get
			this.$http.get('usuarios.json')
				.then(resp => {
					this.usuarios = resp.data
				})
		},
		carregar(id) {
			//adiciona usuario na tabela para fazer o put(patch)
			this.id = id
			this.usuario = { ...this.usuarios[id] }
		},
		excluir(id) {
			//excluindo um dado do banco
			this.$http.delete(`/usuarios/${id}.json`)
				.then(() => {
					this.limpar()
					this.obterUsuarios()
					this.mensagens.push({
						texto: 'Usuario excluido com sucesso',
						type: 'success'
					})
				})
				.catch(() => {
					this.mensagens.push({
						texto: 'Erro ao excluir usuario',
						type: 'danger'
					})
				})
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
