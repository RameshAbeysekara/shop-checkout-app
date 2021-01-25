<template>
  <div class="hello">
    <img alt="Product Image" :src="require(`../assets/${imgUrl}`)" />
    <p>{{ description }}</p>
    <p>{{ price }}</p>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    description: String,
    price: String,
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
p {
  font-weight: bold;
}
</style>
