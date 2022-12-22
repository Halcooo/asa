<template>
  <div class="w-100 text-center bg-light">
    <h1>Reference</h1>
    <div class="container">
      <BaseSlider :images="images" />
    </div>
    <p class="mt-5 mb-5 pt-5 container">
      U dosadašnjem poslovanju svoje poslovno povjerenje iskazalo nam je preko
      100 međunarodnih i domaćih klijenata (ASA Prevent grupacija, Prevent Halog
      Slovenija, diplomatska predstavništva, KJP ZOI 84 ocs d.o.o. i dr ). Jedna
      od naših referenci je i dugogodišnja, na obostrano zadovoljstvo,
      kvalitetna poslovna saradnja sa USAID Bosna i Hercegovina za koje
      obavljamo usluge skladištenja, transportne usluge, selidbe, pakovanje,
      manipulaciju utovara i istovara, organizovanje prodajne aukcije u našim
      skladišnim prostorima, a po veoma povoljnim finansijskim uslovima.
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
        // { id: 5, url: require("@/assets/images/dresscode-logo.png") },
        // { id: 6, url: require("@/assets/images/tkt-logo.png") },
        // { id: 7, url: require("@/assets/images/Savent.png") },
        // { id: 9, url: require("@/assets/images/Maxuz.png") },
        // { id: 10, url: require("@/assets/images/Itrade.png") },
        // { id: 11, url: require("@/assets/images/Gradiz.jpg") },
        // { id: 12, url: require("@/assets/images/Putovaobih.png") },
        // { id: 13, url: require("@/assets/images/ApDigital.jpg") },
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
