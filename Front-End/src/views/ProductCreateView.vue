<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const productName = ref('')
const productBrand = ref('')
const productPrice = ref('')
const productImage = ref(null)
const brands = ref([])

const route = useRouter()

const handleFileChange = (event) => {
  productImage.value = event.target.files[0]
}

const addProduct = (e) => {
    e.preventDefault()
  try {
    const formData = new FormData()
    formData.append('name', productName.value)
    formData.append('brand', productBrand.value.id)
    formData.append('price', productPrice.value)
    formData.append('image', productImage.value)

    axios.post('http://127.0.0.1:8000/api/products/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then(route.push('/'))

  } catch (error) {
    console.error('Failed to add product:', error)
  }
}


onMounted(()=>{
    axios(
        {
            method:"GET",
            url:"http://127.0.0.1:8000/api/brands/"
        }
    ).then(res => brands.value = res.data)

    console.log(productBrand);
    
})
</script>

<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-4 border p-5 m-5 bg-body-tertiary">
        <h3 class="my-5">Add new Product</h3>
        <form @submit.prevent="addProduct">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input v-model="productName" type="text" class="form-control" id="name" required>
          </div>

          <div class="mb-3">
            <label for="brand" class="form-label">Brand</label>
            <select v-model="productBrand" type="text" class="form-control" id="brand" required>
                <option value="">choose the brand</option>
                <option v-for="item in brands" :key="item.id" :value="item">{{ item.name }}</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="price" class="form-label">Price</label>
            <input v-model="productPrice" type="number" class="form-control" id="price" required>
          </div>

          <div class="mb-3">
            <label for="formFile" class="form-label">Image</label>
            <input class="form-control" type="file" id="formFile" @change="handleFileChange" required>
          </div>

          <button type="submit" class="btn btn-primary">Add</button>
        </form>
      </div>
    </div>
  </div>
</template>
