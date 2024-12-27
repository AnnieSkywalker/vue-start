<template>
    <div className="profile">
        <div class="profile__content">
            <div class="profile__avatar-block">
                <img
                    class="profile__avatar"
                    src="../images/avka.png"
                    alt="Аватар"
                />
            </div>
            <div class="profile__description">
                <h2 class="section-title profile__section-title">
                    Привет, меня зовут Андрей
                </h2>
                <p class="profile__text">
                    Я Frontend-разработчик. Занимаюсь веб-разработкой с 2019
                    года. Более подробно обо мне можно узнать перейдя по
                    ссылкам.
                </p>
            </div>
        </div>
        <div className="profile__links">
            <my-social-block :options="options"> </my-social-block>
        </div>
    </div>
</template>

<script setup>
    import { SocialProfileConfig } from '../utils/constants';
    import MySocialBlock from './UI/MySocialBlock.vue';

    const options = SocialProfileConfig;
</script>

<style lang="css" scoped>
    .profile {
        display: flex;
        flex-direction: column;
    }

    @media screen and (max-width: 767px) {
        .profile {
            padding-top: 15px;
            grid-template-columns: 100%;
            grid-template-rows: max-content;
            column-gap: 0;
            justify-items: center;
        }
    }

    .profile__section-title {
        text-align: start;
        width: 60%;
        font-size: 24px;
        color: var(--text-title);
    }

    @media screen and (max-width: 767px) {
        .profile__section-title {
            width: 100%;
            text-align: center;
        }
    }

    .profile__text {
        width: 80%;
        font-size: 15px;
        line-height: 150%;
        color: var(--text);
    }

    @media screen and (max-width: 767px) {
        .profile__text {
            width: 100%;
            text-align: center;
        }
    }

    .profile__links {
        padding-top: 10px;
        display: flex;
        flex-direction: row-reverse;
        gap: 20px;
    }

    @media screen and (max-width: 767px) {
        .profile__links {
            flex-direction: row;
            justify-content: center;
        }
    }

    .profile__description {
        display: flex;
        flex-direction: column;
    }

    .profile__content {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    @media screen and (max-width: 767px) {
        .profile__content {
            flex-direction: column;
            grid-template-columns: 100%;
            grid-template-rows: max-content;
            column-gap: 0;
            justify-items: center;
        }
    }

    .profile__avatar-block {
        background-color: transparent;
        border: none;
        border-radius: 50%;
        height: 120px;
        margin: 0 30px 0 0;
        padding: 0;
        width: 120px;
    }

    @media screen and (max-width: 767px) {
        .profile__avatar-block {
            margin: 0;
        }
    }

    .profile__avatar {
        border-radius: 50%;
        box-sizing: border-box;
        height: 120px;
        -o-object-fit: cover;
        object-fit: cover;
        position: relative;
        width: 120px;
    }
</style>
