<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <img alt="Product Image" :src="require(`../assets/${imgUrl}`)" />
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    title: String,
    imgUrl: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
    height: 250px;
    width: 250px;
}
</style>
