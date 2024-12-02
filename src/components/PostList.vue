<template>
    <div class="post" v-for='post in posts'>
        <div class="post__content">
            <span class="post__id">{{post.id}}</span>
            <div class="post__wrap">
                <h3 class="post__title">{{post.title}}</h3>
                <p class="post__body">{{post.body}}</p>
            </div>
        </div>
        <div class="post__btn">
            <button class='myBtn open' >Открыть</button> 
            <button class='myBtn del' >Удалить</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            posts: {
                type: Array,
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

.myBtn {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #FFFFFF;
    box-sizing: border-box;
    border: 1px solid #262626;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 14px 20px;
    gap: 10px;
    cursor: pointer;
    height: 50px;
    min-width: 150px;
    flex: none;
    flex-grow: 1;
}

.myBtn:hover {
    opacity: 0.6;
}

.myBtn.open {
    background: #ff3333;
    border-radius: 8px;
}

.myBtn.del {
    background: #141414;
    border: 1px solid #262626;
    border-radius: 6px;
}
</style>
