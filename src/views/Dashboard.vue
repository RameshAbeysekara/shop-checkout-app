<template>
  <div class="dashboard">
    <h1>Order Summary{{ this.logedInUser }}</h1>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data: function() {
    return {
      logedInUser: "",
    };
  },
  mounted() {
    if (localStorage.user) {
      this.logedInUser = localStorage.user;
      console.log("orders", localStorage.orders);
    }
  },
};
</script>
