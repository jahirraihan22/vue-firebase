const app = Vue.createApp({
    data() {
        return {
            title: 'The Holy Qur\'an',
            author: 'ALLAH Almighty',
            messenger: 'Prophet Muhammad (PBUH)'
        }
    },
    methods: {
        clickFunction() { 
            alert("I love Allah and his prophet Muhammad pbuh");
        }
    },
})

app.mount('#app')