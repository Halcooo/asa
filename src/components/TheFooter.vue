@author Halid Lihovac
<template>
  <div class="footer" data-aos="fade" data-aos-duration="1300">
    <!-- <div class="square"></div>
    <div class="circle"></div>
    <div class="round"></div> -->
    <footer class="text-center text-dark text-lg-start text-muted">
      <section class="d-flex justify-content-evenly">
        <div class="d-none d-md-block">
          <span>{{ $t("connect") }}</span>
        </div>
        <TheSocialIcons></TheSocialIcons>
      </section>
      <section>
        <div class="container text-md-start pb-5 mt-5">
          <div class="d-flex mt-3 main">
            <div class="col-md-3 mx-auto mb-4 text-center">
              <RouterLink to="/">
                <img src="../assets/images/asa-sped-logo.png" alt="asa-logo" />
              </RouterLink>

              <h6 class="text-uppercase fw-bold mb-4"></h6>
              <p class="ms-2">
                {{ $t("fast_and_secure") }}
              </p>
            </div>
            <div class="col-md-3 mx-auto mb-4 text-center">
              <RouterLink to="/services">
                <h6 class="text-uppercase fw-bold text-light mb-4">
                  ASA ŠPED Services
                </h6>
              </RouterLink>
              <router-link to="/transport">
                <p class="text-reset">
                  {{ $t("transport") }}
                </p></router-link
              >
              <router-link to="/warehouse">
                <p class="text-reset">
                  {{ $t("warehouse") }}
                </p>
              </router-link>
              <router-link to="/duty">
                <p class="text-reset">
                  {{ $t("duty") }}
                </p>
              </router-link>
              <router-link to="/gallery">
                <p class="text-reset">
                  {{ $t("gallery") }}
                </p></router-link
              >
            </div>
            <div class="col-md-3 mx-auto mb-md-0 mb-4 uppercase text-center">
              <RouterLink to="/contact">
                <h6 class="text-uppercase fw-bold text-light mb-4">
                  {{ $t("footer_contact") }}
                </h6>
              </RouterLink>
              <p>
                <font-awesome-icon icon="fa-solid fa-home" />
                {{ $t("address") }}: Rajlovačka bb, Sarajevo 71000
              </p>
              <p>
                <font-awesome-icon icon="fa-solid fa-envelope" />
                asa@nekimail.com
              </p>
              <p>
                <font-awesome-icon icon="fa-solid fa-phone" />
                +387 33 407-352
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  </div>
</template>
<script>
import TheSocialIcons from "./TheSocialIcons.vue";
export default {
  name: "TheFooter",
  components: {
    TheSocialIcons,
  },
  data() {
    return {
      selected: "bs",
      languages: [
        { language: "Bosanski", abr: "bs" },
        { language: "Engleski", abr: "en" },
        { language: "Njemački", abr: "de" },
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
.router-link-active{
  color:orange;
}
a:hover{
  color:orange;
}
@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

* {
  color: rgb(155, 155, 155);
  animation: fadeInAnimation 1s;
}

img {
  width: 170px;
  filter: brightness(0) invert(1);
}

@media screen and (max-width: 700px) {
  .main {
    flex-direction: column;
  }
}

.footer {
  // height: 30vh;
  // padding-top: 2%;
  padding: 10px 5px;
  background-color: rgb(5, 2, 36);
  position: relative;
  bottom: 0;

  @media screen and (max-width: 567px) {
    height: 100%;
  }

  // background: url("@/assets/images/footer.jpg") no-repeat center center/cover;
  // background: linear-gradient(
  //     to top,
  //     rgba(75, 108, 218, 0.363),
  //     rgba(48, 48, 199, 0.411),
  //     rgba(0, 0, 255, 0.363)
  //   ),
  //   url("@/assets/images/footer2.png") no-repeat center center/cover;
  // background-image: url("@/assets/images/bg-pattern-2.png");
  // background: url("@/assets/images/leaf.jpg") no-repeat center center/cover;
  .square {
    width: 50px;
    height: 50px;

    border: 10px solid rgba(116, 116, 116, 0.363);
    position: absolute;
    top: 20%;
    right: 35%;
    transform: rotate(35deg);
  }

  .circle {
    width: 250px;
    height: 250px;
    border: 20px solid rgba(116, 116, 116, 0.363);
    position: absolute;
    top: 10%;
    left: 18%;
  }

  .round {
    width: 50px;
    height: 50px;
    border: 5px solid rgba(116, 116, 116, 0.363);
    border-radius: 50%;
    position: absolute;
    top: 20%;
    left: 42%;
  }

  h6,
  .text-reset {
    text-transform: capitalize;
  }
}

.cursor-pointer {
  // text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
}
</style>
