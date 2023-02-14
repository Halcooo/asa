<template>
  <div class="carousel-wrapper" data-aos="fade-in"></div>
  <div class="container-sm mt-4 mb-4"
  data-aos="flip-up">
    <GallerySlider :images="images"></GallerySlider>
  </div>
</template>
<script>
import GallerySlider from "@/components/Sliders/GallerySlider.vue";

export default {
  name: "GalleryView",
  components: { GallerySlider },
  data() {
    return {
      images: [
        {
          name: " ",
          url: require("@/assets/images/mockup.jpg"),
          text: "",
        },
        {
          name: "warehouse",
          url: require("@/assets/images/wms-header.jpg"),
          text: "warehouse_h4",
        },
        {
          name: "duty",
          url: require("@/assets/images/product_item_2.jpg"),
          text: "duty_h4",
        },

        {
          name: " ",
          url: require("@/assets/images/mockup1.jpg"),
          text: "",
        },
        {
          name: " ",
          url: require("@/assets/images/mockup-1.jpg"),
          text: "",
        },
        {
          name: " ",
          url: require("@/assets/images/mockup-2.jpg"),
          text: "",
        },
        {
          name: " ",
          url: require("@/assets/images/mockup-3.jpg"),
          text: "",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scooped>
.carousel-wrapper {
  width: 100%;
  height: 10vh;
  background: linear-gradient(
      315deg,
      rgba(43, 67, 101, 0.669),
      rgba(66, 70, 120, 0.645),
      rgba(225, 173, 1, 0.59)
    ),
    url("@/assets/images/asa-about.jpg") no-repeat center center/cover;
}
</style>
