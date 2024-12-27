<template>
    <section class="friends">
        <ul class="friends__list">
            <li v-for="user in friends" class="friends__item">
                <div class="friends__container">
                    <img
                        class="friends__image"
                        :src="user.photo_200_orig"
                        alt="imag"
                    />
                    <div class="friends__full-name-block">
                        <span class="friends__first-name">
                            {{ user.first_name }}
                        </span>
                        <span class="friends__last-name">
                            {{ user.last_name }}
                        </span>
                    </div>
                </div>
                <div class="friends__button">
                    <my-button class="open">добавить</my-button>
                    <my-button class="del">удалить</my-button>
                </div>
            </li>
        </ul>
    </section>
</template>

<script setup>
    import { defineProps } from 'vue';

    const { friends } = defineProps({ friends: Array });
</script>

<style lang="css" scoped>
    .friends {
        flex-direction: row;
    }

    .friends__list {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin: 0;
        padding: 0;
    }

    .friends__item {
        width: 100%;
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid var(--border-color);
        cursor: pointer;
        box-sizing: border-box;
    }
    @media screen and (max-width: 767px) {
        .friends__item {
            flex-direction: column;
            gap: 20px;
            align-items: center;
        }
    }

    .friends__item:hover {
        opacity: 0.6;
    }

    .friends__container {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    @media screen and (max-width: 767px) {
        .friends__container {
            flex-direction: column;
            gap: 10px;
            justify-content: center;
        }
    }

    .friends__image {
        background-color: transparent;
        border: none;
        border-radius: 50%;
        height: 50px;
        margin: 0 30px 0 0;
        padding: 0;
        width: 50px;
    }

    .friends__full-name-block {
        display: flex;
        flex-direction: row;
    }

    .friends__first-name {
        display: block;
        font-size: 15px;
        color: var(--text);
    }

    .friends__full-name-block {
        display: flex;
        gap: 10px;
    }

    .friends__last-name {
        display: block;
        font-size: 15px;
        color: var(--text);
    }

    .friends__button {
        width: 300px;
        display: flex;
        flex-direction: row;
        gap: 5px;
    }
</style>
