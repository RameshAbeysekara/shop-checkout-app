<template>
  <div class="summary">
    <h1>Order Summary</h1>

    <h3>Item Details</h3>
    <p>Item ID: {{ currentOrder.item.id }}</p>
    <p>Color: {{ currentOrder.item.color }}</p>
    <p>Size: {{ currentOrder.item.size }}</p>
    <p>Quantity: {{ currentOrder.item.quantity }}</p>

    <h3>Shipping Details</h3>
    <p>First Name: {{ currentOrder.shipping.firstName }}</p>
    <p>Last Name: {{ currentOrder.shipping.lastName }}</p>
    <p>Phone Number: {{ currentOrder.shipping.phoneNumber }}</p>
    <p>Address Line 1: {{ currentOrder.shipping.addressLine1 }}</p>
    <p>Address Line 2: {{ currentOrder.shipping.addressLine2 }}</p>

    <h3>Payment Details</h3>
    <p>Card Number: {{ currentOrder.payment.cardNumber }}</p>
    <p>Expire Date: {{ currentOrder.payment.expireDate }}</p>
    <p>CV Code: {{ currentOrder.payment.cvCode }}</p>
    <p>Card Name: {{ currentOrder.payment.cardName }}</p>
  </div>
</template>

<script>
export default {
  name: "Summary",
  data: function() {
    return {
      currentOrder: {
        item: {
          id: "",
          color: "",
          size: "",
          quantity: "",
        },
        shipping: {
          firstName: "",
          lastName: "",
          phoneNumber: "",
          addressLine1: "",
          addressLine2: "",
        },
        payment: {
          cardNumber: "",
          expireDate: "",
          cvCode: "",
          cardName: "",
        },
      },
    };
  },
  mounted() {
    this.currentOrder = this.$store.getters.currentOrder;
  },
};
</script>
