<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>O nome é: {{ nome }}</p>
        <p>Idade é: {{ idade }}</p>
        <button @click="alterarNome">Alterar Nome</button>
        <hr>
        <div class="componentes">
            <!-- resolvendo o nome para o vue mandar para o componente filho, pode usar somente o :nome -->
            <!-- usando o evento customizado (reiniciouNome) para mudar no componente pai, o dado que foi mudado pelo filho -->
            <!-- passando funcao callback para componente filho, funciona igual custom evento, assim ela pode ser chamada pelo filho -->
            <app-usuario-info
                v-bind:nome=nome
                :idade=idade 
                @reiniciouNome="nome = $event" 
                :reiniciarFn="reiniciarNome" />

            <app-usuario-editar
                :idade=idade />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data() {
        return {
            nome: 'Pedro',
            idade: 29
        }
    },
    methods: {
        alterarNome() {
            this.nome = 'José'
        },
        reiniciarNome() {
            this.nome = 'Pedro'
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
