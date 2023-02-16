@author Halid Lihovac
<template>
  <div class="social-icons d-flex justify-center">
    <a href="https://www.facebook.com" target="blank" class="me-2 ms-2 text-reset  d-flex justify-content-center align-center ">
      <font-awesome-icon icon="fa-brands fa-facebook" size="2x" />
    </a>
    <a href="https://www.instagram.com" target="blank" class="me-2 ms-2 text-reset d-flex justify-center align-center">
      <font-awesome-icon icon="fa-brands fa-instagram" size="2x" />
    </a>
    <a href="https://www.linkedin.com" target="blank" class="me-2 ms-2 text-reset d-flex justify-center align-center">
      <font-awesome-icon icon="fa-brands fa-linkedin" size="2x" />
    </a>
  </div>
</template>
<script>
export default {
  name: "TheSocialIcons",
};
</script>
<style lang="scss" scoped>
@import "../styles/variables.scss";
a {
  text-decoration: none;
  margin: 0;
  padding: 0;
  svg {
    width: 20px;

    &:hover {
      color: orange;
      opacity: 0.9;
    }
  }
}
@keyframes tr {
  from {
    transform: translate(0%, -100%);
  }
  to {
    transform: translate(0%, 0%);
  }
}
</style>
