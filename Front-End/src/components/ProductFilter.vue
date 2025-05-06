<script setup>
// import { brands } from '@/dummyData';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const selected = ref('')
let brands = ref([])
const emit = defineEmits(['filter'])

function filterByBrand() {
  emit('filter', selected.value.name)
};

function getBrands() {
  axios(
    {
      method: "GET",
      url: "http://127.0.0.1:8000/api/brands/"
    }
  ).then(res => brands.value = res.data)
}

onMounted(() => {
  getBrands()
})

</script>


<template>
  <div class="mb-4 pe-5 ">
    <h3 class="mb-5">Filters</h3>

    <label for="brand-filter" class="form-label">Filter by Brand</label>
    <select @change="filterByBrand()" v-model="selected" id="brand-filter" class="form-select ">
      <option value="">All Brands</option>
      <option v-for="item in brands" :key="item.id" :value="item">
        {{ item.name }}
      </option>
    </select>
  </div>
</template>