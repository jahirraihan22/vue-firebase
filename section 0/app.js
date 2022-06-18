const app = Vue.createApp({
    data() {
        return {
            // show: false,
            // btnText: 'show',
            // title: 'The Holy Qur\'an',
            // owner: 'ALLAH Almighty',
            // messenger: 'Prophet Muhammad (PBUH)',
            x: 0,
            y: 0
        }
    },
    methods: {
        // toggleShow() {
        //     this.show = !this.show;
        //     this.btnText = this.show ? "hide" : "show";
        // },
        handleMouseEvent(e, param) {
            console.log(e)
            console.log(param)
        },
        handlemousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    },
})

app.mount('#app')