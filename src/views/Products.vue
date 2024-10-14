<template>
  <div>
    <ProductForm @add-product="addProduct" />
    <ProductList :products="products" @update-product="updateProduct" />
  </div>
</template>

<script>
import ProductForm from '@/components/ProductForm.vue';
import ProductList from '@/components/ProductList.vue';

export default {
  components: {
    ProductForm,
    ProductList
  },
  data() {
    return {
      products: []
    };
  },
  methods: {
    // Add a new product to the list
    addProduct(newProduct) {
      this.products.push(newProduct);
    },
    // Update a product in the list
    updateProduct({ index, product }) {
      this.products.splice(index, 1, product);
    }
  }
};
</script>

<style scoped>
div {
  padding: 20px;
}
</style>
