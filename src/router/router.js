// import PostsPage from "@/pages/PostsPage.vue";
import About from "@/pages/About.vue";
import PostPage from "@/pages/PostPage.vue";
import VkPage from "@/pages/VkPage.vue";
import { createRouter, createWebHistory } from "vue-router"
import PostsPageWithStore from "@/pages/PostsPageWithStore.vue";
import Login from "@/pages/Login.vue"

const routes = [
    {
        path: '/',
        component: PostsPageWithStore,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/posts',
        component: PostsPageWithStore,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/posts/:id',
        component: PostPage,
    },
    {
        path: '/page-vk',
        component: VkPage,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;