<template>
    <section class="Section">
        <slot></slot>
    </section>
</template>

<script>
    export default {
        name: 'my-section',
    };
</script>

<style lang="css" scoped>
    .Section {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 20px;
        margin: 15px;
        border-bottom: 1px solid var(--border-color);
    }
</style>
