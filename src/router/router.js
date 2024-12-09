import PostsPage from "@/pages/PostsPage.vue";
import Main from "@/pages/Main.vue";
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/posts',
        component: PostsPage,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;