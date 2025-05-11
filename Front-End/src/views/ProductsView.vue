<script setup>
import ProductList from '@/components/ProductList.vue'
import ProductFilter from '@/components/ProductFilter.vue'
import Carousel from '@/components/Carousel.vue'
// import { products as allProducts } from '@/dummyData'
import { computed, onMounted, ref } from 'vue'
import axios from 'axios'


onMounted(() => {
  getProducts()
})


const selectedBrand = ref('')
const products = ref([])

const filteredProducts = computed(() => {
  return selectedBrand.value
    ? products.value.filter(p => p.brand.name === selectedBrand.value)
    : products.value
})

const setSelectedBrand = (brand) => {
  selectedBrand.value = brand
}

function getProducts() {
  axios(
    {
      method: "GET",
      url: "http://127.0.0.1:8000/api/products"
    }
  ).then(res => products.value = res.data)
}



</script>

<template>
  <div class="container my-5">
    <div class="row g-5 ">
      <div class="col-3">
        <ProductFilter @filter="setSelectedBrand" />
      </div>

      <div class="col-9">
        <ProductList :products="filteredProducts" />
      </div>
      
    </div>
  </div>

  <div class="container py-5 my-5">
    <div class="row justify-content-center my-5 ">
      <h2 class=" text-center my-5">Featured Products</h2>
      <Carousel :products="products"/>
    </div>
  </div>
</template>
