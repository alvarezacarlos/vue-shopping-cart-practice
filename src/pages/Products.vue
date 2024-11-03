<template>
  <div class="titles-container">
    <h3>Our Products</h3>
  </div>
  <product-list></product-list>
</template>

<script>
import ProductList from "@/components/products/ProductList.vue";
export default {
  components: {
    ProductList,
  },
};
</script>

<style>
.titles-container {
  max-width: 20rem;
  margin: 2rem auto;
  text-align: center;
  border-bottom: 1px solid black;
}
</style>
