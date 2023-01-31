<template>
  <div class="wrapper" data-aos="fade-in">
    <div class="wrapper-div">
      <h3>{{ $t("contact") }}</h3>
    </div>
  </div>
  <ContactForm />
</template>
<script>
import ContactForm from "@/components/ContactView/ContactForm.vue";
import AboutMap from "@/components/AboutView/AboutMap.vue";
export default {
  components: {
    ContactForm,
    AboutMap,
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  background: linear-gradient(
      315deg,
      rgba(43, 67, 101, 0.669),
      rgba(66, 70, 120, 0.645),
      rgba(225, 173, 1, 0.59)
    ),
    url("@/assets/images/office.jpg") no-repeat center center/cover;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper-div {
    text-align: center;
  }
  h3 {
    color: white;
  }
}
</style>
