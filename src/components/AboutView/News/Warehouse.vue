<template>
  <div class="header"
  data-aos="fade" data-aos-duration="1100">
    <div>
      <h1>{{ $t("warehouse") }}</h1>
    </div>
  </div>
  <div class="content-news">
    <p>
      {{ $t("warehouse_p1") }}
    </p>
    <p>
      {{ $t("warehouse_p2") }}
    </p>
    <p>
      {{ $t("warehouse_p3") }}
    </p>
    <ol>
      <li data-aos="fade-right" data-aos-duration="1100">{{ $t("warehouse_li1") }}</li>
      <li data-aos="fade-left" data-aos-duration="1100">{{ $t("warehouse_li2") }}</li>
      <li data-aos="fade-right" data-aos-duration="1100">{{ $t("warehouse_li3") }}</li>
      <li data-aos="fade-left" data-aos-duration="1100">{{ $t("warehouse_li4") }}</li>
      <li data-aos="fade-right" data-aos-duration="1100">{{ $t("warehouse_li5") }}</li>
      <li data-aos="fade-left" data-aos-duration="1100">{{ $t("warehouse_li6") }}</li>
    </ol>
    <p>{{ $t("warehouse_p4") }}</p>
    <p>{{ $t("warehouse_p5") }}</p>
  </div>
</template>
<script>
export default {
  name: "Warehouse",
  data() {
    return {
      chips: [
        { chip: "#software-development" },
        { chip: "#erp" },
        { chip: "#design" },
      ],

      content: [
        { p: "software_solutions_p1" },
        { p: "software_solutions_p2" },
        { p: "software_solutions_p3" },
        { p: "software_solutions_p4" },
        { p: "software_solutions_p5" },
        { p: "software_solutions_p6" },
        { p: "software_solutions_p7" },
        { p: "software_solutions_p8" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: white;
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
