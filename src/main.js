import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Toaster from '@meforma/vue-toaster';
import i18n from "./i18n";
import "bootstrap/dist/js/bootstrap.js";
import AOS from "aos";
import "bootstrap/dist/js/bootstrap.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"; //!!!!!!!!!!! important import only icons that will be used !!!!!!!!!!!!!!!!
import {
  faTruck,
  faUserSecret,
  faPhone,
  faEnvelope,
  faHome,
  faGem,
  faChevronDown,
  faArrowUp,
  faDesktop,
  faMobile,
  faServer,
  faRocket,
  faCheck,
  faMailBulk,
  faQuoteLeft,
  faPlay,
  faSearch,
  faChevronLeft,
  faWarehouse,
  faCashRegister,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faJava,
  faVuejs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faCashRegister,
  faWarehouse,
  faTruck,
  faUserSecret,
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram,
  faPhone,
  faEnvelope,
  faHome,
  faGem,
  faArrowUp,
  faChevronDown,
  faJava,
  faVuejs,
  faReact,
  faDesktop,
  faMobile,
  faServer,
  faRocket,
  faCheck,
  faMailBulk,
  faQuoteLeft,
  faPlay,
  faSearch,
  faChevronLeft
);

createApp(App)
  .use(i18n)
  .use(store)
  .use(router)
  .use(Toaster)
  .use(AOS.init())
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
