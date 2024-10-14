<template>
  <div class="home">
    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/products">Products</router-link>
    </nav>

    <div class="content">
      <h1>Welcome!</h1>
      <p>Name: John Doe</p>
      <p>Program: Computer Science</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style scoped>
.home {
  background-image: url('@/assets/background.jpg'); /* Add your background image */
  background-size: cover;
  height: 100vh;
  color: white;
  text-align: center;
}

nav {
  padding: 20px;
}

nav a {
  margin: 0 15px;
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}

.content {
  margin-top: 50px;
}
</style>
