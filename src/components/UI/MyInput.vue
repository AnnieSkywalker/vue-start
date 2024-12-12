<template>
    <input :value='modelValue' @input='updateInput' class='myInput' type="text">
</template>

<script>
    export default {
        name: 'my-input',
        props: {
            modelValue: [String, Number],
        },
        methods: {
            updateInput (event) {
                this.$emit('update:modelValue', event.target.value)
            }
        }
        
    }
</script>

<style lang="css" scoped>
.myInput {
    width: 100%;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    padding: 16px;
    background: #141414;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #fff;
    outline:none;
}
 
.myInput::placeholder {
    color: var(--text);
}

input:focus {
    background: #333333;
}

</style>