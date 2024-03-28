import { slides } from "./data.js";
console.log(slides);

const { createApp } = Vue;
createApp({
    data() {
        return {
            slides: slides,
            activeSlide: 0,
        }
    },
    methods: {
        nextSlide() {
            console.log('next');
            this.activeSlide < this.slides.length - 1 ? this.activeSlide++ : this.activeSlide = 0;
        },
        prevSlide() {
            console.log('prev');
            this.activeSlide > 0 ? this.activeSlide-- : this.activeSlide = this.slides.length - 1;
        }
    },
    mounted() {
    }
}).mount("#app")