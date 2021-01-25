<template>
  <div class="summary">
    <h1>This is an Summary page</h1>
    <h3>{{ currentOrder.item.id }}</h3>
    <h3>{{ currentOrder.item.color }}</h3>
  </div>
</template>

<script>
export default {
  name: "Summary",
  computed: {
    currentOrder() {
      return this.$store.getters.currentOrder;
    },
  },
};
</script>
