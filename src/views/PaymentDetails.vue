<template>
  <div class="payment-details">
    <h1>Enter Your Payment Details</h1>
    <PaymentDetailsForm @proceedPayment="proceedPayment" />
  </div>
</template>

<script>
import PaymentDetailsForm from "../components/PaymentDetailsForm.vue";

export default {
  name: "PaymentDetails",
  components: {
    PaymentDetailsForm,
  },
  methods: {
    proceedPayment(formValues) {
      this.$store.commit({
        type: "addPaymentDetails",
        value: {
          cardNumber: formValues.cardNumber,
          expireDate: formValues.expireDate,
          cvCode: formValues.cvCode,
          cardName: formValues.cardName,
        },
      });
      this.$router.push("/summary");
    },
  },
};
</script>
