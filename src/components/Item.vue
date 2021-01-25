<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <img alt="Product Image" :src="require(`../assets/${imgUrl}`)" />
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
