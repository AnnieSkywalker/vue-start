<template>
    <svg xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        :aria-labelledby="iconName"
        viewBox="0 0 24 24"
        role="presentation">
        <title
            :id="iconName"
            lang="en">
                {{ iconName }} icon
        </title>
        <g class='icon-base__g'>
            <component :is='iconName'></component>
        </g>
    </svg>
</template>

<script>
    export default {
        name: 'icon-base',
        props: {
            iconName: {
                type: String,
                default: 'box'
            },
            width: {
                type: [Number, String],
                default: 15
            },
            height: {
                type: [Number, String],
                default: 15
            },
        }
    }
</script>

<style lang="css" scoped>
.icon-base__g {
    fill: var(--primary)
}
svg:hover .icon-base__g {
    fill: var(--hover)
}
</style>
