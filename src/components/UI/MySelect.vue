<template>
    <select
        class="MySelect"
        :value="modelValue"
        @change="changeOptions"
    >
        <option
            disabled
            value=""
        >
            Сортировка
        </option>
        <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
        >
            {{ option.name }}
        </option>
    </select>
</template>

<script>
    export default {
        name: 'my-select',
    };
</script>
<script setup>
    import { defineEmits, defineProps } from 'vue';

    const { modelValue, options } = defineProps({
        modelValue: {
            type: String,
        },
        options: {
            type: Array,
            default: () => [],
        },
    });
    const emit = defineEmits(['update:modelValue']);
    const changeOptions = event => {
        emit('update:modelValue', event.target.value);
    };
</script>

<style lang="css" scoped>
    .MySelect {
        display: block;
        font-size: 16px;
        font-family: sans-serif;
        font-weight: 700;
        color: var(--text-lite);
        line-height: 1.3;
        padding: 0.6em 1.4em 0.5em 0.8em;
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
        margin: 0;
        border: 1px solid var(--border-color);
        border-radius: 0.5em;
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        background-color: var(--background-ui-el);
        background-image: url('../../images/down.svg');
        background-repeat: no-repeat, repeat;
        background-position:
            right 0.7em top 50%,
            0 0;
        background-size:
            0.65em auto,
            100%;
    }
    .MySelect::-ms-expand {
        display: none;
    }

    .sMySelect:hover {
        border-color: var(--background-ui-el-hover);
    }

    .MySelect:focus {
        border-color: var(--background-ui-el-hover);
        color: var(--text);
        outline: none;
    }

    .MySelect option {
        font-weight: normal;
    }

    *[dir='rtl'] .select-css,
    :root:lang(ar) .select-css,
    :root:lang(iw) .select-css {
        background-position:
            left 0.7em top 50%,
            0 0;
        padding: 0.6em 0.8em 0.5em 1.4em;
    }
</style>
