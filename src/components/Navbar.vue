<template>
    <div class='navbar'>
        <div class='navbar__links'>
            <router-link class='navbar__link' to ='/posts'>posts</router-link>
            <router-link class='navbar__link' to ="/about">about</router-link>
            <basic-toggle-switch :checkedValue='checked' @setCheckboxVal='getChecked'/>
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
            nameTheme: 'dark',
        }
    },
    methods: {
        getChecked (val) {
            this.checked = val;
            const el = document.body;

            if(!val) {
                el.classList.remove('dark');
                el.classList.add('lite');
                localStorage.setItem('nameTheme', 'lite');
            } else {
                el.classList.remove('lite');
                el.classList.add('dark');
                localStorage.setItem('nameTheme', 'dark');
            }
        }
    },
    // mounted() {
    //     console.log(localStorage.getItem('theme'))
    //         let ls = localStorage.getItem('theme')
    //         if (ls  === 'dark' || ls === null) {
    //             return this.checkbox = true;
    //         } else {
    //             return this.checkbox = false;
    //         }
    // },
    mounted() {
        if (localStorage.nameTheme) {
            this.nameTheme = localStorage.nameTheme;
        }
    },
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
