<script setup >
</script>



<template>
  <nav class="navbar navbar-expand-lg bg-secondary">
  <div class="container-fluid">
    <RouterLink class="navbar-brand" to="/">Store</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link " to="/add">Add New Product</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style scoped>

</style>
