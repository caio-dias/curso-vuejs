<template>
    <div>
        <ul>
            <li v-for="fruta in frutas" :key="fruta">
                {{ fruta }}
            </li>
        </ul>
        <input type="text" placeholder="add sua fruta" v-model="fruta" @keydown.enter="add">
    </div>
</template>

<script>
import FrutasMixin from './FrutasMixin'

export default {
    mixins: [FrutasMixin]
}
</script>

<style scoped>
    ul {
        list-style: none;
    }
</style>