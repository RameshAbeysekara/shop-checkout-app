<template>
  <div id="app">
    <router-view />
    <div id="nav">
      <router-link to="/">Home</router-link> >
      <router-link to="/shipping-details">Shipping Details</router-link> >
      <router-link to="/payment-details">Payment Details</router-link> >
      <router-link to="/summary">Summary</router-link>
    </div>
  </div>
</template>

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
</style>
