<template>
    <div class="usuario-lista">
        <h3>lista de usuarios</h3>
        <ul class="lista">
            <router-link class="item-lista" tag="li" to="usuario/1">
                usuario 1
            </router-link>
            <router-link class="item-lista" tag="li" to="usuario/2">
                usuario 2
            </router-link>
            <router-link class="item-lista" tag="li" to="usuario/3">
                usuario 3
            </router-link>
        </ul>
    </div>    
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>