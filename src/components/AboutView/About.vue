<template>
  <div
    class="about-nav d-flex justify-content-center align-items-center"
    data-aos="fade-in"
  >
    <div class="about-heading text-center">
      <div>
        <h1 class="text-light">{{ $t("about_us_heading") }}</h1>
        <p class="text-light"></p>
      </div>
    </div>
  </div>
  <div class="about-flex-grid">
    <div class="flex-second">
      <router-link v-for="card in grid_2" :to="card.src">
        <div
          :class="card.class"
          :data-aos="card.animate"
          data-aos-duration="1000"
        >
          <div>
            <h1>{{ $t(card.h1) }}</h1>
            <h4>{{ $t(card.h4) }}</h4>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutUs",
  data() {
    return {
      grid_2: [
        {
          src: "/transport",
          h1: "transport",
          h4: "transport_h4",
          class: "card-1",
          animate: "fade-down-right",
        },
        {
          src: "/warehouse",
          h1: "warehouse",
          h4: "warehouse_h4",
          class: "card-2",
          animate: "fade-down-left",
        },
        {
          src: "/duty",
          h1: "duty",
          h4: "duty_h4",
          class: "card-3",
          animate: "fade-up-right",
        },
        {
          src: "/other-services",
          h1: "other_services_h4",
          h4: "",
          class: "card-4",
          animate: "fade-up-left",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/variables.scss";
h1 {
  color: white;
}

.about {
  border-bottom: 2px solid rgba(16, 99, 114, 0.6);
  color: $primary-color;
  text-align: center;
}

.about-nav {
  width: 100%;
  height: 70vh;
  background: linear-gradient(
      315deg,
      rgba(43, 67, 101, 0.669),
      rgba(66, 70, 120, 0.645),
      rgba(225, 173, 1, 0.59)
    ),
    url("@/assets/images/asa-about.jpg") no-repeat center center/cover;

  position: relative;
  p {
    color: white;
  }
  h1 {
    font-size: 70px;
    color: white;
  }

  .circle {
    width: 300px;
    height: 300px;
    position: absolute;
    top: 5%;
    left: 5%;
    border-radius: 50%;
    border: 15px solid gray;
  }
  .square {
    width: 300px;
    height: 300px;
    position: absolute;
    bottom: 10%;
    right: 10%;
    border-radius: 0%;
    border: 15px solid gray;
  }
}
.about-flex-grid {
  width: 80%;
  margin: auto;
  display: flex;
  // gap: 10px;
  margin-top: 2%;
  margin-bottom: 5%;
  border-radius: 5px;
  justify-content: center;

  .flex-second {
    width: 90%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    .card-1,
    .card-2,
    .card-3,
    .card-4 {
      width: 100%;
      height: 400px;
      color: white;
      overflow: hidden;
      &:hover {
        opacity: 0.8;
        cursor: pointer;
      }
      display: flex;
      flex-direction: column;
      justify-content: center;

      text-align: left;
      padding-left: 2%;
      position: relative;
      div {
        position: absolute;
        transition: 1s;
        h1 {
          font-size: 30px;
        }
        top: 90.5%;

        h1 {
          font-size: 30px;
        }
        top: 90.5%;
      }

      &:hover {
        div {
          top: 10%;
          transition: top 1s;
        }
      }
    }

    .card-1 {
      background: linear-gradient(
          to right,
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6)
        ),
        url("@/assets/images/asa-truck.jpg") no-repeat center center/cover;
    }
    .card-2 {
      background: linear-gradient(
          to right,
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6)
        ),
        url("@/assets/images/wms-header.jpg") no-repeat center center/cover;
    }
    .card-3 {
      background: linear-gradient(
          to right,
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6)
        ),
        url("@/assets/images/forspace_info.jpg") no-repeat center center/cover;
    }
    .card-4 {
      background: linear-gradient(
          to right,
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6)
        ),
        url("@/assets/images/services.jpg") no-repeat center center/cover;
    }
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 100%;
    height: 100%;

    .flex-first {
      width: 100%;
      margin: auto;
      margin-top: 5%;

      .div-1,
      .div-2,
      .div-3,
      .div-4 {
        width: 90%;
      }
    }
    .flex-second {
      width: 90%;
      margin: auto;
      .card-1,
      .card-2,
      .card-3,
      .card-4 {
        height: 200px;

        div {
          width: 100%;
          top: 75%;
          h1 {
            width: 100%;
            font-size: 25px;
            margin-bottom: 10%;
          }
          h4 {
            font-size: 20px;
          }
          .mobile {
            display: none;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .flex-second {
    grid-template-columns: 1fr !important;
  }
}
</style>
