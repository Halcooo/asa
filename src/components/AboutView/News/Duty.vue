<template>
  <div class="header">
    <div>
      <h3>{{ $t("duty") }}</h3>
    </div>
  </div>
  <div class="content-news">
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
h3 {
  color: white;
}
</style>
