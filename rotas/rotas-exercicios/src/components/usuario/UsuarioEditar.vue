<template>
    <div class="usuario-editar">
        <h3>usuario editar</h3>
        <hr>
        <p><strong>Codigo:</strong> {{ id }} </p>
        <!-- pegando query params -->
        <p><strong>Completo:</strong> {{ $route.query.completo ? 'Sim' : 'Não' }}</p>
        <hr>
        <button primario @click="confirmou = true">Confirmar</button>
    </div>    
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            confirmou: false
        }
    },
    //interceptar a saida do componente no momento certo
    beforeRouteLeave(to, from, next) {
        if(this.confirmou) {
            next()
        } else {
            if(confirm('Tem certeza?')) {
                next()
            } else {
                next(false)
            }
        }
    }
}
</script>

<style scoped>

</style>