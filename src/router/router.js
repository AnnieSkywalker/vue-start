import About from '@/pages/About.vue';
import Login from '@/pages/Login.vue';
import PostPage from '@/pages/PostPage.vue';
import PostsPage from '@/pages/PostsPage.vue';
import PostsPageWithStore from '@/pages/PostsPageWithStore.vue';
import VkPage from '@/pages/VkPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: PostsPage,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/posts',
        component: PostsPage,
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
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
});

export default router;
