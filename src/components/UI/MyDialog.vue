<template>
    <div
        class="myDialog"
        v-if="show"
        @click.stop="hideDialog"
    >
        <div
            @click.stop
            class="myDialogContent"
        >
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'my-dialog',
    };
</script>
<script setup>
    import { defineEmits, defineProps } from 'vue';

    const { show } = defineProps({
        show: {
            type: Boolean,
            default: false,
        },
    });
    const emit = defineEmits(['update:show']);

    const hideDialog = () => {
        emit('update:show', false);
    };
</script>

<style scoped>
    .myDialog {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(5px);
    }

    .myDialogContent {
        padding: 25px;
        background-color: var(--background-color);
        border-radius: 16px;
        min-width: 250px;
    }
</style>
