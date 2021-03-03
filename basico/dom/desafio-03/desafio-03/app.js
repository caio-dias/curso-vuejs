new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        resultado() {
            return this.valor >= 30 ? '>= 30' : '< 30'
        }
    },
    watch: {
        resultado() {
            setTimeout(() => {
                this.valor = 0
            }, 5000);
        }
    }
});