<script setup>
import { ref } from 'vue';

defineProps({
    products: {
        type: Array,
        required: true
    }
})

const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);

const getSeverity = (status) => {
    switch (status) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warn';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};

</script>


<template>


    <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular
        :autoplayInterval="4000">
        <template #item="slotProps">
            <div class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4">
                <div class="mb-4">
                    <div class="relative mx-auto">
                        <img :src="slotProps.data.image" :alt="slotProps.data.name" class="carousel-img w-full rounded" />
                        <Tag :value="slotProps.data.inventoryStatus"
                            :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute"
                            style="left:5px; top: 5px" />
                    </div>
                </div>
                <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
                <div class="d-flex justify-between items-center">
                    <div class="mt-0 font-semibold text-xl">${{ slotProps.data.price }}</div>
                    <span>
                        <Button icon="pi pi-heart" severity="secondary" outlined />
                        <Button icon="pi pi-shopping-cart" class="ms-2" />
                    </span>
                </div>
            </div>
        </template>
    </Carousel>

</template>

<style scoped>
.carousel-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
</style>
