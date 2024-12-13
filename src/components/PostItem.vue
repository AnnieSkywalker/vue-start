<template>
    <my-section class="post"> 
        <div class="post__content">
            <span class="post__id">{{ index + 1 }}</span>
            <div class="post__wrap">
                <h3 class="post__title">{{post.title}}</h3>
                <p class="post__body">{{post.body}}</p>
            </div>
        </div>
        <div class="post__btn">
            <my-button class='open' @click='$router.push(`/posts/${post.id}`)'>Открыть</my-button>
            <my-button class='del' @click="$emit('remove', post)">Удалить</my-button>
        </div>
    </my-section>
</template>



<script>
    export default {
        props: {
            post: {
                type: Object,
                required: true
            },
            index: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="css" scoped>
.post {
    min-height: 245px;
    gap: 30px;
}

.post-enter {
    transform: translateX(-350px);
}

.post-enter-active {
    transform: translateX(0px);
    transition: all 500ms ease-in;
}

.post-exit {
    opacity: 1;
}

.post-exit-active {
    transform: translateX(-350px);
    transition: all 500ms ease-in;
}

.post__body {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: var(--text);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.post__content {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}
.post__id {
    font-weight: 600;
    font-size: 30px;
    line-height: 150%;
    color: var(--text-subTitle);
    margin-right: 20px;
}

.post__title {
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    color: var(--text-title);
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.post__btn {
    display: flex;
    gap: 10px;
}
</style>