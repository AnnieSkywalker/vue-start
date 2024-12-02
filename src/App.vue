<template>
    <PostForm @create ='createPost' />
    <PostList 
        :posts='posts'
        @remove='removePost'
    />
</template>

<script>
import PostForm from './components/PostForm.vue';
import PostList from './components/PostList.vue';

export default {
    components: {
        PostForm, PostList
    },
    data () {
        return {
            posts : [
                {id: 1, title: 'название1', body: 'описание1'},
                {id: 2, title: 'название2', body: 'описание2'},
                {id: 3, title: 'название3', body: 'описание3'}
            ],
            title: '',
            body: ''
        }
    },
    methods: {
        createPost (post) {
            this.posts.push(post);
        },
        removePost (post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        }
    }
}

</script>

<style scoped>




</style>
