const app = Vue.createApp({
    data() {
        return {
            vehicles: [
                { type: "bike", model: "R 15", manufanturer: "Yamaha" },
                { type: "car", model: "Premio", manufanturer: "Toyota" },
                { type: "bike", model: "GSX", manufanturer: "Suzuki" },
                { type: "car", model: "A 5", manufanturer: "Audi" },
                { type: "bike", model: "Exmotion", manufanturer: "Honda" },
            ],
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