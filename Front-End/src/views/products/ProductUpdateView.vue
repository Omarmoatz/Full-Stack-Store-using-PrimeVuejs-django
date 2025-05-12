<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
let brands = ref([])
let product = ref({})

onMounted(() => {
    axios.get(
        `http://127.0.0.1:8000/api/products/${route.params.productId}`
    ).then(res => product.value = res.data)

    axios.get(
        "http://127.0.0.1:8000/api/brands/"
    ).then(res => brands.value = res.data)

})


const handleProductImage = (event) => {
    product.value.image = event.target.files[0]
}

function updateProduct() {
    const formData = new FormData()
    formData.append('name', product.value.name)
    formData.append('price', product.value.price)
    formData.append('brand', product.value.brand.id || product.value.brand)
    
    if (typeof(product.value.image) != typeof("")) {
        formData.append('image', product.value.image)
    }

    axios.patch(
        `http://127.0.0.1:8000/api/products/${route.params.productId}/`,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }

    ).then(() => {
        router.push(`/${route.params.productId}/`)

    }).catch(err => {
        console.error(err.response?.data || err)
    })
}


</script>



<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-4 border p-5 m-5 bg-body-tertiary">
                <h3 class="my-5">Update Product</h3>
                <form @submit.prevent="updateProduct()">
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input v-model="product.name" type="text" class="form-control" id="name" required>
                    </div>

                    <div class="mb-3">
                        <label for="brand" class="form-label">Brand</label>
                        <select v-model="product.brand" class="form-control" id="brand" required>
                            <option value="">choose the brand</option>
                            <option v-for="item in brands" :key="item.id" :value="item">{{ item.name }}</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="price" class="form-label">Price</label>
                        <input v-model="product.price" type="number" class="form-control" id="price" required>
                    </div>

                    <div class="mb-3">
                        <label for="formFile" class="form-label">Image</label>
                        <div v-if="product.image">
                            <img :src="product.image" alt="Current product image" style="width: 100%; height: 200px;"
                                class="mb-2" />
                        </div>
                        <input @change="handleProductImage" class="form-control" type="file" id="formFile"
                            :required="!product.image">
                    </div>

                    <button type="submit" class="btn btn-primary">update</button>
                </form>
            </div>
        </div>
    </div>
</template>