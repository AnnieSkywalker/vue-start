import { createStore } from 'vuex';
import { authModule } from './authModule';
import { postsModule } from './postsModule';

export default createStore({
    modules: {
        posts: postsModule,
        auth: authModule,
    },
});
