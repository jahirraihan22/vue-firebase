const app = Vue.createApp({
    data() {
        return {
            vehicles: [
                { type: "bike", model: "R 15", manufanturer: "Yamaha", image: "assets/1.png" },
                { type: "car", model: "Premio", manufanturer: "Toyota", image: "assets/2.jpg" },
                { type: "bike", model: "GSX", manufanturer: "Suzuki", image: "assets/3.png" },
                { type: "bike", model: "Exmotion", manufanturer: "Honda", image: "assets/4.jpg" },
            ],
            x: 0,
            y: 0,
            url: "https://johirraihan.com"
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