<template>
  <div class="widget-container mb-4">
    <div class="widget-box" data-aos="fade-up-right" data-aos-duration="1300">
      <div
        class="widget-pic"
        data-aos="flip-left"
        data-aos-duration="1300"
      ></div>
    </div>
    <div class="text" data-aos="fade-up-left" data-aos-duration="1300">
      <small>{{ $t("widget_heading") }}</small>
      <h3 class="mb-5 text-secondary">ASA ŠPED</h3>
      <p class="mb-5 text-secondary">
        {{ $t("widget_main_text") }}
      </p>

      <small>{{ $t("widget_small_text") }}</small>
      <p>+387 33 407-352</p>
    </div>
  </div>
  <div data-aos="flip-left" data-aos-duration="1000">
    <h2>{{ $t("fast_and_simple") }}</h2>
    <div class="container truck mb-5 mt-5">
      <img class="truck" src="@/assets/images/moving.gif" alt="truckGif" />
    </div>
  </div>
  <div class="container mt-5 mb-5 d-flex justify-center iso">
    <p data-aos="fade-left" data-aos-duration="1300">
      {{ $t("iso_standard") }}
    </p>
    <a
      class="widget-pic"
      data-aos="flip-left"
      data-aos-duration="1300"
      href="https://www.iso.org/iso-9001-quality-management.html"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="@/assets/images/iso.png" alt="iso9001"
    /></a>
  </div>
</template>
<script>
export default {
  name: "Widget",
  data() {
    return {
      widgets: [
        { small: "30", p: "widget_icon_one_p" },
        { small: "10", p: "widget_icon_two_p" },
        { small: "130", p: "widget_icon_three_p" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.truck {
  filter: hue-rotate(92deg);
}
h2 {
  text-align: center;
}
@media screen and (max-width: 900px) {
  .iso {
    flex-direction: column;
    img {
      width: 80%;
      margin: auto;
    }
    a {
      text-align: center;
    }
  }
}
.iso {
  display: flex;
  align-items: center;
  vertical-align: middle;
  img {
    max-width: 400px;
    &:hover {
      opacity: 0.75;
    }
  }
}
.truck {
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
  }
}
.widget-container {
  padding-top: 2em;
  width: 85%;
  margin: auto;
  height: 55vh;
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-bottom: 250px;
  .widget-box {
    width: 100%;
    height: 100%;
    position: relative;

    .widget-pic {
      position: absolute;
      top: 15%;
      left: 22%;
      width: 78%;
      height: 70%;
      background: url("@/assets/images/logistics-1.webp") no-repeat center
        center/cover;
      overflow: hidden;
      &:hover {
        background-position: top;
      }
    }
  }

  .text {
    width: 100%;
    padding: 30px 60px;
    text-align: left;
    @media screen and (max-width: 900px) {
      width: 95%;
      margin: auto;
      padding: 30px 0px;
      text-align: left;
    }
    .d-flex {
      svg {
        display: block;
        margin: auto;
        width: 30px;
        height: 30px;
      }
      small {
        font-size: 30px;
      }
    }

    small {
      font-size: 20px;
      margin-bottom: 4%;
    }
    h1 {
      font-size: 50px;
      letter-spacing: 0.1rem;
    }
    p {
      font-size: 20px;
    }
  }
}

@media screen and (max-width: 900px) {
  .widget-container {
    width: 100%;
    flex-direction: column;
    height: 100%;
    margin-bottom: 0%;
    .widget-box {
      height: 50vh;
      .widget-frame {
        width: 50%;
        height: 50vh;
        left: 5%;
      }
      .widget-pic {
        width: 80%;
        top: 20%;
        left: 10%;
      }
    }
  }
}
</style>
