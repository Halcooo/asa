<template>
  <AboutVue />
  <AboutNext />
  <AboutVideo />
   <AboutNums /> 
</template>
<script>
import AboutVue from "@/components/AboutView/About.vue";
import AboutNext from "@/components/AboutView/AboutNext.vue";
import AboutNums from "@/components/AboutView/AboutNums.vue";
import AboutMap from "@/components/AboutView/AboutMap.vue";
import AboutVideo from "@/components/AboutView/AboutVideo.vue";
export default {
  components: {
    AboutVue,
    AboutNext,
    AboutVideo,
    AboutNums,
    AboutMap,
  },
};
</script>
<style lang="scss" scoped></style>
