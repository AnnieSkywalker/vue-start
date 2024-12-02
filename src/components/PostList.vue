<template>
    <section class="posts" >
        <!-- <h2 class="section-title">
            Посты не найдены!
        </h2> -->
        <h2 class="section-title">
            Список постов
        </h2>
        <PostsItem 
            v-for='post in posts'
            :post='post'
        ></PostsItem>
    </section>
</template>

<script>
import PostsItem from './PostItem.vue';
    
    export default {
        components: {
            PostsItem
        },
        props: {
            posts: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style lang="css" scoped>
</style>
