<script setup>
import { brands } from '@/dummyData';
import { ref } from 'vue';

const selected = ref('')
const emit = defineEmits(['filter'])

function filterByBrand(){  
  emit('filter', selected.value.name)    
}; 
</script>


<template>
  <div class="mb-4 pe-5 ">
    <h3 class="mb-5">Filters</h3>

    <label for="brand-filter" class="form-label">Filter by Brand</label>
    <select @change="filterByBrand()" v-model="selected" id="brand-filter" class="form-select ">
      <option value="">All Brands</option>
      <option v-for="item in brands" :key="item.id" :value="item" >
        {{ item.name }}
      </option>
    </select>
  </div>
</template>