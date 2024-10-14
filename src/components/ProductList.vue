<template>
  <div>
    <h2>Product List</h2>
    <ul v-if="products.length > 0">
      <li v-for="(product, index) in products" :key="index">
        <div v-if="!isEditing(index)">
          <strong>{{ product.name }}</strong> - ${{ product.price }}
          <p>{{ product.description }}</p>
          <button @click="startEditing(index)">Edit</button>
        </div>

        <div v-else>
          <input v-model="editableProduct.name" type="text" placeholder="Product Name" />
          <input v-model.number="editableProduct.price" type="number" placeholder="Product Price" />
          <textarea v-model="editableProduct.description" placeholder="Product Description"></textarea>
          <button @click="saveProduct(index)">Save</button>
          <button @click="cancelEditing()">Cancel</button>
        </div>
      </li>
    </ul>
    <p v-else>No products available.</p>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      editingIndex: -1,
      editableProduct: {
        name: '',
        price: 0,
        description: ''
      }
    };
  },
  methods: {
    startEditing(index) {
      this.editingIndex = index;
      this.editableProduct = { ...this.products[index] }; // Copy the product data for editing
    },
    isEditing(index) {
      return this.editingIndex === index;
    },
    saveProduct(index) {
      // Emit the updated product to the parent
      this.$emit('update-product', { index, product: this.editableProduct });
      this.cancelEditing();
    },
    cancelEditing() {
      this.editingIndex = -1;
      this.editableProduct = { name: '', price: 0, description: '' };
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 15px;
}

input, textarea {
  margin-bottom: 10px;
  width: 100%;
  padding: 8px;
}

button {
  margin-right: 10px;
  padding: 8px 16px;
}
</style>
