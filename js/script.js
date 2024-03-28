import { slides } from "./data.js";
console.log(slides);

const { createApp } = Vue;
console.log(Vue);



const app = createApp({
    data() {
        return {
            slides: slides,
            activeSlide: 0,
            sliderAnimation: null,
            //stopSliderFlag: false,
        }
    },
    methods: {
        nextSlide() {
            this.activeSlide < this.slides.length - 1 ? this.activeSlide++ : this.activeSlide = 0;
        },
        prevSlide() {
            this.activeSlide > 0 ? this.activeSlide-- : this.activeSlide = this.slides.length - 1;
        },
        stopSlider() {
            clearInterval(this.sliderAnimation);
        },
        startSlider() {
            this.sliderAnimation = setInterval(() => {
                this.nextSlide();
            }, 2000);
        }


    },
    mounted() {
        this.startSlider();
    }
})


app.mount("#app")


