<template>
    <nav class="menu">
        <ul>
            <!-- links do router
            com destino e tag a envolver o texto
            classe quando esta ativo e exact para add a classe quando for exatamente aquele path-->
            <router-link to="/" tag="li" active-class="active" exact>
                <a>Inicio</a>
            </router-link>
            <router-link to="/usuario" tag="li" active-class="active">
                <a>Usuario</a>
            </router-link>
        </ul>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>