<template>
    <section class='profile-vk'>
        <div class='profile-vk__avatar-block'>
            <img class='profile-vk__avatar' :src='href' alt="imag">
        </div>
        <span class='profile-vk__id'>{{ userId }}</span>
        <div class='profile-vk__full-name-block'>
            <span class='profile-vk__first-name' >
                {{ first_name }} 
            </span>
            <span class='profile-vk__last-name'>
                {{ last_name }}
            </span>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'profile-vk',
        props: {
            href: {
                type: String,
            },
            userId: {
                type: String,
            },
            first_name: {
                type: String
            },
            last_name: {
                type: String
            },
        }
    }
</script>

<style lang="css" scoped>

.profile-vk {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

@media screen and (max-width: 767px)  {
    .profile-vk {
        padding-top: 15px;
        grid-template-columns: 100%;
        grid-template-rows: max-content;
        column-gap: 0;
        justify-items: center;
    }
}

.profile-vk__avatar-block {
    background-color: transparent;
    border: none;
    border-radius: 50%;
    height: 120px;
    padding: 0;
    width: 120px;
}

.profile-vk__avatar {
    border-radius: 50%;
    box-sizing: border-box;
    height: 120px;
    -o-object-fit: cover;
    object-fit: cover;
    position: relative;
    width: 120px;
}

.profile-vk__full-name-block {
    display: flex;
    gap: 10px;
}

.profile-vk__first-name, .profile-vk__last-name {
    text-align: start;
    width: 60%;
    font-size: 24px;
    color: var(--text-title);
}
.profile-vk__id {
    font-size: 11px;
    line-height: 150%;
    color: var(--text);
}

</style>