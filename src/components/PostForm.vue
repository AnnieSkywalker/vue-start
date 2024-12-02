<template>
    <form @submit.prevent>
        <input 
            v-model='post.title'
            type="text" 
            class='myInput' 
            placeholder='название'
        >
        <input 
            v-model='post.body'
            type="text" 
            class='myInput' 
            placeholder='описание'
        >
        <button @click='createPost' class='myBtn add'></button>
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
.myInput {
    width: 100%;
    border: 1px solid #262626;
    border-radius: 6px;
    padding: 16px;
    background: #141414;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #fff;
    outline:none;
    margin-bottom: 15px;
}

.myInput::placeholder {
    color: #999;
}

input:focus {
    background: #333333;
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
    border: 2px solid #ff3333;
    border-radius: 2px;
    cursor: pointer;
}
</style>
