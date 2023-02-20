@author Halid Lihovac
<template>
  <Carousel :wrap-around="true" :items-to-show="1" v-model="currentSlide">
    <Slide v-for="slide in images" :key="slide.id">
      <div class="carousel__item">
        <div class="overlay">
          <div>
            <p class="slide-text">{{ $t(slide.text) }}</p>
          </div>
        </div>

        <img
          @mousedown="pressedMouse = true"
          @mouseup="pressedMouse = false"
          :class="{ grabbed: pressedMouse }"
          :src="slide.url"
          alt="logo"
          :id="slide.id"
        />
      </div>
    </Slide>
    <template #addons>
    </template>
  </Carousel>
</template>

<script>
import { Carousel, Pagination, Slide, Navigation } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default {
  props: ["images"],
  name: "ServicesSlider",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      pressedMouse: false,
      currentSlide: 0,
    };
  },
  watch: {
    currentSlide: function (val) {
      this.setCurrentSlide(val);
    },
  },
  methods: {
    setCurrentSlide(id) {
      this.$store.commit("setCurrentSlide", id);
    },
  },
  mounted() {
    this.setCurrentSlide(this.currentSlide);
  },
};
</script>
