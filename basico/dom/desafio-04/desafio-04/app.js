new Vue({
	el: '#desafio',
	data: {
		destaque: false,
		encolher: true,
		valorDoUsuario: '',
		valorDoUsuario2: '',
		classe: '',
		estilo: '',
		progresso: 0
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.destaque = !this.destaque,
				this.encolher = !this.encolher				
			}, 1000);
		},
		iniciarProgresso() {
			let interval = setInterval(() => {
				if(this.progresso <= 99){
					this.progresso++
				} else {
					clearInterval(interval)
				}
			}, 100);
		},
		exibirClasse(e) {
			let valor = e.target.value
			if (valor == 'true') {
				this.classe = 'borda'
			} else {
				this.classe = ''
			}
		}
	}
})
