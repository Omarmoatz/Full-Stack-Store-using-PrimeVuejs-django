<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useToast } from 'primevue/usetoast';


const productName = ref('')
const productBrand = ref('')
const productPrice = ref('')
const productImage = ref(null)
const brands = ref([])
const toast = useToast();

const route = useRouter()

onMounted(() => {
  axios.get(
    "http://127.0.0.1:8000/api/brands/"   
  ).then(res => brands.value = res.data)

})

const handleFileChange = (event) => {
  productImage.value = event.files[0]
  toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded Successfully', life: 6000 });

}

const addProduct = () => {
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
    })
    
    toast.add({ severity: 'success', summary: 'Success', detail: 'Product added Successfully', life: 10000 });
    route.push('/')

  } catch (error) {
    toast.add({ severity: 'error', summary: 'Failed to add product', detail: error, life: 5000 });
    console.error('Failed to add product:', error)
  }
}

</script>

<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-4 border p-5 m-5 bg-body-tertiary">
        <h3 class="my-5">Add new Product</h3>

        <!-- <form v-slot="$form" @submit.prevent="addProduct"> -->
        <Form v-slot="$form" @submit="addProduct" class="flex justify-center flex-col gap-4 w-full md:w-56">

          <div class="card flex flex-col md:items-end md:flex-row">
            <InputGroup>
              <InputGroupAddon>
                <i class="pi pi-user"></i>
              </InputGroupAddon>
              <FloatLabel>
                <InputText name="productName" id="productName" v-model="productName" required />
                <label for="productName">Name</label>
              </FloatLabel>
            </InputGroup>
          </div>

          <div class="card flex flex-col md:items-end md:flex-row gap-4 mt-2">
            <InputGroup>
              <InputGroupAddon>$</InputGroupAddon>
              <FloatLabel variant="in">
                <InputText id="Price" v-model="productPrice" v-keyfilter.int  required/>
                <label for="Price">Price</label>
              </FloatLabel>
              <InputGroupAddon>.00</InputGroupAddon>
            </InputGroup>
          </div>

          <div class="card flex flex-col md:items-end md:flex-row gap-4 mt-2">
            <InputGroup>
              <InputGroupAddon>www</InputGroupAddon>
              <FloatLabel variant="on">
                <InputText id="Url" />
                <label for="Url">Url</label>
              </FloatLabel>
            </InputGroup>
          </div>

          <div class="card grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <InputGroup>
              <InputGroupAddon>
                <i class="pi pi-map"></i>
              </InputGroupAddon>
              <Select v-model="productBrand" :options="brands" optionLabel="name" placeholder="Brand" required/>
            </InputGroup>
          </div>

          <div class=" mt-2">
              <Toast />
              <FileUpload ref="productImage" mode="basic" name="demo[]" accept="image/*" :maxFileSize="1000000" @select="handleFileChange" />
          </div>

          <button type="submit" class=" p-button mt-2" severity="secondary">Add</button>
        </Form>
      </div>
    </div>
  </div>
</template>
