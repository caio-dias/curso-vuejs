<template>
    <div class="task" :class="stateClass" @click="$emit('taskStateChanged', task)">
        <!-- emitindo o evento para a taskGrid, que passará para a app deletar a task do data -->
        <span @click.stop="$emit('taskDeleted', task)" class="close">x</span>
        <p> {{ task.name }}</p>
    </div>
</template>

<script>
export default {
    props: {
        task: { type: Object, required: true }
    },
    computed: {
        stateClass() {
            return {
                done: !this.task.pending,
                pending: this.task.pending
            }
        }
    }
}
</script>

<style>
    .task {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        width: 250px;
        min-height: 120px;
        padding: 10px;
        border-radius: 8px;
        margin: 10px;
        box-sizing: border-box;
        font-size: 2rem;
        font-weight: 300;
        cursor: pointer;
        user-select: none;
    }

    .close {
        display: flex;
        justify-content: center;
        width: 20px;
        height: 20px;
        position: absolute;
        right: 10px;
        top: 10px;
        border-radius: 10px;
        font-size: 0.9rem;
        font-weight: 600;
    }

    /* colors */
    .pending {
        border-left: 12px solid #b73229;
        background-color: #f44336;
    }

    .done {
        border-left: 12px solid #0a8f08;
        background-color: #4aaf50;
        color: #ddd;
        text-decoration: line-through ;
    }

    .pending .close {
        background-color: #b73229;
    }

    .done .close {
        background-color: #0a8f08;
    }
</style>