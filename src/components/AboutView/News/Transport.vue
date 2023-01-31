<template>
  <div class="header" data-aos="fade">
    <div>
      <h3>{{ $t("transport") }}</h3>
    </div>
  </div>
  <div class="content-news">
    <div>
      <h4 data-aos="fade-down" data-aos-duration="1100">
        {{ $t("transport_heading") }}
      </h4>

      <hr />
      <ol>
        <li data-aos="fade-right" data-aos-duration="1100">
          {{ $t("container") }}
        </li>
        <li data-aos="fade-left" data-aos-duration="1100">
          {{ $t("maritime") }}
        </li>
        <li data-aos="fade-right" data-aos-duration="1100">
          {{ $t("air_transport") }}
        </li>
        <li data-aos="fade-left" data-aos-duration="1100">
          {{ $t("transport_of_dangerous_goods") }}
        </li>
        <li data-aos="fade-right" data-aos-duration="1100">
          {{ $t("transportation_of_clothing") }}
        </li>
        <li data-aos="fade-left" data-aos-duration="1100">
          {{ $t("oversized_transport") }}
        </li>
        <li data-aos="fade-right" data-aos-duration="1100">
          {{ $t("collective") }}
        </li>
        <li data-aos="fade-left" data-aos-duration="1100">
          {{ $t("door_to_door_services") }}
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
export default {
  name: "Transport",
  data() {
    return {
      chips: [{ chip: "#preduzetnistvo" }],
    };
  },
};
</script>
<style lang="scss" scoped>
h3 {
  color: white;
}
h4 {
  color: #666;
}
ol {
  list-style: none;
  padding: 0;
  margin: 0;
  counter-reset: list-counter;
  margin-bottom: 26px;
  margin-top: 18px;
}
li {
  padding: 0;
  position: relative;
  font-size: 16px;
  line-height: 24px;
  font-family: "adelle-sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  color: #666;
}
ol li {
  position: relative;
  padding-left: 35px;
  min-height: 24px;
  margin-top: 14px;
}
ol li:before {
  content: counter(list-counter, decimal);
  counter-increment: list-counter;
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  font-family: "adelle-sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  border-radius: 100%;
  color: #fff;
  background: #25435b;
}
</style>
