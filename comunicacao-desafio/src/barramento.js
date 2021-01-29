import Vue from 'vue'

export default new Vue({
    methods: {
        setUsuarioSelecionado(usuario) {
            //emitindo um evento customizado
            this.$emit('usuarioSelecionado', usuario)
        },
        onUsuarioSelecionado(callback) {
            //quando o evento é emitido, chama a callback recebida
            this.$on('usuarioSelecionado', callback)
        }
    }
})