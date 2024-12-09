<template>
    <footer id='footer' class='footer'>
            <div class="footer__container">
                <p class="footer__copyright">© 2024 Pet-Project</p>
                <p class="footer__discription">Пет-проект (pet — англ. «домашний питомец, любимец») — это проект, который разработчик делает для себя, в свободное от основной работы время. Это отличный способ попробовать новые технологии, развить свои навыки и просто убить время.</p>
            </div>
        </footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
    .footer {
        padding: 0 19px;
        width: 100%;
        max-width: calc(880px + 38px);
        display: flex;
        justify-content: flex-start;
        box-sizing: border-box;
        background: #0f0f0f;
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
        color: #999;
    }
    @media screen and (max-width: 767px)  {
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
        color: #999;
    }
</style>