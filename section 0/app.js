const app = Vue.createApp({
    data() {
        return {
            show: false,
            btnText: 'show',
            title: 'The Holy Qur\'an',
            owner: 'ALLAH Almighty',
            messenger: 'Prophet Muhammad (PBUH)'
        }
    },
    methods: {
        toggleShow() {
            this.show = !this.show;
            this.btnText = this.show ? "hide" : "show";
        }
    },
})

app.mount('#app')