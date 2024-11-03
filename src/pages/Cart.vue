<template>
  <div class="titles-container">
    <h2>Your Cart</h2>
    <h3>
      Total Amount: <badge mode="elegant">${{ totalPrice }}</badge>
    </h3>
  </div>
  <cart-list></cart-list>
</template>

<script>
import CartList from "@/components/cart/CartList.vue";
import Badge from "@/ui/Badge/Badge.vue";

export default {
  inject: ["cartProducts"],
  components: {
    CartList,
    Badge,
  },
  computed: {
    totalPrice() {
      return this.cartProducts.total.toFixed(2);
    },
  },
};
</script>

<style>
.titles-container {
  max-width: 40rem;
  margin: 2rem auto;
  text-align: center;
}
</style>
