<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Nome do usuário: <strong>{{ nomeToUpperCase() }}</strong></p>
        <p>Idade do usuário: <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn">Reiniciar Nome (callback)</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    //registrando as propriedades e o tipo delas, que o componente irá aceitar
    props: {
        nome: {
            //alguns tipos de dados que a prop pode receber
            type: String,
            required: true,
            default: 'Anonimo'
        },
        idade: Number,
        //recebendo callback via props
        reiniciarFn: Function
    },
    methods: {
        nomeToUpperCase() {
            //manipulando a propriedade recebida
            return this.nome.toUpperCase()
        },
        reiniciarNome() {
            this.nome = 'Pedro'
            //disparando um evento customizado
            //para o componente filho mudar o dado que se usa no componente pai
            //passou o dado que mudou assim que o evento foi disparado
            this.$emit('reiniciouNome', this.nome)
        }
    },
    created() {
        //vinculando funcao callback ao evento emitido pelo barramento
        barramento.quandoIdadeMudar((idade) => {
            this.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
