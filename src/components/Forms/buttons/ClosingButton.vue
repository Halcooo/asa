<template>
  <div class="button_device">
    <div>
      <p class="x-one" :class="{ btn: btn }"></p>
      <p class="x-two" :class="{ btn: btn }"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClosingButton",
  props: ["btn", "map"],
};
</script>

<style lang="scss" scoped>
.button_device {
  margin-right: 5px;
  position: absolute;
  width: 100%;
  height: 100%;
  display: block;
  &:hover {
    cursor: pointer;
    opacity: .7;
  }
  div {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .x-one {
    width: 100%;
    padding: 1px;
    border-radius: 50%;
    background-color: #25435b;
    transform: rotate(45deg);
    position: absolute;
    top: 50%;
    left: 0;
  }
  .x-two {
    width: 100%;
    padding: 1px;
    border-radius: 50%;
    background-color: #25435b;
    transform: rotate(-45deg);
    position: absolute;
    top: 50%;
    left: 0;
  }
  @media screen and (max-width: 560px) {
    .sidenav-content {
      .button_device {
        left: 50%!important;
      }
    }
  }

  .btn {
    background-color: rgb(255, 255, 255);
    border-radius: 50px;
  }
}
</style>
