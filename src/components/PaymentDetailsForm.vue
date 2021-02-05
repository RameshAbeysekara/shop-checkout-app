<template>
  <form @submit.prevent="proceedPayment">
    <div class="form-control">
      <label for="cardNumber">Card Number</label>
      <input
        id="cardNumber"
        name="cardNumber"
        type="number"
        v-model.trim="cardNumber"
      />
    </div>
    <div class="form-control">
      <label for="expireDate">Expiration Date</label>
      <input
        id="expireDate"
        name="expireDate"
        type="text"
        v-model.trim="expireDate"
      />
    </div>
    <div class="form-control">
      <label for="cvCode">CV Code</label>
      <input id="cvCode" name="cvCode" type="number" v-model.trim="cvCode" />
    </div>
    <div class="form-control">
      <label for="cardName">Card Owner Name</label>
      <input
        id="cardName"
        name="cardName"
        type="text"
        v-model.trim="cardName"
      />
    </div>
    <div class="button-container">
      <button>
        Proceed Payment
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "PaymentDetailsForm",
  data() {
    return {
      cardNumber: "",
      expireDate: "",
      cvCode: "",
      cardName: "",
    };
  },
  methods: {
    proceedPayment() {
      this.$emit("proceedPayment", {
        cardNumber: this.cardNumber,
        expireDate: this.expireDate,
        cvCode: this.cvCode,
        cardName: this.cardName,
      });
    },
  },
};
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
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
