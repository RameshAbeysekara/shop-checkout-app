<template>
  <div id="app">
    <router-view />
    <div id="nav">
      <router-link to="/dashboard">Dashboard</router-link> >
      <router-link to="/home">Order Item</router-link> >
      <router-link to="/shipping-details">Shipping Details</router-link> >
      <router-link to="/payment-details">Payment Details</router-link> >
      <router-link to="/summary">Summary</router-link>
    </div>
    <div v-if="!currentRouteName">
      <div class="button-container">
        <div class="button-logout">
          <button @click="logout">
            Logout
          </button>
        </div>
        <button @click="clearStorage">
          Clear Orders
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentRouteName() {
      return this.$route.name == "Login";
    },
  },
  methods: {
    logout() {
      this.$router.push("/");
      this.$store.commit({
        type: "logout",
      });
    },
    clearStorage() {
      localStorage.removeItem("orders");
      if (this.$route.name == "Dashboard") {
        window.location.reload();
      } else {
        this.$router.push("/dashboard");
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #dd2d3c;
}

.button-container {
  padding-top: 20px;
}

.button-logout {
  padding-bottom: 10px;
}

button {
  font: inherit;
  border: 1px solid #b42121;
  background-color: #b42121;
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
