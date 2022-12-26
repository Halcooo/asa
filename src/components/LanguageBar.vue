<template lang="">
  <div>
    <div class="container language display">
      <img
        class=""
        :src="lang.src"
        :alt="lang.abr"
        v-for="lang in languages"
        :key="lang"
        @click="translatePage(lang)"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "LanguageBar",
  data() {
    return {
      selected: "bs",
      languages: [
        {
          language: "Bosanski",
          abr: "bs",
          src: require("@/assets/svg/ba.svg"),
        },
        {
          language: "Engleski",
          abr: "en",
          src: require("@/assets/svg/gb.svg"),
        },
      ],
    };
  },
  methods: {
    translatePage(lang) {
      this.selected = lang.abr;
      this.language = lang.language;
      return (this.$i18n.locale = this.selected);
    },
  },
};
</script>

<style lang="scss" scoped>
img{
    width: 35px;
    cursor: pointer;
}
.display {
  display: flex;
  justify-content: center;
  align-items: center;
}



</style>
