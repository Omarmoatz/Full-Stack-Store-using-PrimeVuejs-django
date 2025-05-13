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


    
  <div class="grid !grid-cols-1 sm:!grid-cols-2 md:!grid-cols-3 lg:!grid-cols-4 gap-3 p-4">


    <Card v-for="item in products" :key="item.id" class=" shadow">
        <template #header>
            <img alt="user header" :src="item.image" style="width: 100%; height: 250px;" />
        </template>
        <template #title>{{ item.name }}</template>
        <template #subtitle>brand: {{ item.brand?.name || "no brand" }}</template>
        <template #content>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam
            </p>
        </template>
        <template #footer>
            <div class="flex gap-4 mt-1">
                <RouterLink :to="`/${item.id}`" class="w-full">
                  <Button label="See Details"  />
                </RouterLink>
            </div>
        </template>
    </Card>
  </div>
  
</template>
<!-- <div  v-for="item in products" :key="item.id" class="col-lg-3 g-3" >

  <div class="card border-black shadow p-2">
    <img :src="item.image" class="card-img-top" :alt="item.image" style="width: 100%; height: 250px;">
    <div class="card-body">
      <h5 class="card-title">{{ item.name }}</h5>
      <p class="card-text">{{ item.brand?.name || "no brand" }}</p>
      <RouterLink :to="`/${item.id}`" class="btn btn-outline-secondary">See Details</RouterLink>
    </div>
  </div>

</div> -->
