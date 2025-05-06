<script>


</script>


<template>

    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-4 border p-5 m-5">
                <h3 class="my-5">Add new Product</h3>

                <form>
                    <div class="mb-3">
                        <label for="name" class="form-label">name</label>
                        <input type="text" class="form-control" id="name" >
                    </div>
                    <div class="mb-3">
                        <label for="brand" class="form-label">brand</label>
                        <input type="text" class="form-control" id="brand">
                    </div>
                    <div class="mb-3">
                        <label for="price" class="form-label">price</label>
                        <input type="number" class="form-control" id="price">
                    </div>
                    <div class="mb-3">
                        <label for="formFile" class="form-label">Image</label>
                        <input class="form-control" type="file" id="formFile">
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Agree for our policy</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Add</button>
                </form>
            </div>

        </div>
    </div>





</template>