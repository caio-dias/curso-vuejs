<template>
    <div class="usuario-detalhe">
        <h2 v-if="!usuario">Usuário não selecionado!</h2>
        <div v-else>
            <h2>ID: {{ usuario.id }}</h2>
            <h2>Nome: {{ usuario.nome }}</h2>
            <h2>Idade: {{ usuario.idade }}</h2>
        </div>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    data() {
        return {
            usuario: null
        }
    },
    created() {
        //sempre que o componente é criado, ele faz a amarracao, para ouvir o evento emitido pelo barramento
        barramento.onUsuarioSelecionado( usuario => {
            //passando a callback para o barramento a efetuar
            //modificando o data com o usuario recebido pelo barramento
            this.usuario = usuario
        })
    }
}
</script>

<style>
    .usuario-detalhe {
        flex: 1;
        border: 1px solid #CCC;
    }
</style>
