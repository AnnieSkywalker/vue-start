<template>
    <div class='navbar'>
        <div class='navbar__links'>
            <router-link class='navbar__link' to ='/posts'>posts</router-link>
            <router-link class='navbar__link' to ="/about">about</router-link>
            <basic-toggle-switch :check='check' @setCheckboxVal='checked'/>
        </div>
    </div>
</template>

<script>
import BasicToggleSwitch from './UI/BasicToggleSwitch.vue';
export default {
    components: {
        BasicToggleSwitch,
    },
    date () {
        return {
            check: false,
        }
    },
    methods: {
        checked (event) {
            this.check = event;
            this.toggleTheme(this.check)
        },
        toggleTheme(e) {
            const el = document.body;

            if (el.classList.contains("red")) {
                el.classList.remove('red');
                el.classList.add('teal');
            } else {
                el.classList.remove('teal');
                el.classList.add('red');
            }
        }
    }
}
</script>

<style lang="css" scoped>
.navbar {
    border: 3px solid var(--border-color);
    border-radius: 10px;
    padding: 8px 8px 8px 30px;
    background: var(--background-navbar);
    margin-right: 20px;
}

.navbar__links {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 5px;
}

.navbar__links .MuiSwitch-root {
    border-left: solid 3px var(--border-color);
}
.navbar__link {
    display: block;
    font-weight: 400;
    font-size: 14px;
    color: var(--text);
    padding: 12px 16px;
    text-decoration: none;
}

.navbar__link:hover {
    color: var(--text-hover);
}
</style>
