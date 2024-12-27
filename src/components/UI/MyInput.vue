<template>
    <input
        :value="modelValue"
        @input="updateInput"
        class="myInput"
        type="text"
    />
</template>

<script>
    export default {
        name: 'my-input',
    };
</script>

<script setup>
    import { defineProps, defineEmits } from 'vue';

    const props = defineProps(['modelValue']);
    const emit = defineEmits(['update:modelValue']);

    const updateInput = event => {
        emit('update:modelValue', event.target.value);
    };
</script>

<style lang="css" scoped>
    .myInput {
        width: 100%;
        border: 1px solid var(--border-color);
        border-radius: 6px;
        padding: 16px;
        background-color: var(--background-ui-el);
        box-sizing: border-box;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        color: var(--text);
        outline: none;
    }

    .myInput::placeholder {
        color: var(--text-lite);
    }

    input:focus {
        background: var(--background-ui-el-focus);
    }
</style>
