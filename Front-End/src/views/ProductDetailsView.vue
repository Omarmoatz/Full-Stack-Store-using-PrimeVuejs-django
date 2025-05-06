<script setup>

import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
// import { products } from '@/dummyData'
import axios from 'axios'

const product = ref('')

function getSingleProduct(){
  axios(
    {
      method:"GET",
      url:`http://127.0.0.1:8000/api/products/${useRoute().params.productId}`
    }
  ).then(res => product.value = res.data)
}

onMounted(()=>{
  getSingleProduct()
})

</script>

<template>
  <div class="container my-5 p-5 border " v-if="product">
    <div class="row g-5 ">

      <div class="col-lg-6 ps-5">
        <img :src="product.image" class="img-fluid rounded-start" :alt="product.name" style="width: 100%; height: 650px;"/>
      </div>

      <div class="col-md-6">
        <div class="card-body">
          <h5 class="card-title mt-5 mb-2">{{ product.name }} description</h5>
          <p class="card-text">
            <small class="text-muted">brand: {{ product.brand.name }}</small>
          </p>
          <p class="card-text">
            <small class="text-muted">Price: ${{ product.price }}</small>
          </p>
          <p class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, eligendi soluta dolor libero unde
            blanditiis ducimus aliquid maiores magni sint fuga, velit voluptas minus deleniti architecto recusandae!
            Veniam, velit minus!
          </p>

          <div class="flex my-5 py-5">
            <form action="">
              <input class="mx-4" type="number" name="" id=""> <!--  add a counter  -->
              <button class="btn btn-success px-3">Add to Cart</button>
            </form>
          </div>
          <RouterLink to="/" class="btn btn-secondary mt-5">Back to Product Lists</RouterLink>

        </div>
      </div>

    </div>
  </div>

  <div v-else class="text-center mt-5">
    <h3>Product not found.</h3>
  </div>
</template>
