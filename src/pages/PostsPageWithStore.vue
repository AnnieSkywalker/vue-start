<template>
    <div>
        <section class="management">
            <my-button 
                class='add' 
                @click='showVisible'>
                <icon-base
                    :width=22
                    :height=22
                    :iconName='iconName'>
                </icon-base>
            </my-button>

            <my-input
                :model-value='searchQuery'
                @update:modelValue="setSearchQuery"
                placeholder='поиск...'
            ></my-input>

            <my-select 
                :model-value='selectedSort' 
                @update:modelValue="setSelectedSort"
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
import {mapActions, mapState, mapGetters, mapMutations} from "vuex";

    export default {
        components: {
            PostForm, PostList,
        },
        data () {
            return {
                dialogVisible: false,
                iconName: 'plus',
            }
        },
        methods: {
            ...mapMutations({
                setPage: 'post/setPage',
                setSearchQuery: 'post/setSearchQuery',
                setSelectedSort: 'post/setSelectedSort'
            }),
            ...mapActions({
                postsFetch: 'post/postsFetch'
            }),
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
            changePage (page) {
                this.setPage(page)
                this.postsFetch();
            }
        },
        mounted () {
            this.postsFetch();
        },
        computed: {
            ...mapState({
                posts : state => state.post.posts,
                isPostsLoading: state => state.post.isPostsLoading,
                selectedSort: state => state.post.selectedSort,
                searchQuery: state => state.post.searchQuery,
                page: state => state.post.page,
                limit: state => state.post.limit,
                totalPage: state => state.post.totalPage,
                sortOptions: state => state.post.sortOptions,
            }),
            ...mapGetters({
                sortedPost: 'post/sortedPost',
                sortedAndSearchedPost: 'post/sortedAndSearchedPost',
            })
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