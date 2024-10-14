<template>
  <div id="app">
    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/products">Products</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
nav {
  padding: 20px;
  text-align: center;
}

nav a {
  margin: 0 15px;
  text-decoration: none;
  color: #42b983;
}

nav a:hover {
  text-decoration: underline;
}

#app {
  text-align: center;
}
</style>
