<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>
//import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            sequencia: 1
        }
    },
    computed: {
        quantidade() {
            return this.$store.state.parametros.quantidade
        },
        preco() {
            return this.$store.state.parametros.preco
        }
    },
    methods: {
        //...mapMutations(['adicionarProduto']),

        //usando a action e simulando um assincronismo com settimeout
        ...mapActions(['adicionarProduto']),
        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++
            
            //adicionando o produto no array de produtos da store
            //this.$store.state.produtos.push(produto)

            //adicionando o produto no estado via commit, o jeito mais tradicional de se fazer
            //chama o nome do setter e passa o payload a ser adicionado
            //this.$store.commit('adicionarProduto', produto)

            //adicionando via mapMutations, facilita para acessar os metodos como se fossem locais
            //this.adicionarProduto(produto)

            //usando o dispatch para action adicionar o produto no state
            this.$store.dispatch('adicionarProduto', produto)
        }
    }
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
