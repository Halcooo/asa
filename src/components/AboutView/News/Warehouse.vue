<template>
  <div class="header">
    <div>
      <h1>{{ $t("warehouse") }}</h1>
    </div>
  </div>
  <div class="content-news">
    ASA ŠPED d.o.o. raspolaže sa cca 20.000 m² zatvorenog skladišnog prostora
    pogodnog za skladištenje svih vrsta roba, kao i sa cca 30000 m² asfaltirane
    i zelene površine za perspektivni razvoj ili izgradnju potrebnih objekata.
    Posebno ističemo savremeno izgrađeni logistički centar u Rajlovcu pogodan za
    skladištenje svih vrsta roba. U pet skladišta čija ukupna površina iznosi
    20000 m2, na veliko zadovoljstvo naših klijenata, pružamo kompletne
    logističke usluge: skladištenje roba sa comparison and contrast
    manipulacijom utovara i istovara prepakiranje robe, sortiranje, distribucija
    na razne destinacije visoko regalno punjenje. Veliku pažnju posvećujemo
    osiguranju i bezbjednosti objekata i roba. Svi objekti su osigurani i
    policama osiguranja od svih mogućih rizika kao i roba koja je smještena.
    Također, svi objekti su pokriveni video nadzorom i 24 sata fizičkim
    obezbjeđenjem od strane certificirane ovlaštene agencije.
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
</style>
