@author Halid Lihovac
<template>
  <Carousel :wrap-around="true" :items-to-show="1" v-model="currentSlide">
    <Slide v-for="slide in images" :key="slide.id">
      <div class="carousel__item">
        <div class="overlay">
          <div>
            <h1>{{ $t(slide.name) }}</h1>
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
      <Pagination />
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
      imena: "",
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
<style lang="scss" scoped>
h1 {
  font-size: 40px;
  color: white;
  margin-bottom: 5%;
}
.carousel__pagination {
  position: absolute;
  bottom: 5%;
  width: 100%;
  border-radius: 50%;

  li {
    background-color: white !important;
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
  height: 80vh;
  width: 100%;
  color: white;
  border-radius: 8px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .overlay {
    position: absolute;
    width: 100%;

    height: 100%;
    background-color: rgba(8, 40, 67, 0.422);
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      p {
        font-size: 30px;
      }
    }
  }
  img {
    width: 100% !important;
    height: 100%;
    cursor: grab;
  }
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
