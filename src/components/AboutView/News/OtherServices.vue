<template>
  <div class="header">
    <div>
      <h1>{{ $t("other_services_h4") }}</h1>
    </div>
  </div>
  <div class="content-news">
    <!-- <div v-for="chip in chips" class="chip">
      {{ chip.chip }}
    </div> -->

    <div>
      <p>{{ $t("other_services_p1") }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "OtherServices",
  data() {
    return {
      chips: [{ chip: "#cloud-based" }, { chip: "#erp" }],
    };
  },
};
</script>
<style lang="scss" scoped>
h1 {
  color: white;
}
</style>
