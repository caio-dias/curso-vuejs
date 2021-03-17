<template>
    <div class="contadores">
      <!-- usando 5 contadores -->
      <Contador v-for="c in 5" :key="c" />
    </div>
</template>

<script>
//importando o componente localmente
import Contador from './Contador.vue'
export default {
  components: { Contador },
}
</script>

<style>

</style>s