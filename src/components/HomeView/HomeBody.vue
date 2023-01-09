@author Halid Lihovac
<template>
  <div class="wrapper">
    <Widget />
    <!-- <CompanyIcons /> -->
    <!-- <Cube /> -->
    <!-- <Recension /> -->
    <HomeSlider data-aos="fade-up" data-aos-anchor-placement="center-bottom" />
  </div>
</template>
<script>
import Widget from "./BodyComponents/Widget.vue";
import CompanyIcons from "./BodyComponents/CompanyIcons.vue";
import Cube from "./BodyComponents/Cube.vue";
import HomeSlider from "./BodyComponents/HomeSlider.vue";

export default {
  name: "HomeBody",
  components: {
    Widget,
    CompanyIcons,
    Cube,

    HomeSlider,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/variables.scss";
</style>
