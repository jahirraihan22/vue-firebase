const app = Vue.createApp({
    data() {
        return {
            vehicles: [
                { type: "bike", model: "R 15", manufanturer: "Yamaha", image: "assets/1.png", isFav: true },
                { type: "car", model: "Premio", manufanturer: "Toyota", image: "assets/2.jpg", isFav: true },
                { type: "bike", model: "GSX", manufanturer: "Suzuki", image: "assets/3.png", isFav: false },
                { type: "bike", model: "Exmotion", manufanturer: "Honda", image: "assets/4.jpg", isFav: true },
                { type: "car", model: "Maruti", manufanturer: "MAruti Suzuki", image: "assets/4.jpg", isFav: false },
            ],
            x: 0,
            y: 0,
            url: "https://johirraihan.com"
        }
    },
    methods: {
        addToFav(vehicle) {
            vehicle.isFav = !vehicle.isFav;
        },
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