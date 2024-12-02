<template>
    <section class="posts" >
        <div v-if='posts.length > 0'>
            <h2 class="section-title">
            Список постов
            </h2>
            <PostsItem 
                v-for='post in posts'
                :post='post'
                :key='post.id'
                @remove="$emit('remove', post)"
            ></PostsItem>
        </div>
        <h2 v-else class="section-title">
            Посты не найдены!
        </h2>
        
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
