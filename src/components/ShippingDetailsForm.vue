<template>
  <form @submit.prevent="proceedShipping">
    <div class="form-control">
      <label for="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        v-model.trim="firstName"
      />
    </div>
    <div class="form-control">
      <label for="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        v-model.trim="lastName"
      />
    </div>
    <div class="form-control">
      <label for="phoneNumber">Phone Number</label>
      <input
        id="phoneNumber"
        name="phoneNumber"
        type="number"
        v-model.trim="phoneNumber"
      />
    </div>
    <div class="form-control">
      <label for="addressLine1">Address Line 1</label>
      <input
        id="addressLine1"
        name="addressLine1"
        type="text"
        v-model.trim="addressLine1"
      />
    </div>
    <div class="form-control">
      <label for="addressLine2">Address Line 2</label>
      <input
        id="addressLine2"
        name="addressLine2"
        type="text"
        v-model.trim="addressLine2"
      />
    </div>
    <div class="button-container">
      <button>
        Proceed Shipping
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "ShippingDetailsForm",
  data() {
    return {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      addressLine1: "",
      addressLine2: "",
    };
  },
  methods: {
    proceedShipping() {
      this.$emit("proceedShipping", {
        firstName: this.firstName,
        lastName: this.lastName,
        phoneNumber: this.phoneNumber,
        addressLine1: this.addressLine1,
        addressLine2: this.addressLine2,
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
