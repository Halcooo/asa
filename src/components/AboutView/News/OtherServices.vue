<template>
  <div class="header">
    <div>
      <h3>{{ $t("other_services_h4") }}</h3>
    </div>
  </div>
  <div class="content-news">
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
h3 {
  color: white;
}
</style>
