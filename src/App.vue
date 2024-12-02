<template>
    <button @click='addLiks'>like</button>
    <button @click='addDislike'>dislike</button>
    <div>
        <div>{{ like }}</div>
        <div>{{ dislike }}</div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            like: 0,
            dislike: 0,
        }
    },
    methods: {
        addLiks () {
            this.like += 1;

        },
        addDislike () {
            this.dislike += 1;
        }

    }
}

</script>

<style>

</style>
