<template>
    <div class="project-description">
        <div className="project-description__content">
            <h2 class="section-title project-description__title">
                Pet Project
            </h2>
            <p class="project-text">
                Сам проект одностраничное приложение(SPA).<br />
                Свёрстано по БЭМ с использованием технологий позволяющих делать
                сайт адаптивным и резиновым (@media - меди запросы, FLEX BOX)<br />
                vue делает приложение динамичным.<br />
                На данном этапе используется стороннее [API].<br />
            </p>
            <ul className="project-description__list">
                <li className="project-description__item">Vue</li>
                <li className="project-description__item">JavaScript</li>
                <li className="project-description__item">CSS</li>
                <li className="project-description__item">БЭМ</li>
            </ul>
        </div>
        <div className="project-description__links">
            <my-social-block :options="options"> </my-social-block>
        </div>
    </div>
</template>

<script setup>
    import { SocialProjectConfig } from '../utils/constants';
    import MySocialBlock from './UI/MySocialBlock.vue';

    const options = SocialProjectConfig;
</script>

<style lang="css" scoped>
    .project-description {
        width: 100%;
    }

    .project-description__title {
        text-align: start;
        width: 60%;
        font-size: 24px;
    }

    @media screen and (max-width: 767px) {
        .project-description__title {
            width: 100%;
            text-align: center;
        }
    }

    .project-text {
        width: 100%;
        font-size: 15px;
        line-height: 150%;
        color: var(--text);
    }

    @media screen and (max-width: 767px) {
        project-text {
            width: 100%;
            text-align: center;
        }
    }

    .project-description__item {
        font-weight: 500;
        font-size: 20px;
        line-height: 140%;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px;
        color: var(--text-lite);
    }

    .project-description__list {
        display: flex;
        flex-direction: row;
        gap: 10px;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
    }

    .project-description__links {
        padding-top: 10px;
        display: flex;
        flex-direction: row-reverse;
        gap: 20px;
    }

    @media screen and (max-width: 767px) {
        .project-description__links {
            flex-direction: row;
            justify-content: center;
        }
    }
</style>
