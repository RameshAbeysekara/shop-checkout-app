<template>
  <div class="home">
    <Item title="Vue.js Test App with routing and vuexy" imgUrl="tshirt.jpg" />
    <OrderDetailsForm />
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
};
</script>
