<template>
  <li>
    <div class="image-container">
      <img :src="image" :alt="title" />
    </div>
    <div class="text-container">
      <h3>{{ title }}</h3>
      <div class="details-container">
        <div>
          Price per item: <strong>${{ price }}</strong>
        </div>
        <div>
          Quantity: <strong>{{ quantity }}</strong>
        </div>
      </div>
      <div class="total-container">Total: ${{ productTotalPrice }}</div>
      <button @click="removeFromCartHandler">Remove</button>
    </div>
  </li>
</template>

<script>
export default {
  props: ["productId", "title", "image", "description", "price", "quantity"],
  computed: {
    productTotalPrice() {
      return this.price * this.quantity;
    },
  },
  inject: ["removeFromCart"],
  methods: {
    removeFromCartHandler() {
      this.removeFromCart(this.productId);
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem auto;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  text-align: center;
  max-width: 25rem;
}

img {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  object-fit: cover;
}

.details-container {
  display: flex;
  justify-content: space-between;
}

.total-container {
  font-weight: bold;
  border-top: 1px solid #474747;
  border-bottom: 2px solid #474747;
  padding: 0.25rem 0;
  margin: 1rem 0;
  width: auto;
}

button {
  font: inherit;
  border: 1px solid #8f0030;
  background-color: #8f0030;
  color: white;
  border-radius: 30px;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
}

button:hover,
button:active {
  background-color: #53001c;
  border-color: #53001c;
}
</style>
