<template>
  <div class="header">
    <div>
      <h1>{{ $t("transport") }}</h1>
    </div>
  </div>
  <div class="content-news">
    <div>
      Svim našim klijentima pružamo usluge međunarodnog i domaćeg transporta, a
      specijalizirali smo se i u hitnoj distribuciji robe do kupaca unutar BiH.
      Pod usluge transporta podrazumijevamo: cestovni (sve vrste cestovnog
      transporta), <br />
      kontejnerski, <br />
      pomorski, <br />
      avio transport,<br />
      transport opasnih materija,<br />
      transport konfekcije,<br />
      vangabaritni transport,<br />
      zbirni,<br />
      door to door usluge. <br />
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
h1 {
  color: white;
}
</style>
