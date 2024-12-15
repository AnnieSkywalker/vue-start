<template>
    <label class="switch">
        <input type="checkbox" :checked='modelValue' @click="toggleCheckbox">
        <div class="slider round"></div>
    </label>
</template>
  
<script>
export default {
    props: {
        modelValue: {
            type: Boolean,
            required: true,
        }
    },
    methods: {
        toggleCheckbox() {
            this.$emit('update:modelValue', event.target.checked)
        },
    },
}
</script>
  
<style scoped>
.switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    margin: 10px;
    caret-color: transparent;
    cursor: none;
}

.switch::after {
    content: '';
    display: block;
    width: 30px;
    position: absolute;
    top: 9px;
    right: 35px;
    border-top: 1px solid var(--border-color);
    transform: rotate(90deg)
}

.switch input {
  display: none;
  caret-color: transparent;
  cursor: none;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--primary);
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

.slider:before {
    position: absolute;
    content: '';
    height: 14px;
    width: 14px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

input:checked + .slider {
    background-color: var(--primary);
}

input:focus + .slider {
    box-shadow: 0 0 1px #101010;
}

input:checked + .slider:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
}

.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>
