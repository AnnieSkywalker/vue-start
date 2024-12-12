<template>
    <a v-for='link in options' :key='link.alt' :href='link.href' class='SocialBlock' :target='link.target' :rel='link.rel'>
        <img :src='link.src' :alt='link.alt'/>
    </a>
</template>

<script>
    export default {
        name: 'my-social-block',
        props: {
            options: {
                type: Array,
                default: () => []
            },
        },
    }
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
    background-color: var(--background-social);
    border: 2px solid var(--border-color);
    border-radius: 12px;
    padding: 10px;
    width: 35px;
    height: 35px;
}

.SocialBlock:hover {
    background-color: var(--background-hover);
}

.SocialBlock img {
    display: block;
    width: 35px;
    height: 35px;
    object-fit: cover;
    object-position: top;
}

</style>