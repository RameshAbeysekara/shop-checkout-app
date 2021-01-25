<template>
  <div class="home">
    <br/>
    <Item title="Vue.js Test App with routing and vuexy" imgUrl="tshirt.jpg" />
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
