<template>
    <div class="usuario">
        <h2>Usuarios</h2>
        <hr>
        <!-- aqui vão as rotas aninhadas de usuario -->
        <router-view />
        <button sucesso @click="irParaInicio">Voltar</button>
    </div>
</template>

<script>
export default {
    methods: {
        irParaInicio() {
            //acessando o router pelo $router e voltando para o inicio
            //this.$router.push('/')

            //voltando para rota usando name
            this.$router.push({ name: 'inicio' })
        }
    }
}
</script>

<style scoped>

</style>