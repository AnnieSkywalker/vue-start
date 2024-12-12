<template>
    <form @submit.prevent>
        <my-input 
            v-model='post.title'
            type="text" 
            placeholder='название'
            class='input__margin-bottom'
        />
        <my-input 
            v-model='post.body'
            type="text" 
            placeholder='описание'
            class='input__margin-bottom'
        />
        <my-button class='add' @click='createPost'></my-button>
    </form>
</template>

<script>
    export default {
        data () {
            return {
                post: {
                    title: '',
                    body: ''
                }
            }
        },
        methods: {
            createPost(){
                this.post.id = Date.now();
                this.$emit('create', this.post)
                this.post = {
                    title: '',
                    body: ''
                }
            }
        }
    }
</script>

<style lang="css" scoped>
.input__margin-bottom {
    margin-bottom: 20px;
}

.myBtn {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #FFFFFF;
    box-sizing: border-box;
    border: 1px solid var(--border-color);
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

.myBtn.add {
    padding: 0;
    max-width: 875px;
    min-width: 150px;
    height: 50px;
    background: none;
    background-image: url(../../src/images/plus.svg);
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    border: 2px solid var(--primary);
    border-radius: 2px;
    cursor: pointer;
}
</style>
