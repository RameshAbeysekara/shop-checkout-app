<template>
  <div class="dashboard">
    <h1>User Type: ({{ this.logedInUser }} user)</h1>
    <button @click="placeOrder">
      Place Order
    </button>
    <h1>Orders List</h1>
    <div v-if="this.orders.length > 0">
      <div v-for="order in this.orders" :key="order.index">
        <base-card>
          <h3>Item Details</h3>
          <p>Item ID: {{ order.orderDetails.item.id }}</p>
          <p>Color: {{ order.orderDetails.item.color }}</p>
          <p>Size: {{ order.orderDetails.item.size }}</p>
          <p>Quantity: {{ order.orderDetails.item.quantity }}</p>

          <h3>Shipping Details</h3>
          <p>First Name: {{ order.orderDetails.shipping.firstName }}</p>
          <p>Last Name: {{ order.orderDetails.shipping.lastName }}</p>
          <p>Phone Number: {{ order.orderDetails.shipping.phoneNumber }}</p>
          <p>Address Line 1: {{ order.orderDetails.shipping.addressLine1 }}</p>
          <p>Address Line 2: {{ order.orderDetails.shipping.addressLine2 }}</p>

          <h3>Payment Details</h3>
          <p>Card Number: {{ order.orderDetails.payment.cardNumber }}</p>
          <p>Expire Date: {{ order.orderDetails.payment.expireDate }}</p>
          <p>CV Code: {{ order.orderDetails.payment.cvCode }}</p>
          <p>Card Name: {{ order.orderDetails.payment.cardName }}</p>
        </base-card>
      </div>
    </div>
    <div v-else><p>No Orders Avalable</p></div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data: function() {
    return {
      logedInUser: "",
      orders: [],
    };
  },
  methods: {
    placeOrder() {
      this.$router.push("/home");
    },
  },
  mounted() {
    if (localStorage.user) {
      this.logedInUser = localStorage.user;
      if (localStorage.orders) {
        JSON.parse(localStorage.orders).map((order, index) => {
          if (this.logedInUser == "admin") {
            this.orders.push({
              index: index,
              orderDetails: order.orderDetails,
            });
          } else {
            if (this.logedInUser == order.user) {
              this.orders.push({
                index: index,
                orderDetails: order.orderDetails,
              });
            }
          }
        });
      }
    }
  },
};
</script>
