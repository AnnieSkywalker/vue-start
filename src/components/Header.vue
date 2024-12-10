<template>
    <header id='header' class='header'>
        <div class="header__content">
            <my-logo-svg @click='$router.push("/")'></my-logo-svg>
            <app-navbar></app-navbar>
        </div>
    </header>
</template>

<script>
import AppNavbar from './Navbar.vue'
import MyLogoSvg from '../components/UI/Login.vue'

    export default {
        name: 'app-header',
        components: {
            AppNavbar, MyLogoSvg
        }
    }
</script>

<style lang="css" scoped>
#glasses

.header {
    padding: 25px 19px 0;
    width: 100%;
    max-width: calc(880px + 38px);
    box-sizing: border-box;
}

.header::after {
    content: '';
    display: block;
    width: 100%;
    border-bottom: 1px solid rgba(84, 84, 84, 0.7);
}

@media screen and (max-width: 767px)  {
    .header {
        padding: 28px 0 0;
    }
}

.header__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.header__image {
    display: block;
    height: 55px;
    padding: 20px;
    cursor: pointer;
}

@media screen and (max-width: 767px)  {
    .header__image {
        height: 50px;
        padding: 15px;
        padding-left: 27px;
    }
}
</style>
