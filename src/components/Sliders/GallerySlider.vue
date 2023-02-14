@author Halid Lihovac
<template>
  <Carousel :wrap-around="true" :items-to-show="1" v-model="currentSlide">
    <Slide v-for="slide in images" :key="slide.id">
      <div class="carousel__item">
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
      <Navigation></Navigation>
      <Pagination></Pagination>
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
<style lang="scss">
.carousel__pagination {
  position: absolute;
  bottom: 5%;
  width: 100%;
  border-radius: 50%;

  li {
    button {
      border-radius: 50%;
    }
  }
}
.slide-text {
  max-width: 800px;
}
.grabbed {
  cursor: grabbing !important;
}
@media screen and (max-width: 850px) {
  .carousel__item {
    height: 50vh !important;
  }
}
@media screen and (max-width: 600px) {
  h1 {
    font-size: 25px;
  }
  p {
    font-size: 17px !important;
  }
  .carousel__item {
    height: 40vh !important;
  }
}
.carousel__item {
  max-height: 80vh;
  width: 100%;
  color: white;
  border-radius: 8px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100% !important;
    cursor: grab;
  }
}

.carousel__icon {
  fill: #fff !important;
  color: #fff !important;
}
.carousel__icon:hover {
  scale: 1.1;
}
</style>
