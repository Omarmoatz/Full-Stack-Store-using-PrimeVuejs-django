<script setup>
defineProps({
  products: {
    type: Array,
    required: true
  }
})

</script>

<template>
  <h3 class="mb-5">Our Products</h3>

  <div class="row">
    <div  v-for="item in products" :key="item.id" class="col-lg-3 g-3" >

      <div class="card border-black shadow p-2">
        <img :src="item.image" class="card-img-top" :alt="item.image" style="width: 100%; height: 65%;">
        <div class="card-body">
          <h5 class="card-title">{{ item.name }}</h5>
          <p class="card-text">{{ item.brand.name }}</p>
          <RouterLink :to="`/${item.id}`" class="btn btn-warning">Go to Details</RouterLink>
        </div>
      </div>

    </div>
  </div>


</template>
