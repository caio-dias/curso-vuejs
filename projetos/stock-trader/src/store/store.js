import Vue from 'vue'
import Vuex from 'vuex'

//modulos
import stocks from './stocks'
import portfolio from './portfolio'

//acoes globais
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    modules: {
        stocks,
        portfolio
    }
})