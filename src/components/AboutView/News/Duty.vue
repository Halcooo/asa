<template>
  <div class="header">
    <div>
      <h3>{{ $t("duty") }}</h3>
    </div>
  </div>
  <div class="content-news">
    <!-- <div v-for="chip in chips" class="chip">
      {{ chip.chip }}
    </div> -->

    <div>
      <p>{{$t('duty_p1')}}</p></div>
  </div>
</template>
<script>
export default {
  name: "Duty",
  data() {
    return {
      chips: [{ chip: "#erp" }],
    };
  },
};
</script>
<style lang="scss" scoped>
h1 {
  color: white;
}
</style>
