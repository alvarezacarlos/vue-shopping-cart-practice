<template>
  <ul>
    <product-item
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :title="product.title"
      :price="product.price"
      :description="product.description"
      :image="product.image"
    ></product-item>
  </ul>
</template>

<script>
import ProductItem from "./components/productItem/ProductItem.vue";

export default {
  components: {
    ProductItem,
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 40rem;
}
</style>
