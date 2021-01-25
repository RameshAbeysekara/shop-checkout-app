import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import ShippingDetails from "../views/ShippingDetails.vue";
import PaymentDetails from "../views/PaymentDetails.vue";
import Summary from "../views/Summary.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/shipping-details",
    name: "ShippingDetails",
    component: ShippingDetails,
  },
  {
    path: "/payment-details",
    name: "PaymentDetails",
    component: PaymentDetails,
  },
  {
    path: "/summary",
    name: "Summary",
    component: Summary,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
