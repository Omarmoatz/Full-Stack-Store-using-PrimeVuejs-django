<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import { useRoute } from 'vue-router'


const route = useRoute()

// Define routes where the navbar should be hidden
// const noNavbarRoutes = ['/login', '/register']
</script>

<template>
  <!-- Show Navbar unless current route is in the hidden list -->
  <NavBar v-if="!route.meta.hideNavbar" />

  <RouterView />
</template>
