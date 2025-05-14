<template>
    <div class="bg-surface-0 dark:bg-surface-950 px-6 md:px-12 lg:px-20 py-20 text-center">
        <div class="flex flex-col gap-6">
            <div class="flex flex-col items-center gap-4">
                <div class="font-bold text-3xl leading-tight">
                    <span class="text-surface-900 dark:text-surface-0">One Product, </span>
                    <span class="text-primary-500 dark:text-primary-400">Many Solutions</span>
                </div>
                <div class="text-surface-500 dark:text-surface-400 leading-tight">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</div>
            </div>
            <div class="grid !grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 gap-3 p-4">

                <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-50 animate-duration-1000' }" 
                v-for="item in items" class="w-full rounded-md p-4">
                    <span class="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-surface-0 dark:bg-surface-800 shadow mx-auto">
                        <i :class="`${item.icon} !text-2xl lg:!text-3xl text-primary-500 dark:text-primary-400`" />
                    </span>
                    <div class="flex flex-col gap-1">
                        <div class="text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight">{{item.head}}</div>
                        <p class="text-surface-500 dark:text-surface-400 leading-normal">{{item.body}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const items = [
    {
        icon : "pi pi-desktop",
        head : "Built for Developers",
        body : "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        icon : "pi pi-lock",
        head : "End-to-End Encryption",
        body : "cursus metus aliquam eleifend in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        icon : "pi pi-face-smile",
        head : "Easy to Use",
        body : "Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper."
    },
    {
        icon : "pi pi-globe",
        head : "Fast & Global Support",
        body : "Fermentum et sollicitudin ac orci phasellus velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        icon : "pi pi-github",
        head : "Open Source",
        body : "tincidunt praesent semper feugiat. Sed in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        icon : "pi pi-shield",
        head : "Trusted Security",
        body : "Mattis rhoncus urna neque viverra justo nec ultrices velit esse cillum dolore eu fugiat nulla pariatur.",
    },
]


</script>
