<template>
  <form @submit.prevent="proceedPayment">
    <div class="form-control">
      <label for="cardNumber">Card Number</label>
      <input
        id="cardNumber"
        name="cardNumber"
        type="text"
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
      <input id="cvCode" name="cvCode" type="text" v-model.trim="cvCode" />
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
    <div>
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

input[type="checkbox"],
input[type="radio"] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type="checkbox"] + label,
input[type="radio"] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>
