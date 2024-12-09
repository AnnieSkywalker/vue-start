<template>
    <div class='main-container'>
        <header id='header' class='header'></header>
        <main id='main' class='content'>
            <div class='app'>
                <RouterView></RouterView>
            </div>
        </main>
        <main-footer></main-footer>
    </div>
</template>

<script>
import MainFooter from './components/MainFooter.vue';
import { RouterView } from 'vue-router';

    export default {
        components: MainFooter
    }
</script>


<style scoped>
</style>
