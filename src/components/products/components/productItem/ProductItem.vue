<template>
  <li>
    <div class="product-container">
      <div class="product-image-container">
        <img :src="image" :alt="title" />
      </div>
      <div class="product-text-container">
        <h3>{{ title }}</h3>
        <badge mode="highlight"
          ><h4>{{ price }}</h4></badge
        >
        <p>{{ description }}</p>
      </div>
    </div>
    <div class="product-actions-container">
      <button @click="addToCardHandler">Add to Cart</button>
    </div>
  </li>
</template>

<script>
import Badge from "@/ui/Badge/Badge.vue";
export default {
  components: {
    Badge,
  },
  props: ["id", "title", "price", "description", "image"],
  // inject: ["addToCart"],
  methods: {
    addToCardHandler() {     
      this.$store.dispatch("addToCart", {
        id: this.id,
        title: this.title,
        price: this.price,
        description: this.description,
        image: this.image,
      });
    },
  },
};
</script>

<style scoped>
/* li item */
li {
  margin: 1.5rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

/* product */
.product-container {
  display: flex;
}

.product-image-container {
  margin-right: 1rem;
}

.product-image-container img {
  height: 10rem;
  width: 10rem;
  object-fit: cover;
}

.product-text-container h3 {
  margin: 0 0 0.5rem 0;
}

.product-text-container h4 {
  margin: 0;
}

.product-actions-container {
  text-align: center;
}

.product-actions-container button {
  font: inherit;
  cursor: pointer;
  background-color: #45006d;
  color: white;
  border: 1px solid #45006d;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
}

.product-actions-container button:hover,
.product-actions-container button:active {
  background-color: #760ab4;
  border-color: #760ab4;
}
</style>
