import axios from "axios";

export const postModule = {
    state: () => ({
            posts : [],
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
    }),
    getters: {
        sortedPost (state) {
            return [...state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))
        },
        sortedAndSearchedPost (state, getters) {
            return getters.sortedPost.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    mutation: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setLoading(state, bool) {
            state.isPostsLoading = bool;
        },
        setPage(state, page) {
            state.page = page;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        },
        setTotalPage(state, totalPage) {
            state.totalPage = totalPage;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        }
    },
    actions: {
        async postsFetch (context) {
            console.log(context)
            try {
                context.commit('setLoading', true, {root: true});
                let response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10', {
                    params: {
                        _page: context.state.page,
                        _limit: context.state.limit,
                    }
                });
                context.commit('setTotalPage', Math.ceil(response.headers['x-total-count']/context.state.limit), {root: true})
                context.commit('setPosts', response.data, {root: true});
            } catch (e) {
                console.log(e);
            }
            finally {
                context.commit('setLoading', false, {root: true});
            }
        }
    },
    namespaced: true
}
