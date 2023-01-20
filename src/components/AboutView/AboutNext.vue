<template>
  <div class="the_next" data-aos="fade-in">
    <div class="the_next_heading">
      <h1 class="text-secondary mb-4">{{ $t("about_us_next_heading") }}</h1>
      <Line />
      <h3 class="text-secondary mt-2">{{ $t("contact_personel") }}:</h3>
    </div>
    <div class="container next-view">
      <div
        v-for="contact in contacts"
        class="card"
        data-aos="flip-right"
        data-aos-anchor-placement="top-center"
        data-aos-duration="1000"
      >
        <div class="img-container">
          <img :src="contact.image" :alt="contact.name" style="width: 100%" />
        </div>

        <h2>{{ contact.name }}</h2>
        <p class="title">{{ $t(contact.position) }}</p>
        <p>
          <font-awesome-icon icon="fa-solid fa-envelope" size="1x" />
          <span>{{ contact.mail }}</span>
        </p>
        <p>
          <font-awesome-icon icon="fa-solid fa-phone" size="1x" /><span>{{
            contact.phone
          }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import Line from "@/particles/Line.vue";
export default {
  name: "AboutUsNext",
  components: { Line },
  data() {
    return {
      contacts: [
        {
          name: "Haris Sarajlić",
          position: "position_haris",
          phone: "061 109 066",
          mail: "haris.sarajlic@asa.ba",
          image: require("@/assets/images/avatar.jpg"),
        },
        {
          name: "Nermina Planinčević",
          position: "position_nermina",
          phone: "061 225 618,",
          mail: "nermina.planincevic@asa.ba",
          image: require("@/assets/images/female-avatar.png"),
        },
        {
          name: "Emir Dinarević",
          position: "position_emir",
          phone: "061 106 589",
          mail: "emir.dinarevic@asa.ba",
          image: require("@/assets/images/avatar.jpg"),
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/variables.scss";
.card {
  span {
    margin-left: 8px;
  }
}
h2 {
  height: 71px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  height: 60px;
}
.img-container {
  overflow: hidden;

  img {
    width: 100%;
    transition: all 1.5s;
    &:hover {
      transform: scale(1.2);
    }
  }
}
.next-view {
  margin-top: 20px;
  display: flex;
  gap: 20px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
  height: 500px;
  img {
    width: 100px;
  }
}

.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}
.the_next {
  width: 100%;
  .the_next_heading {
    text-align: center;
  }

  .the_next_content {
    width: 70%;
    margin: 5% auto;

    height: 370px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    .item_one {
      width: 100%;
      height: 100%;

      background: linear-gradient(
          to right,
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6)
        ),
        url("@/assets/images/product_item_1.jpg") no-repeat center center/cover;
      position: relative;
    }
    .item_two {
      width: 100%;
      height: 100%;
      background: linear-gradient(
          to right,
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6),
          rgba(8, 40, 67, 0.6)
        ),
        url("@/assets/images/product_item_2.jpg") no-repeat center center/cover;
      position: relative;
    }

    .overlay {
      position: absolute;
      bottom: 0;
      width: 90%;
      margin: auto;
      height: 18vh;
      background-color: rgb(51, 51, 51);
      transform: translate(6%, 50%);
      padding: 20px;
      h3,
      p {
        color: white;
      }
      .read-more {
        padding: 10px 20px;
        background-color: rgb(255, 255, 255);
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
  }
  @media screen and (max-width: 800px) {
    .next-view {
      flex-direction: column;
    }
    .card {
      margin-bottom: 25px;
    }
  }
  @media screen and (max-width: 567px) {
    height: 100%;

    .the_next_content {
      width: 90%;
      flex-direction: column;
      height: 550px;
      .overlay {
        height: 23vh;
      }
    }
    .item_one,
    .item_two {
      width: 90%;
    }
  }
}
</style>
