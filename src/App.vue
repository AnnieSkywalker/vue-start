<template>
    <div class='main-container'>
        <header id='header' class='header'></header>
        <main id='main' class='content'>
            <div class='app'>
                <my-button 
                    class='add' 
                    @click='showVisible'
                >
                </my-button>

                <my-input
                    v-model='searchQuery'
                    placeholder='поиск...'
                ></my-input>

                <my-select 
                    v-model='selectedSort' 
                    :options='sortOptions'
                ></my-select>

                <my-dialog v-model:show='dialogVisible' >
                    <PostForm @create ='createPost' />
                </my-dialog>

                <PostList 
                    v-if='!isPostsLoading'
                    :posts='sortedAndSearchedPost'
                    @remove='removePost'
                />
                <my-loader v-else></my-loader>

                <my-pagination
                    :totalPage='totalPage'
                    :page='page'
                    @changePage='changePage'
                ></my-pagination>
            </div>
        </main>
        <main-footer></main-footer>
    </div>
</template>

<script>
import PostForm from './components/PostForm.vue';
import PostList from './components/PostList.vue';
import axios from 'axios';
import MainFooter from './components/MainFooter.vue';

export default {
    components: {
        PostForm, PostList, MainFooter
    },
    data () {
        return {
            posts : [],
            dialogVisible: false,
            isPostsLoading: false,
            selectedSort: '',
            searchQuery: '',
            page: 1,
            limit: 10,
            totalPage: 0,
            sortOptions: [
                {value: 'title', name: 'по названию'},
                {value: 'body', name: 'по описанию'}
            ]
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
        changePage (pageNumber) {
            this.page = pageNumber;
            this.postFetch();
        },
        async postFetch () {
            try {
                this.isPostsLoading = true;
                let response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10', {
                    params: {
                        _page: this.page,
                        _limit: this.limit,
                    }
                });
                this.totalPage = Math.ceil(response.headers['x-total-count']/this.limit)
                this.posts = response.data;
            } catch (e) {
                console.log(e);
            }
            finally {
                this.isPostsLoading = false;
            }
        }
    },
    mounted () {
        this.postFetch();
    },
    computed: {
        sortedPost () {
            return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
        },
        sortedAndSearchedPost () {
            return this.sortedPost.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    },
}
</script>

<style scoped>
</style>
