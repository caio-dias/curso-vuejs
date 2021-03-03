new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta() {
            alert('botao pressionado!')
        },
        chamaKeyDown(e) {
            let texto = e.target.value
            this.valor = texto
        }
    }
})