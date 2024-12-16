// import PostsPage from "@/pages/PostsPage.vue";
import About from "@/pages/About.vue";
import PostPage from "@/pages/PostPage.vue"
import { createRouter, createWebHistory } from "vue-router"
import PostsPageWithStore from "@/pages/PostsPageWithStore.vue";

const routes = [
    // {
    //     path: '/',
    //     component: PostsPage,
    // },
    // {
    //     path: '/posts',
    //     component: PostsPage,
    // },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/posts/:id',
        component: PostPage,
    },
    {
        path: '/store',
        component: PostsPageWithStore,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;