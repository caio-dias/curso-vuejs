<template>
    <div class="usuario-detalhe">
        <h3>usuario detalhe</h3>
        <hr>
        <p><strong>Codigo:</strong> {{ id }} </p>
        <!-- :to="`/usuario/${id}/editar`" -->
        <!-- usando rotas nomeadas -->
        <router-link
            tag="button"
            primario
            :to="{ 
                name:'editarUsuario',
                params: { id: id },
                query: {completo: true, idioma: 'pt-br'} 
            }">
            Editar
        </router-link>
    </div>    
</template>

<script>
export default {
    props: ['id'],
    // data(){
    //     return {
    //         //pegando o id setado na rota, pegando de ROUTE
    //         id: this.$route.params.id
    //     }
    // },
    // //monitorando a mudança dos parametros da url, para mudar tambem no template
    // watch: {
    //     $route(to, from) {
    //         //pegando o parametro mais novo e colocando no id
    //         this.id = to.params.id
    //     }
    // },
}
</script>

<style scoped>

</style>