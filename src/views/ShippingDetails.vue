<template>
  <div class="shipping-details">
    <h1>This is an ShippingDetails page</h1>
    <ShippingDetailsForm @proceedShipping="proceedShipping" />
  </div>
</template>

<script>
import ShippingDetailsForm from "../components/ShippingDetailsForm.vue";

export default {
  name: "ShippingDetails",
  components: {
    ShippingDetailsForm,
  },
  methods: {
    proceedShipping(formValues) {
      this.$store.commit({
        type: "addShippingDetails",
        value: {
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          phoneNumber: formValues.phoneNumber,
          addressLine1: formValues.addressLine1,
          addressLine2: formValues.addressLine2,
        },
      });
      this.$router.push("/payment-details");
    },
  },
};
</script>
