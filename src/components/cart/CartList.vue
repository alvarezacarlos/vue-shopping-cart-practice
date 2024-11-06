<template>
  <ul>
    <cart-item
      v-for="product in cartProducts.products"
      :key="product.productId"
      :product-id="product.productId"
      :title="product.title"
      :image="product.image"
      :price="product.price"
      :quantity="product.quantity"
    ></cart-item>
  </ul>
</template>

<script>
import CartItem from "./components/CartItem.vue";

export default {
  components: {
    CartItem,
  },  
  computed: {
    cartProducts() {
      return this.$store.getters.cartProducts;
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
