import Vue from 'vue'
import Vuex from 'vuex'

//registrando o vuex
Vue.use(Vuex)

//configurando o vuex e exportando o store
export default new Vuex.Store({
    //estado centralizado da aplicacao, compartilha informacoes entre os componentes
    state: {
        produtos: [],
        quantidade: 0,
        preco: 0
    },
    
    //getters sao metodos da store, metodos que podem ser acessados
    //por todos os componentes, recebe sempre o state como parametro
    //getters são colocados dentro de computed
    getters: {
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
            .reduce((total, atual) => total + atual, 0)
        }
    },

    //setters, metodos(mutations) que modificam o estado da aplicacao, recebe o estado e o payload
    //a responsabilidade da mutation é apenas alterar os valores, a regra de negocio deve ficar na action daquela mutation
    //setters sao colocados dentro de methods
    //payload = dado que sera adicionado ao estado
    mutations: {
        adicionarProduto(state, payload) {
            //payload = produto novo
            state.produtos.push(payload)
        },
        setQuantidade(state, payload) {
            state.quantidade = payload
        },
        setPreco(state, payload) {
            state.preco = payload
        }
    },
    //action coloca as regras de negocio da aplicacao, regras compartilhadas da aplicacao (sincronismo, assincronismo, ajax etc)
    actions: {
        //context é como se fosse o this
        adicionarProduto(context, payload) {
            setTimeout(() => {
                //contexto é a mutation que a action seguirá
                context.commit('adicionarProduto', payload)                
            }, 1000);
        }
    }
})

