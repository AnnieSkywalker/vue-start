<template>
    <div class="post">
        <div class="post__content">
            <span class="post__id">{{post.id}}</span>
            <div class="post__wrap">
                <h3 class="post__title">{{post.title}}</h3>
                <p class="post__body">{{post.body}}</p>
            </div>
        </div>
        <div class="post__btn">
            <my-button :myClass='open'>Открыть</my-button>
            <my-button :myClass='del'>Удалить</my-button>
        </div>
    </div>
</template>



<script>
    export default {
        props: {
            post: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="css" scoped>
.post {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 24px;
    gap: 30px;
    background: #1A1A1A;
    border: 1px solid #262626;
    border-radius: 10px;
    margin-bottom: 10px;
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
    color: #999;
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
    color: #999;
    margin-right: 20px;
}

.post__title {
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    color: #fff;
}
.post__btn {
    display: flex;
    gap: 10px;
}
</style>