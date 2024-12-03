<template>
    <div>
        <my-button class='add' @click='showVisible'>

        </my-button>
        <my-dialog v-model:show='dialogVisible' >
            <PostForm @create ='createPost' />
        </my-dialog>
        <PostList 
            :posts='posts'
            @remove='removePost'
        />

    </div>
    
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
            dialogVisible: false
        }
    },
    methods: {
        createPost (post) {
            this.posts.push(post);
            this.dialogVisible = false;
        },
        removePost (post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        showVisible () {
            this.dialogVisible = true;
        }
    }
}

</script>

<style scoped>




</style>
