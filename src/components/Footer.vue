<template>
    <footer id="footer" class="footer">
        <div class="footer__container">
            <p class="footer__copyright">© {{ date }} Pet-Project</p>
            <p class="footer__discription">
                Пет-проект (pet — англ. «домашний питомец, любимец») — это
                проект, который разработчик делает для себя, в свободное от
                основной работы время. Это отличный способ попробовать новые
                технологии, развить свои навыки и просто убить время. Страницы в
                разработке
                <span @click="$router.push('/page-vk')">page-vk</span>
            </p>
        </div>
    </footer>
</template>

<script setup>
    import { onMounted, ref } from 'vue';

    const date = ref(0);

    function getDate() {
        let xmas = new Date();
        date.value = xmas.getFullYear();
    }

    onMounted(() => {
        getDate();
    });
</script>

<style lang="css" scoped>
    .footer {
        padding: 0 19px;
        width: 100%;
        max-width: calc(880px + 38px);
        display: flex;
        justify-content: flex-start;
        box-sizing: border-box;
        background-color: var(--background-footer);
    }
    .footer__container {
        width: 100%;
    }
    .footer__copyright {
        margin: 0;
        padding: 67px 0 60px;
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        color: var(--text-title);
    }
    @media screen and (max-width: 767px) {
        .footer__copyright {
            padding: 48px 0 36px;
            font-size: 14px;
            line-height: 17px;
        }
    }
    .footer__discription {
        margin: 0;
        padding-bottom: 30px;
        font-size: 12px;
        font-weight: 400;
        line-height: 150%;
        color: var(--text);
    }
</style>
