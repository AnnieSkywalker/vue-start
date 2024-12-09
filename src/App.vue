<template>
    <div class='main-container'>
        <app-header></app-header>
        <main id='main' class='content'>
            <div class='app'>
                <RouterView></RouterView>
            </div>
        </main>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppFooter from './components/Footer.vue';
import AppHeader from './components/Header.vue'
import { RouterView } from 'vue-router';

export default {
    components: {
        AppFooter, AppHeader
    }
}
</script>

<style scoped>
</style>
