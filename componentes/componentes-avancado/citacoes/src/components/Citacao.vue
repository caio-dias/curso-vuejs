<template>
    <div class="citacao">
        <slot name="author"></slot>
        <slot name="text"></slot>
        <slot name="source"></slot>
        <!-- slot padrao -->
        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
        margin-bottom: 10px;
    }

    .author {
        font-size: 20px;
    }

    .source {
        font-size: 15px;
    }
</style>
