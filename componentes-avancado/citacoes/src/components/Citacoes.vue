<template>
    <div class="citacoes">
        <span>
            <button @click="numero--">&lt;</button>
            <button @click="numero++">&gt;</button>
        </span>
            <!-- 
            para passar html para o componente, basta adicionar a tag <slot>
            dentro do componente e passar o html dentro da tag do componente

            se precisar usar mais de um slot, basta nomea-los com o attr slot

            pode-se usar slot padrao (sem nome), nomeados
            -->
        <Citacao>
            <span slot="author" class="author">{{ citacoes[indice].autor }}</span>
            <p slot="text"><strong>{{ citacoes[indice].texto }}</strong></p>
            <span slot="source" class="source">{{ citacoes[indice].fonte }}</span>
            <p class="source">slot padrao</p>
        </Citacao>
    </div>
</template>

<script>
import Citacao from './Citacao'

export default {
    components: { Citacao },
    data() {
        return {
            numero: 0,
            citacoes: [{
                fonte: 'Jornal do Empreendedor',
                texto: 'Lembre-se sempre que você é absolutamente único. Assim como todos os outros.',
                autor: 'Margaret Mead'
            }, { 
                fonte: 'Frases de Mãe',
                texto: 'Isso não é um quarto, é um chiqueiro.',
                autor: 'Roberta'
            }, {
                fonte: 'Frases de Pai',
                texto: 'Vou contar até 3! 1, 2, 2...',
                autor: 'Gustavo'
            }]
        }
    },
    computed: {
        indice() {
            return Math.abs(this.numero % 3)
        }
    }
}
</script>

<style scoped>
    .citacoes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
