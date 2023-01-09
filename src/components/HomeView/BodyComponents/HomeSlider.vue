<template>
  <div class="w-100 text-center">
    <h1>Reference</h1>
    <div class="container">
      <BaseSlider :images="images" />
    </div>
    <p class="mt-5 pt-5 container">
      {{ $t("reference") }}
    </p>
  </div>
</template>
<script>
import BaseSlider from "@/components/Sliders/BaseSlider.vue";
export default {
  name: "HomeSlider",
  components: { BaseSlider },
  data() {
    return {
      images: [
        { id: 1, url: require("@/assets/images/asa-group-logo.png") },
        { id: 2, url: require("@/assets/images/prevent-logo.png") },
        { id: 3, url: require("@/assets/images/usaid-logo.jpg") },
        { id: 4, url: require("@/assets/images/zoi-logo.png") },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
h1 {
  color: rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important;
}
</style>
