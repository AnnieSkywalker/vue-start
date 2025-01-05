<template>
    <div>
        <section class="management">
            <my-button class="add" @click="showVisible">
                <icon-base :width="22" :height="22" :iconName="iconName">
                </icon-base>
            </my-button>

            <my-input
                :model-value="searchQuery"
                @update:modelValue="setSearchQuery"
                placeholder="поиск..."
            ></my-input>

            <my-select
                :model-value="selectedSort"
                @update:modelValue="setSelectedSort"
                :options="sortOptions"
            ></my-select>
        </section>

        <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost" />
        </my-dialog>

        <post-list
            v-if="!isPostsLoading"
            :posts="sortedAndSearchedPost"
            @remove="removePost"
        />
        <my-loader v-else></my-loader>

        <my-pagination
            :totalPage="totalPage"
            :page="page"
            @changePage="changePage"
        ></my-pagination>
    </div>
</template>

<script setup>
    import PostForm from '@/components/PostForm.vue';
    import PostList from '@/components/PostList.vue';
    import { computed, onMounted, ref } from 'vue';
    import { useStore } from 'vuex';

    let dialogVisible = ref(false);
    const iconName = 'plus';
    const store = useStore();

    const postsFetch = () => store.dispatch('posts/postsFetch');

    onMounted(() => postsFetch());

    const posts = computed(() => store.state.posts.posts);
    const isPostsLoading = computed(() => store.state.posts.isPostsLoading);
    const selectedSort = computed(() => store.state.posts.selectedSort);
    const searchQuery = computed(() => store.state.posts.searchQuery);
    const page = computed(() => store.state.posts.page);
    const limit = computed(() => store.state.posts.limit);
    const totalPage = computed(() => store.state.posts.totalPage);
    const sortOptions = computed(() => store.state.posts.sortOptions);

    const sortedPost = computed(() => store.getters['posts/sortedPost']);
    const sortedAndSearchedPost = computed(
        () => store.getters['posts/sortedAndSearchedPost'],
    );

    const setPage = payload => store.commit('posts/setPage', payload);
    const setPosts = payload => store.commit('posts/setPosts', payload);
    const setSearchQuery = payload =>
        store.commit('posts/setSearchQuery', payload);
    const setSelectedSort = payload =>
        store.commit('posts/setSelectedSort', payload);

    function createPost(post) {
        posts.value.push(post);
        dialogVisible.value = false;
    }

    function removePost(post) {
        return store.dispatch('posts/removePost', post);
    }

    function showVisible() {
        dialogVisible.value = true;
    }

    function changePage(page) {
        setPage(page);
        postsFetch();
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
