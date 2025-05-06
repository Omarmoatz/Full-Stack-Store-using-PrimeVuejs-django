<script setup>
import ProductList from '@/components/ProductList.vue'
import ProductFilter from '@/components/ProductFilter.vue'
import { products as allProducts } from '@/dummyData'
import { computed, ref } from 'vue'

const selectedBrand = ref('')
const products = ref(allProducts)

const filteredProducts = computed(() => {
  return selectedBrand.value 
  ? products.value.filter(p => p.brand === selectedBrand.value)
  : products.value
})

const setSelectedBrand = (brand) => {  
  selectedBrand.value = brand
}

</script>

<template>
  <div class="container my-5">
    <div class="row g-5 ">

      <div class="col-3">
        <ProductFilter @filter="setSelectedBrand"/>
      </div>

      <div class="col-9">
        <ProductList :products="filteredProducts" />
      </div>

    </div>
  </div>
</template>
