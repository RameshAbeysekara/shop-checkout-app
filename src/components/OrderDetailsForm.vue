<template>
  <form @submit.prevent="proceedCheckout">
    <div class="form-control">
      <label for="color">Color</label>
      <select id="color" name="color" v-model="color">
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="orange">Orange</option>
        <option value="blue">Blue</option>
        <option value="purple">Purple</option>
      </select>
    </div>
    <div class="form-control">
      <label for="size">Size</label>
      <select id="size" name="size" v-model="size">
        <option value="uk6">UK 6</option>
        <option value="uk8">UK 8</option>
        <option value="uk10">UK 10</option>
        <option value="uk12">UK 12</option>
        <option value="uk14">UK 14</option>
      </select>
    </div>
    <div class="form-control">
      <label for="quantity">Quantity</label>
      <input id="quantity" name="quantity" type="number" v-model="quantity" />
    </div>
    <div class="button-container">
      <button>
        Proceed Checkout
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "OrderDetailsForm",
  data() {
    return {
      color: "red",
      size: "uk10",
      quantity: 1,
    };
  },
  methods: {
    proceedCheckout() {
      this.$emit("proceedCheckout", {
        color: this.color,
        size: this.size,
        quantity: this.quantity,
      });
    },
  },
};
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
  text-align: left;
}

.form-control.invalid input {
  border-color: red;
}

.form-control.invalid label {
  color: red;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

.button-container {
  padding-top: 20px;
}

button {
  font: inherit;
  border: 1px solid #e93342;
  background-color: #e93342;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #b42531;
  background-color: #b42531;
}
</style>
