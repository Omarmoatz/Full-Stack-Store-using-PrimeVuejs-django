<script setup>
defineProps({
  products: {
    type: Array,
    required: true
  }
  //,
  // loading: {
  //   required: true
  // }
})

</script>

<template>
  <h3 class="mb-5">Our Products</h3>

  <div  
  class="grid !grid-cols-1 max-sm:!grid-cols-1 sm:!grid-cols-2 md:!grid-cols-3 min-lg:!grid-cols-4 gap-3 p-4">

   <!-- Skeleton Cards -->
    <!-- <template v-if="loading">
      <div v-for="i in 4" :key="i" class="shadow p-4 rounded-xl space-y-2">
        <Skeleton height="250px" class="mb-2 rounded-2xl" />
        <Skeleton width="70%" height="1.5rem" />
        <Skeleton width="50%" height="1rem" />
        <Skeleton width="90%" height="2rem" class="mt-2" />
        <Skeleton width="100%" height="2.5rem" class="mt-4" />
      </div>
    </template> -->

    <Card v-for="item in products" :key="item.id" class=" shadow">
        <template #header>
            <img alt="user header" :src="item.image" style="width: 100%; height: 250px;" class=" rounded-t-2xl"/>
        </template>
        <template #title>{{ item.name }}</template>
        <template #subtitle>brand: {{ item.brand?.name || "no brand" }}</template>
        <template #content>
          <div class="flex">

            <p class="m-0 text-danger !mr-3  line-through">
              $ {{ item.price }}
            </p>

            <p class="m-0 text-success !mr-3" text->
              $ {{ item.price }}
            </p>

          </div>
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
