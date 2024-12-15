<template>
    <div class='navbar'>
        <div class='navbar__links'>
            <router-link class='navbar__link' to ='/posts'>posts</router-link>
            <router-link class='navbar__link' to ="/about">about</router-link>
            <basic-toggle-switch v-model="checked"/>
        </div>
    </div>
</template>

<script>
import BasicToggleSwitch from './UI/BasicToggleSwitch.vue';
export default {
    components: {
        BasicToggleSwitch,
    },
    data () {
        return {
            checked: true,
        }
    },
    watch: {
        checked: {
            handler(isChecked) {
                const el = document.body;
                if(!isChecked) {
                    el.classList.remove('dark');
                    el.classList.add('lite');
                    localStorage.setItem('nameTheme', 'lite');
                } else {
                    el.classList.remove('lite');
                    el.classList.add('dark');
                    localStorage.setItem('nameTheme', 'dark');
                }
            },
        },
    },
    mounted() { 
        if (localStorage.nameTheme === 'dark' || localStorage.nameTheme === undefined) {
            this.checked = true;
        } else {
            this.checked = false;
        }
    }
}
</script>

<style lang="css" scoped>
.navbar {
    padding: 8px 8px 8px 30px;
    margin-right: 20px;
}

.navbar__links {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 5px;
}

.navbar__links .MuiSwitch-root {
    border-left: solid 3px var(--border-color);
}
.navbar__link {
    display: block;
    font-weight: 400;
    font-size: 14px;
    color: var(--primary);
    padding: 12px 16px;
    text-decoration: none;
}

.navbar__link:hover {
    color: var(--hover);
}
</style>
