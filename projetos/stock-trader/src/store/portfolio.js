export default {
    state: {
        funds: 10000,
        stocks: []
    },
    mutations: {
        //a action dessa mutation é disparada pelo modulo de stocks
        buyStock(state, { stockId, quantity, stockPrice}) {
            //se ja tiver um registro daquela acao, apenas incrementa
            const record = state.stocks.find(el => el.id == stockId)

            if (record) {
                record.quantity += quantity
            } else {
                state.stocks.push({
                    id: stockId,
                    quantity: quantity
                })
            }

            state.funds -= stockPrice * quantity
        },
        sellStock(state, { stockId, quantity, stockPrice }) {
            const record = state.stocks.find(el => el.id == stockId)

            if(record.quantity > quantity) {
                record.quantity -= quantity
            } else {
                state.stocks.splice(state.stocks.indexOf(record), 1)
            }
            
            state.funds += stockPrice * quantity
        },
        //carregando dados do firebase
        setPortfolio(state, portfolio) {
            state.funds = portfolio.funds
            state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
        }
    },
    actions: {
        sellStock({ commit }, order) {
            commit('sellStock', order)
        }
    },
    getters: {
        //recebendo todos os getters da aplicacao
        stockPortfolio(state, getters) {
            return state.stocks.map(stock => {
                //acessando o getter no modulo de stocks
                const record = getters.stocks.find(el => el.id == stock.id)

                return {
                    id: stock.id,
                    quantity: stock.quantity,
                    name: record.name,
                    price: record.price
                }
            })
        },
        funds(state) {
            return state.funds
        }
    }
}