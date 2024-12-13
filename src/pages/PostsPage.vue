<template>
    <div>
        <section class="management">
            <my-button 
                class='add' 
                @click='showVisible'
            >
                <icon-base
                    :width=22
                    :height=22
                    :iconName='iconName'>
                </icon-base>
            </my-button>

            <my-input
                v-model='searchQuery'
                placeholder='поиск...'
            ></my-input>

            <my-select 
                v-model='selectedSort' 
                :options='sortOptions'
            ></my-select>
        </section>

        <my-dialog v-model:show='dialogVisible' >
            <post-form @create ='createPost' />
        </my-dialog>

        <post-list
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
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import axios from 'axios';

    export default {
        components: {
            PostForm, PostList,
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
                iconName: 'plus',
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
                this.postsFetch();
            },
            async postsFetch () {
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
            this.postsFetch();
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

<style lang="css" scoped>
.management {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>