<template>
    <Painel titulo="Resumo" roxo>
        <div class="resumo">
            <span>Total: <strong>{{ valorTotal | dinheiro }}</strong></span>
            <hr>
            <button>Finalizar!</button>
        </div>
    </Painel>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    //modo de pegar getters sem precisar referenciar o obj, mais simples
    computed: mapGetters(['valorTotal'])

    // computed: {
    //     total() {
    //         //retornando o valor total dos produtos via getters
    //         return this.$store.getters.valorTotal
    //     }
    // }
}
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #EEE;
        width: 33%;
    }
</style>
