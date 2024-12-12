<template>
    <div>
        <my-section class='section__margin'>
            <project-description></project-description>
        </my-section>
        <my-section class='section__margin'>
            <profile></profile>
        </my-section>
    </div>
</template>

<script>
import ProjectDescription from '@/components/ProjectDescription.vue';
import Profile from '@/components/Profile.vue';

export default {
    name: "About",
    components: {
        ProjectDescription, Profile
    }
}
</script>

<style lang="css" scoped>
.section__margin {
    margin-top: 20px;
}

.techniques {
    width: 80%;
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.techniques__section-title {
  margin: 0;
  text-align: center;
  color: var(--text-title)
}

.techniques__section-subtitle {
    margin: 20px 0 0;
    text-align: center;
}

</style>