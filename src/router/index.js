import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import ServicesView from "../views/ServicesView.vue";
import ContactView from "../views/ContactView.vue";
import AboutView from "../views/AboutView.vue";
import ErpAllInOne from "../components/AboutView/News/ErpAllInOne";
import WhyCompaniesNeedDms from "../components/AboutView/News/WhyCompaniesNeedDms";
import WhyWebBased from "../components/AboutView/News/WhyWebBased";
import Transport from "../components/AboutView/News/Transport";
import Warehouse from "../components/AboutView/News/Warehouse";
import Duty from "../components/AboutView/News/Duty";
import OtherServices from "../components/AboutView/News/OtherServices";
import WhatsAnApi from "../components/AboutView/News/WhatsAnApi";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/erp-all-in-one",
    name: "ErpAllInOne",
    component: ErpAllInOne,
  },
  {
    path: "/why-companies-need-dms",
    name: "WhyCompaniesNeedDms",
    component: WhyCompaniesNeedDms,
  },
  {
    path: "/why-web-based",
    name: "WhyWebBased",
    component: WhyWebBased,
  },
  {
    path: "/transport",
    name: "Transport",
    component: Transport,
  },
  {
    path: "/warehouse",
    name: "Warehouse",
    component: Warehouse,
  },
  {
    path: "/duty",
    name: "Duty",
    component: Duty,
  },

  {
    path: "/other-services",
    name: "OtherServices",
    component: OtherServices,
  },
  {
    path: "/whats-an-api",
    name: "WhatsAnApi",
    component: WhatsAnApi,
  },

  {
    path: "/services",
    name: "services",
    component: ServicesView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
