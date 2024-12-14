<template>
    <button class='myBtn'><slot></slot></button>
</template>

<script>
    export default {
        name: 'my-button',
    }
</script>

<style lang="css" scoped>
.myBtn {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #FFFFFF;
    box-sizing: border-box;
    border: 1px solid var(--border-color);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 14px 20px;
    gap: 10px;
    cursor: pointer;
    height: 50px;
    min-width: 150px;
    flex: none;
    flex-grow: 1;
}

.myBtn:hover {
    opacity: 0.6;
}

.myBtn.add {
    padding: 0;
    max-width: 875px;
    min-width: 150px;
    height: 50px;
    background: none;
    border: 1px solid var(--primary);
    border-radius: 2px;
    cursor: pointer;
}

.myBtn.open {
    color: var(--primary);
    border: 1px solid var(--primary);
    background: none;
    border-radius: 8px;
}

.myBtn.del {
    color: var(--text);
    background-color: var(--background-ui-el);
    border: 1px solid var(--border-color);
    border-radius: 6px;
}
</style>
