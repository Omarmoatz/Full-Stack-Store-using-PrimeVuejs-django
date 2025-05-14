<script setup>
import ProductList from '@/components/ProductList.vue'
import ProductFilter from '@/components/ProductFilter.vue'
import Carousel from '@/components/Carousel.vue'
// import { products as allProducts } from '@/dummyData'
import { computed, onMounted, ref } from 'vue'
import axios from 'axios'
import OurService from '@/components/OurService.vue'


onMounted(() => {
  getProducts()
})


const selectedBrand = ref('')
const products = ref([])
const loading = ref(true)

const filteredProducts = computed(() => {
  return selectedBrand.value
    ? products.value.filter(p => p.brand.name === selectedBrand.value)
    : products.value
})

const setSelectedBrand = (brand) => {
  selectedBrand.value = brand
}

async function getProducts() {
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/products")
    products.value = res.data
  } catch (e) {
    console.error("Error fetching products", e)
  }
}



</script>

<template>
  <div class="py-50">
    <div class="px-30 ">
      <div class="grid grid-cols-[200px_auto] max-sm:!grid-cols-1 sm:!grid-cols-1 md:!grid-cols-1 lg:!grid-cols-[200px_auto]">
        <div >
          <ProductFilter @filter="setSelectedBrand" />
        </div>

        <div >
          <ProductList :products="filteredProducts"/>
        </div>

      </div>
    </div>

    <div class="container py-5 my-5">
      <div class=" grid-cols-1 ">
        <h2 class=" text-center my-5">Featured Products</h2>
        <Carousel :products="products" />
      </div>
    </div>


      <div class=" grid !grid-cols-1">
        <OurService/>
      </div>
  </div>



</template>
