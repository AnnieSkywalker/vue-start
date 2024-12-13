<template>
    <div class='post-page'>
            <h2 class='post-page__id'>Пост {{ postId = $route.params.id }}</h2>
            <div class='post' v-if='!isPostLoading'>
                <div class="post__content">
                    <div class="post__wrap">
                        <h3 class="post-page__title post__title">{{post.title}}</h3>
                        <p class="post-page__body post__body">{{post.body}}</p>
                    </div>
                </div>
            </div>
            <my-loader v-else></my-loader>
        </div>
</template>

<script>
import axios from 'axios';

    export default {
        name: 'post-page',
        data () {
            return {
                isPostLoading: false,
                postId: '',
                post: '',
            }
        },
        methods: {
            async postFetch () {
                try {
                    this.isPostLoading = true;
                    let response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + this.postId);
                    this.post = response.data;
                } catch (e) {
                    console.log(e);
                }
                finally {
                    this.isPostLoading = false;
                }
            }
        },
        mounted () {
            this.postFetch();
        },
    }
</script>

<style lang="css" scoped>
.post-page__title {
    font-size: 25px;
    color: var(--text-title)
}

.post-page__id {
    font-size: 40px;
    margin: 10px 0;
    color: var(--text-subTitle);
}

.post-page__body {
    font-size: 20px;
    display: block;
    -webkit-line-clamp: 0;
    color: var(--text);
}
</style>
