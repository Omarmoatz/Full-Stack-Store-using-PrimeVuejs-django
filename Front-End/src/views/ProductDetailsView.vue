<script setup>

import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { products } from '@/dummyData'

const product = ref(
  products.find(p => p.id == useRoute().params.productId)
)

</script>

<template>
    <div class="container my-5 p-5 border " v-if="product">
      <div class="row g-5 ">

        <div class="col-lg-6 ps-5">
          <img :src="product.image" class="img-fluid rounded-start" :alt="product.name" />
        </div>

        <div class="col-md-6">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">
              {{ product.description || 'No description available.' }}
            </p>
            <p class="card-text">
              <small class="text-muted">brand: {{ product.brand }}</small>
            </p>
            <p class="card-text">
              <small class="text-muted">Price: ${{ product.price }}</small>
            </p>

            <div class="flex">
              <form action="">
                <input class="mx-4" type="number" name="" id="">
                <button class="btn btn-warning px-3">Add to Cart</button>
              </form>
            </div>
          <RouterLink to="/" class="btn btn-primary mt-5">Back to Product Lists</RouterLink>
            
          </div>
        </div>

      </div>
    </div>
  
    <div v-else class="text-center mt-5">
      <h3>Product not found.</h3>
    </div>
  </template>
