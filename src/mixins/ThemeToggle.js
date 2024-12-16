export default {
    watch: {
        checked (isChecked) {
            const el = document.documentElement;
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
    mounted() { 
        if (localStorage.nameTheme === 'dark' || localStorage.nameTheme === undefined) {
            this.checked = true;
        } else {
            this.checked = false;
        }
    }
}
