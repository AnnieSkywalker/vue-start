<template>
    <form @submit.prevent>
        <my-input
            v-model="post.title"
            v-focus
            type="text"
            placeholder="название"
            class="input__margin-bottom"
        />
        <my-input
            v-model="post.body"
            type="text"
            placeholder="описание"
            class="input__margin-bottom"
        />
        <my-button
            class="add"
            @click="createPost"
        >
            <icon-base
                :width="22"
                :height="22"
                :iconName="iconName"
            >
            </icon-base>
        </my-button>
    </form>
</template>

<script setup>
    import { defineEmits, reactive } from 'vue';

    const iconName = 'plus';
    const emit = defineEmits({ create: 'create' });
    let post = reactive({ title: '', body: '' });

    const createPost = () => {
        post.id = Date.now();
        emit('create', post);
        post = {
            title: '',
            body: '',
        };
    };
</script>

<style lang="css" scoped>
    .input__margin-bottom {
        margin-bottom: 20px;
    }

    .myBtn {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        color: #ffffff;
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

    .myBtn.add {
        padding: 0;
        max-width: 875px;
        min-width: 150px;
        height: 50px;
        border: 2px solid var(--primary);
        border-radius: 2px;
        cursor: pointer;
    }
</style>
