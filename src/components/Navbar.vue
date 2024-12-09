<template>
    <div class='navbar'>
        <div class='navbar__links'>
            <router-link class='navbar__link' to ='/posts'>posts</router-link>
            <router-link class='navbar__link' to ="/about">about</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app-navbar'
        
    }
</script>

<style lang="css" scoped>
.navbar {
    border: 3px solid #333;
    border-radius: 10px;
    padding: 8px 8px 8px 30px;
    background: #0f0f0f;
    margin-right: 20px;
}

.navbar__links {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 5px;
}

.navbar__links .MuiSwitch-root {
    border-left: solid 3px #333;
}
.navbar__link {
    display: block;
    font-weight: 400;
    font-size: 14px;
    color: #bfbfbf;
    padding: 12px 16px;
    text-decoration: none;
}

.navbar__link:hover {
    color: #fff;
}
</style>
