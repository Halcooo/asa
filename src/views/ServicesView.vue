<template>
  <div class="wrapper" data-aos="fade-in">
  </div>
  <div class="content">
    <div class="services-container mt-5">
      <div class="grid mb-5 main-grid">
        <div
          v-for="div in divs"
          :key="div"
          class="first"
          :class="div.class"
          :data-aos="div.animate"
          data-aos-duration="1000"
        >
          <div>
            <h2 class="text-center title">{{ $t(div.text) }}</h2>
            <p
              style="
                width: 100px;
                padding: 3px;
                background-color: tomato;
                margin: auto;
                margin-top: 10%;
                margin-bottom: 10%;
              "
            ></p>
            <div class="flex">
              <router-link class="read-more" :to="div.to">{{
                $t("read_more")
              }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Line from "@/particles/Line.vue";
import ServicesSlider from "@/components/Sliders/ServicesSlider.vue";

export default {
  data() {
    return {
      divs: [
        {
          class: "erp",
          text: "transport",
          // p: "Transport", // todo
          to: "/transport", // todo
          animate: "fade-down-right",
        },
        {
          class: "dms",
          text: "warehouse",
          // p: "services_grid_div2_text",// todo
          to: "/warehouse",
          animate: "fade-down-left",
        },
        {
          class: "wms",
          text: "duty",
          // p: "services_grid_div3_text",// todo
          to: "/duty",
          animate: "fade-up-right",
        },
        {
          class: "systemp",
          text: "other_services_h4",
          // p: "services_grid_div4_text",// todo
          to: "/other-services", // todo
          animate: "fade-up-left",
        },
      ],
      images: [
        {
          name: "fast_and_secure",
          url: require("@/assets/images/speed-truck.jpeg"),
          text: "",
        },
        {
          name: "warehouse",
          url: require("@/assets/images/wms-header.jpg"),
          text: "warehouse_h4",
        },
        {
          name: "duty",
          url: require("@/assets/images/product_item_2.jpg"),
          text: "duty_h4",
        },
      ],
    };
  },
  components: {
    ServicesSlider,

    Line,
  },
  computed: {
    currentSlide() {
      return this.$store.getters.getCurrentSlide;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/variables.scss";
.wrapper {
  width: 100%;
  height: 35vh;
  background: linear-gradient(
      315deg,
      rgba(43, 67, 101, 0.369),
      rgba(66, 70, 120, 0.645),
      rgba(225, 173, 1, 0.29)
    ),
    url("@/assets/images/speed-truck.jpeg") no-repeat center center/cover;
}
.read-more {
  position: relative;
  transition: all 0.5s;
}
.read-more::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.3s;
}
.read-more:hover::before {
  opacity: 0;
  transform: scale(0.5, 0.5);
}
.read-more::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: all 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.5);
  transform: scale(1.2, 1.2);
}
.read-more:hover::after {
  opacity: 1;
  transform: scale(1, 1);
}
.main-grid {
  overflow: hidden;
}

.nav-text {
  position: absolute;
  z-index: 5;
  top: 23%;
  background-color: rgba(255, 253, 253, 0.6);
  box-shadow: rgba(255, 253, 253, 0.8) 0px 40px 100px 4px;
  padding: 15px;
  max-width: 390px;
  border-radius: 15px;
}

.heading {
  .w-100 {
    color: rgb(117, 117, 117);
    svg {
      width: 60px;
      height: 60px;
      margin-top: 15%;
      margin-bottom: 5%;
      color: rgb(42, 95, 131);
      path {
        width: 50px;
        height: 50px;
      }
    }
  }
}

.services-container {
  width: 70%;
  margin: auto;
  .grid {
    width: 100%;
    margin-top: 6%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    .first {
      height: 500px;
      display: flex;
      justify-content: center;
      align-items: center;

      h2 {
        color: white;
      }
      p {
        color: white;
      }
      .flex {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      a {
        align-items: center;
        padding: 12px 40px;
        color: white;
        border: 1px solid white;
      }
    }
    .second {
      background-color: tomato;
      transition: 0.6s;
      border-radius: 7px;

      &:hover {
        cursor: pointer;
        opacity: 0.6;
      }
    }

    .erp {
      background: linear-gradient(
          to top,
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6)
        ),
        url("@/assets/images/mockup1.jpg") no-repeat center center/cover;
    }
    .dms {
      background: linear-gradient(
          to top,
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6)
        ),
        url("@/assets/images/asa-warehouse.png") no-repeat center center/cover;
    }
    .wms {
      background: linear-gradient(
          to top,
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6)
        ),
        url("@/assets/images/erp-sistemi.png") no-repeat center center/cover;
    }
    .systemp {
      background: linear-gradient(
          to top,
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6)
        ),
        url("@/assets/images/product_item_2.jpg") no-repeat center center/cover;
    }
    .solution {
      background: linear-gradient(
          to top,
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6)
        ),
        url("@/assets/images/payments.jpg") no-repeat center center/cover;
    }
  }
}
@media screen and (max-width: 1000px) {
  .grid {
    grid-template-columns: 1fr !important;
  }
}
@media screen and (max-width: 567px) {
  .heading {
    width: 75%;
    margin: auto;
  }
  .d-flex {
    flex-direction: column;
  }
  .services-container {
    width: 95%;
    .grid {
      grid-template-columns: repeat(1, 1fr);
      box-sizing: border-box;

      .first {
        height: 100%;
        padding: 15px;
        p {
          margin: 70px 0px;
        }
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .services-container {
    width: 90%;
  }
}
</style>
