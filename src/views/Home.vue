<template>
  <div class="home">
    <h1>Vue.js Test App with routing and vuexy</h1>
    <Item
      description="Men’s Crew Neck T Shirts"
      price="$ 25.00"
      imgUrl="tshirt.jpg"
    />
    <OrderDetailsForm @proceedCheckout="proceedCheckout" />
  </div>
</template>

<script>
import Item from "../components/Item.vue";
import OrderDetailsForm from "../components/OrderDetailsForm.vue";

export default {
  name: "Home",
  components: {
    Item,
    OrderDetailsForm,
  },
  methods: {
    proceedCheckout(formValues) {
      this.$store.commit({
        type: "addItemDetails",
        value: {
          id: "0T123",
          color: formValues.color,
          size: formValues.size,
          quantity: formValues.quantity,
        },
      });
      this.$router.push("/shipping-details");
    },
  },
};
</script>
