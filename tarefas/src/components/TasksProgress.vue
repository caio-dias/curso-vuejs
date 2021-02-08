<template>
    <div class="tasks-progress">
        <span class="progress-value">{{ progress }}%</span>
        <div class="progress-bar" :style="{width: progress + '%'}"></div>
    </div>
</template>

<script>
export default {
    props: {
        progress: { type: Number, default: 0 }
    }
}
</script>

<style>
    .tasks-progress {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 80%;
        border: 1px solid #fff;
        border-radius: 8px;
        margin-bottom: 15px;
        color: #fff;
    }

    .progress-bar {
        position: absolute;
        height: 100%;
        align-self: flex-start;
        border-radius: 8px;
        background-color: #4caf50;
    }

    .progress-value {
        z-index: 1;
        font-size: 1.5rem;
    }
</style>