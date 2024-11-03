<template>
  <navbar :is-logged="isLoggedIn" />
  <router-view></router-view>
</template>

<script>
import Navbar from "./components/navbar/Navbar.vue";

export default {
  data() {
    return {
      products: [
        {
          id: "p1",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg",
          title: "Book Collection",
          description:
            "A collection of must-read books. All-time classics included!",
          price: 99.99,
        },
        {
          id: "p2",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
          title: "Mountain Tent",
          description: "A tent for the ambitious outdoor tourist.",
          price: 129.99,
        },
        {
          id: "p3",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg",
          title: "Food Box",
          description:
            "May be partially expired when it arrives but at least it is cheap!",
          price: 6.99,
        },
      ],
      cartProducts: { products: [], total: 0, quantity: 0 },
      isLoggedIn: false,
    };
  },
  provide() {
    return {
      products: this.products,
      cartProducts: this.cartProducts,
      addToCart: this.addToCart,
      removeFromCart: this.removeFromCart,
      login: this.login,
      logout: this.logout,
      isLoggedIn: this.isLoggedIn
    };
  },
  components: {
    Navbar,
  },
  methods: {
    addToCart(product) {
      const productInCartIndex = this.cartProducts.products.findIndex(
        (cartProduct) => cartProduct.productId === product.id
      );
      if (productInCartIndex >= 0) {
        this.cartProducts.products[productInCartIndex].quantity++;
      } else {
        const newProduct = {
          productId: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          quantity: 1,
        };
        this.cartProducts.products.push(newProduct);
      }
      this.cartProducts.quantity++;
      this.cartProducts.total += product.price;
    },
    removeFromCart(productId) {
      const productInCartIndex = this.cartProducts.products.findIndex(
        (cartProduct) => cartProduct.productId === productId
      );
      if (productInCartIndex >= 0) {
        const productInCart = this.cartProducts.products[productInCartIndex];
        this.cartProducts.products.splice(productInCartIndex, 1);
        this.cartProducts.quantity -= productInCart.quantity;
        this.cartProducts.total -= productInCart.price * productInCart.quantity;
      }
    },
    login() {
      this.isLoggedIn = true;
    },
    logout() {
      this.isLoggedIn = false;
    },
  },
};
</script>
