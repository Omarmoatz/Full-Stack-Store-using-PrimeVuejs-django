<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import { useRoute } from 'vue-router'


const route = useRoute()

// Define routes where the navbar should be hidden
// const noNavbarRoutes = ['/login', '/register']
</script>

<template>
  <NavBar v-if="!route.meta.hideNavbar" />

  <RouterView />

  <div class="p-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="i in 8" :key="i" class="bg-blue-300 p-6 rounded-lg text-white text-center font-bold">
        Card {{ i }} 
      </div>
    </div>
  </div>

</template>
