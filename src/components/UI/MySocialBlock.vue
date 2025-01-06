<template>
    <a
        v-for="link in options"
        :key="link.alt"
        :href="link.href"
        class="SocialBlock"
        :target="link.target"
        :rel="link.rel"
    >
        <icon-base
            :width="35"
            :height="35"
            :icon-name="link.name"
        >
        </icon-base>
    </a>
</template>

<script>
    export default {
        name: 'my-social-block',
    };
</script>
<script setup>
    import { defineProps } from 'vue';

    const { options } = defineProps({
        options: {
            type: Array,
            default: () => [],
        },
    });
</script>

<style lang="css" scoped>
    .SocialBlock {
        font-weight: 500;
        font-size: 20px;
        line-height: 140%;
        color: var(--text);
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 30px;
        text-decoration: none;
        cursor: pointer;
        border-radius: 15px;
        padding: 10px;
        width: 35px;
        height: 35px;
    }

    .SocialBlock svg {
        display: block;
        object-fit: cover;
        object-position: top;
    }
</style>
