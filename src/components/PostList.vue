<template>
    <section class="posts" >
        <div v-if='posts.length > 0'>
            <h2 class="section-title">
            Список постов
            </h2>
            <TransitionGroup name='post-list'>
                <PostsItem 
                    v-for='post in posts'
                    :post='post'
                    :key='post.id'
                    @remove="$emit('remove', post)"
                ></PostsItem>
            </TransitionGroup>
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
.post-list-move,
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translatex(130px);
}
</style>
