@author Halid Lihovac
<template>
  <div class="landing-page" style="position: relative; z-index: 1">
    <div class="circle-1"></div>
    <div class="circle-2"></div>
    <div class="div">
      <div>
        <div class="head-1">
          <h2>
            {{ $t("header_text") }}
          </h2>
        </div>
        <div class="head-2">
          <p class="text-warning">ASA Šped</p>

          <small>
            {{ $t("header_secondary_text") }}
          </small>
        </div>

        <div
          class="d-inline-flex justify-content-center align-items-center down-button"
          @click="scrollDown()"
        >
          <font-awesome-icon icon="fa-solid fa-chevron-down" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BaseButton from "@/components/Forms/buttons/BaseButton.vue";

export default {
  name: "HeaderHome",
  components: {
    BaseButton,
  },
  data() {
    return {
      routes: { route: "/contact", name: "presentation" },
    };
  },
  methods: {
    scrollDown() {
      window.scrollTo(0, 720);
    },
  },
  mounted() {
    window.addEventListener("scroll", (e) => {});
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/variables.scss";
@keyframes backgroundFade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.down-button {
  padding: 20px;
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid white;
  transform: translate(0%, 150%);
  cursor: pointer;
  font-size: 30px;
  color: white;
  &:hover {
    opacity: 0.7;
    border: 1px solid orange;
    color:orange;
  }
}
.landing-page {
  width: 100%;
  height: 89vh;
  @media screen and (max-width: 567px) {
    padding-top: 5%;
    height: 85vh;
    text-align: left;
  }
  background: linear-gradient(
      315deg,
      rgba(80, 99, 134, 0.103),
      rgba(42, 46, 103, 0.552),
      rgba(225, 173, 1, 0.59)
    ),
    url("@/assets/images/asa-head-cover.jpg") no-repeat center center/cover;

  animation: backgroundFade 0.5s ease-in;
  .background {
    height: 500px;
    margin-top: 0%;
    border-radius: 2px;
  }
  .div {
    display: flex;
    justify-content: center;
    width: 70%;
    text-align: center;
    gap: 200px;
    height: 100%;
    margin: auto;
    padding-top: 15%;

    h2 {
      font-size: 30px;
      color: white;
      margin: 0;
      padding: 0;
    }

    .head-2 {
      color: white;
      margin: 2% 0%;

      p {
        font-size: 30px;
      }
      small {
        display: block;
        width: 80%;
        font-size: 16px;
        margin: auto;
      }
    }

    .head-3 {
      padding-top: 10%;
    }
    @media screen and (max-width: 567px) {
      width: 100%;
      justify-content: center;

      padding-left: 1%;
      padding-top: 30%;

      .head-1,
      .head-2 {
        text-align: left;
      }
      .head-2 {
        small {
          width: 100%;
        }
      }
      .head-3 {
        text-align: center;
        padding-top: 2%;
      }
      h1 {
        font-size: 50px;
      }
      .background {
        display: none;
      }
    }
  }
}

.nav {
  height: 80px;
  background-color: rgb(247, 247, 247);
  display: none;
  .middle {
    width: 75%;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      width: 40%;
      height: 100%;
      padding-left: 0%;
      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        li {
          padding: 20px 40px;
          // border-radius: 2px;
          color: rgb(117, 117, 117);
          transition: 0.2s;
          &:hover {
            // background-color: gray;
            color: white;
            cursor: pointer;
          }
        }
      }
    }

    .right {
      width: 20%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
      padding-right: 1%;
      a {
        padding: 20px 40px;
        border: 1px solid gray;
        border-radius: 50px;
        color: gray;
        transition: 0.3s;
        &:hover {
          background-color: gray;
          color: white;
        }
      }
    }
  }
  @media screen and (max-width: 567px) {
    height: 140px;
    padding: 10px 0px;

    .middle {
      width: 100%;
      gap: 20px;
      flex-direction: column;

      .left {
        width: 100%;
        padding-left: 0%;

        ul {
          justify-content: center;
          gap: 40px;
          margin: 0;
          padding: 0;
          li {
            padding: 0px;
          }
        }
      }
      .right {
        width: 100%;
      }
    }
  }
}

.circle-1 {
  width: 450px;
  height: 500px;
  border: 20px solid rgba(255, 255, 255, 0.107);
  // border-radius: 50%;
  position: absolute;
  top: 20%;
  left: 23%;
  @media screen and (max-width: 567px) {
    width: 90vw;
    left: 0%;
    // border: none;
  }
}
</style>
