import Vue from 'vue'
import Vuex from 'vuex'

//importando modulos
import carrinho from './modules/carrinho'
import parametros from './modules/parametros'

//importando getters gerais
import * as getters from './getters'

//registrando o vuex
Vue.use(Vuex)

//configurando o vuex e exportando o store
export default new Vuex.Store({
    //state geral da aplicacao
    state: {
        nome: 'Beibão store',
        cnpj: '24.389.137/0001-48'
    },

    //registrando modulos
    //via modulos o estado fica como um obj de cada modulo
    //ex: this.$store.state.parametros.preco
    modules: { carrinho, parametros },
    
    //importando getters
    getters
})

