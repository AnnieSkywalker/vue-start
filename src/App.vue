<template>
    <div>
        <my-button class='add' @click='showVisible'>
        </my-button>
        <my-button @click='postFetch'>set posts</my-button>
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
import MyButton from './components/UI/MyButton.vue';
import axios from 'axios';

export default {
    components: {
        PostForm, PostList
    },
    data () {
        return {
            posts : [],
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
        },
        async postFetch () {
            try {
                let response = await axios('https://jsonplaceholder.typicode.com/posts?_limit=10');
                this.posts = response.data;
            } catch (e) {
                console.log(e);
            }
        }
    }
}

</script>

<style scoped>




</style>
