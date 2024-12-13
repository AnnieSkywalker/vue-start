<template>
        <div class='project-description'>
        <div className='project-description__content'>
            <h2 class='section-title project-description__title'>Pet Project</h2>
            <p class='section-subtitle project-description__subtitle'>
            Сам проект одностраничное приложение(SPA).<br/>
            Свёрстано по БЭМ с использованием технологий позволяющих делать сайт адаптивным и резиновым (@media - меди запросы, FLEX BOX)<br/>
            vue делает приложение динамичным.<br/>
            На данном этапе используется стороннее [API].<br/>
            </p>
            <ul className='project-description__list'>
                <li className='project-description__item'>
                    Vue
                </li>
                <li className='project-description__item'>
                    JavaScript
                </li>
                <li className='project-description__item'>
                    CSS
                </li>
                <li className='project-description__item'>
                    БЭМ
                </li>
            </ul>
        </div>
        <div className='project-description__links'>
            <my-social-block 
                :options='options'
            >
            </my-social-block>
        </div>
    </div>
</template>

<script>
import {SocialProjectConfig} from '../utils/constants'
import MySocialBlock from './UI/MySocialBlock.vue';
    export default {
        name: 'project-description',
        components: {
            MySocialBlock
        },
        data () {
            return {
                options: SocialProjectConfig,
            }
        },
    }
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
    .project-description__title  {
        width: 100%;
        text-align: center;
    }
}

.project-description__subtitle {
    width: 100%;
    font-size: 18px;
    color: var(--text-subTitle);
}

@media screen and (max-width: 767px) {
    project-description__subtitle {
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
    border-radius: 15px;
    padding: 10px;
}

.project-description__list {
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
    list-style-type:  none;
    padding: 0;
}

.project-description__links{
    padding-top: 10px;
    display: flex;
    flex-direction: row-reverse;
    gap: 20px;
}

@media screen and (max-width: 767px)  {
    .project-description__links {
        flex-direction: row;
        justify-content: center;
    }
}
</style>
