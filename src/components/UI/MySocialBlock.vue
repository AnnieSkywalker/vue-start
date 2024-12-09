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
    color: #999;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
    text-decoration: none;
    cursor: pointer;
    background-color: #0f0f0f;
    border: 2px solid #232329;
    border-radius: 12px;
    padding: 10px;
    width: 35px;
    height: 35px;
}

.SocialBlock:hover {
    background-color: #232329;
}

.SocialBlock img {
    display: block;
    width: 35px;
    height: 35px;
    object-fit: cover;
    object-position: top;
}

</style>