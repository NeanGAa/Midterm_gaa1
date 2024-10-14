<template>
  <div>
    <h2>Add a New Product</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Product Name:</label>
        <input v-model="product.name" type="text" id="name" required />
      </div>
      <div>
        <label for="price">Price:</label>
        <input v-model.number="product.price" type="number" id="price" required />
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea v-model="product.description" id="description" required></textarea>
      </div>
      <button type="submit">Add Product</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: '',
        price: 0,
        description: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Emit the new product to the parent
      this.$emit('add-product', { ...this.product });

      // Reset form fields
      this.product.name = '';
      this.product.price = 0;
      this.product.description = '';
    }
  }
};
</script>

<style scoped>
form {
  margin-bottom: 20px;
}

input, textarea {
  display: block;
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
}

button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
