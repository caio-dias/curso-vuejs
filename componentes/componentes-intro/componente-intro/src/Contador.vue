<template>
  <div class="contador">
    <span>{{ contador }}</span>
    <button @click="contador++">+</button>
    <button @click="contador--">-</button>
    <hr>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        contador: 0
      };
    },
    methods: {
      adicionar() {
        this.contador++
      },
      subtrair() {
        this.contador--
      }
    }
  };
</script>

<style scoped>
  /*  scoped serve para o css alterar somente o componente */
  .contador span {
    border: 1px solid #ccc;
    height: 30px;
    padding: 5px 25px;
  }

  .contador button {
    height: 30px;
    width: 30px;
    border: 0;
    border-radius: 15px;
    background-color: coral;
    color: #fff;
    margin-left: 10px;
    outline: none;
  }
</style>