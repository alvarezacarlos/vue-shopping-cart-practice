<template>
  <header>
    <h1><router-link to="/">Shop</router-link></h1>
    <nav>
      <ul>
        <li>
          <router-link to="/cart"
            >Cart<badge mode="elegant">{{
              cartProducts.quantity
            }}</badge></router-link
          >
        </li>
        <li><router-link to="/admin" v-if="isLogged">Admin</router-link></li>
      </ul>
    </nav>
    <div>
      <button v-if="!isLogged" @click="login">Login</button>
      <button v-if="isLogged" @click="logout">Logout</button>
    </div>
  </header>
</template>

<script>
import Badge from "@/ui/Badge/Badge.vue";

export default {  
  components: {
    Badge,
  },
  computed: {
    isLogged() {
      return this.$store.getters.userIsLogged;
    },
    cartProducts() {
      return this.$store.getters.cartProducts;
    },
  },
  methods: {
    login() {
      this.$store.dispatch("login");
    },
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped>
header {
  background-color: #fff;
  height: 5rem;
  margin: 0 auto;

  /* flex styles */
  display: flex;
  justify-content: space-around;
  align-items: center;
}

header h1 {
  font-size: 1.2rem;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;
}

/* 
li {
  margin: 0 1rem;
} */

a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  border-bottom: 2px solid transparent;
  padding-bottom: 0.25rem;
}

a:hover,
a:active,
a.router-link-active {
  color: #45006d;
  border-color: #45006d;
}

button {
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border: 1px solid #45006d;
  background-color: transparent;
  color: #45006d;
  border-radius: 30px;
}

button:hover,
button:active {
  background-color: #f0d5ff;
}
</style>
