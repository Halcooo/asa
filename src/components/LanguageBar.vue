<template lang="">
  
    <div class="container wrapper language display">
      <img
        class=""
        :src="lang.src"
        :alt="lang.abr"
        v-for="lang in languages"
        :key="lang"
        @click="translatePage(lang)"
      />
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
img {
  width: 23px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  margin-right: 12px;
}
.wrapper{
  display:flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}
.display {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
