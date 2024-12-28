<template>
    <div class="post-page">
        <h2 class="post-page__id">Пост {{ postId = $route.params.id }}</h2>
        <div class="post" v-if="!isPostLoading">
            <div class="post__content">
                <div class="post__wrap">
                    <h3 class="post-page__title post__title">
                        {{ title }}
                    </h3>
                    <p class="post-page__body post__body">{{ body }}</p>
                </div>
            </div>
        </div>
        <my-loader v-else></my-loader>
    </div>
</template>

<script setup>
    import axios from 'axios';
    import { onMounted, ref } from 'vue';

    let postId = ref('');
    let title = ref('');
    let body = ref('');
    let isPostLoading = ref(false);

    onMounted(async () => {
        try {
            isPostLoading.value = true;
            let response = await axios.get(
                'https://jsonplaceholder.typicode.com/posts/' + postId.value,
            );
            title.value = response.data.title;
            body.value = response.data.body;
        } catch (e) {
            console.log(e);
        } finally {
            isPostLoading.value = false;
        }
    });
</script>

<style lang="css" scoped>
    .post-page__title {
        font-size: 25px;
        color: var(--text-title);
    }

    .post-page__id {
        font-size: 40px;
        margin: 10px 0;
        color: var(--text-lite);
    }

    .post-page__body {
        font-size: 20px;
        display: block;
        -webkit-line-clamp: 0;
        color: var(--text);
    }
</style>
