<template>
    <div class=" min-h-screen bg-surface-50 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
        <div
            class="bg-surface-0 dark:bg-surface-900 p-8 md:p-12 shadow-sm rounded-2xl w-full max-w-xl mx-auto flex flex-col gap-8 mt-5">
            <div class="flex flex-col items-center gap-4">
                <div class="flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14" width="33" height="32" viewBox="0 0 33 32"
                        fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M7.09219 2.87829C5.94766 3.67858 4.9127 4.62478 4.01426 5.68992C7.6857 5.34906 12.3501 5.90564 17.7655 8.61335C23.5484 11.5047 28.205 11.6025 31.4458 10.9773C31.1517 10.087 30.7815 9.23135 30.343 8.41791C26.6332 8.80919 21.8772 8.29127 16.3345 5.51998C12.8148 3.76014 9.71221 3.03521 7.09219 2.87829ZM28.1759 5.33332C25.2462 2.06 20.9887 0 16.25 0C14.8584 0 13.5081 0.177686 12.2209 0.511584C13.9643 0.987269 15.8163 1.68319 17.7655 2.65781C21.8236 4.68682 25.3271 5.34013 28.1759 5.33332ZM32.1387 14.1025C28.2235 14.8756 22.817 14.7168 16.3345 11.4755C10.274 8.44527 5.45035 8.48343 2.19712 9.20639C2.0292 9.24367 1.86523 9.28287 1.70522 9.32367C1.2793 10.25 0.939308 11.2241 0.695362 12.2356C0.955909 12.166 1.22514 12.0998 1.50293 12.0381C5.44966 11.161 11.0261 11.1991 17.7655 14.5689C23.8261 17.5991 28.6497 17.561 31.9029 16.838C32.0144 16.8133 32.1242 16.7877 32.2322 16.7613C32.2441 16.509 32.25 16.2552 32.25 16C32.25 15.358 32.2122 14.7248 32.1387 14.1025ZM31.7098 20.1378C27.8326 20.8157 22.5836 20.5555 16.3345 17.431C10.274 14.4008 5.45035 14.439 2.19712 15.1619C1.475 15.3223 0.825392 15.5178 0.252344 15.7241C0.250782 15.8158 0.25 15.9078 0.25 16C0.25 24.8366 7.41344 32 16.25 32C23.6557 32 29.8862 26.9687 31.7098 20.1378Z"
                            class="fill-surface-700 dark:fill-surface-200" />
                    </svg>
                </div>
                <div class="flex flex-col items-center gap-2 w-full">
                    <div
                        class="text-surface-900 dark:text-surface-0 text-2xl font-semibold leading-tight text-center w-full">
                        Create Your Account</div>
                    <div class="text-center w-full">
                        <span class="text-surface-700 dark:text-surface-200 leading-normal">Already have an
                            account?</span>
                        <router-link to="/login">
                            <a
                                class="text-primary font-medium ml-1 cursor-pointer hover:text-primary-emphasis">Login!</a>
                        </router-link>
                    </div>
                </div>
            </div>

            <Form v-slot="$form" :initial-values :resolver @submit="submitForm"
            class="flex flex-col gap-8 w-full bg-transparent">

                <div class="flex flex-col gap-1 w-full">
                    <InputGroup>
                        <InputGroupAddon>
                            <i class="pi pi-user"></i>
                        </InputGroupAddon>
                        <FloatLabel>
                            <InputText name="username" id="username" type="text" />
                            <label for="username">Username</label>
                        </FloatLabel>

                    </InputGroup>
                    <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">
                        {{ $form.username.error.message }}
                        <!-- <ul class="my-0 px-4 flex flex-col gap-1">
                                <li v-for="(err, index) in $form.username.errors" :key="index">
                                    {{err.message}}
                                </li>
                            </ul> -->
                    </Message>
                </div>

                <div class="flex flex-col gap-1 w-full">
                    <InputGroup>
                        <InputGroupAddon>
                            <i class="pi pi-envelope"></i>
                        </InputGroupAddon>
                        <FloatLabel>
                            <InputText type="email" name="email" id="email" />
                            <label for="email">Email</label>
                        </FloatLabel>
                    </InputGroup>
                    <Message v-if="$form.email?.invalid" severity="error" variant="simple" size="small">
                        {{ $form.email.error.message }}
                    </Message>
                </div>


                <div class="flex flex-col gap-1 w-full">
                    <InputGroup>
                        <InputGroupAddon>
                            <i class="pi pi-lock"></i>
                        </InputGroupAddon>
                        <FloatLabel variant="in">
                            <Password name="password" :feedback="false" toggleMask fluid />
                            <label for="password">Password</label>
                        </FloatLabel>
                    </InputGroup>

                    <Message v-if="$form.password?.error" severity="error" variant="simple" size="small">
                        <!-- {{ $form.password.error.message }} -->
                        <ul>
                            <li v-for="err in $form.password.errors">
                                {{ err.message }}
                            </li>
                        </ul>
                    </Message>
                </div>

                <div class="flex flex-col gap-1 w-full">
                    <InputGroup>
                        <InputGroupAddon>
                            <i class="pi pi-lock"></i>
                        </InputGroupAddon>
                        <FloatLabel variant="in">
                            <Password name="confirmPassword" :feedback="false" toggleMask fluid />
                            <label for="confirmPassword">Confirm Password</label>
                        </FloatLabel>
                    </InputGroup>

                    <Message v-if="$form.confirmPassword?.error" severity="error" variant="simple" size="small">
                        {{ $form.confirmPassword.error.message }}
                    </Message>
                </div>


                <div
                    class="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-3 sm:gap-0">
                    <div class="flex items-center gap-2">
                        <Checkbox id="rememberme1" v-model="checked1" :binary="true" />
                        <label for="rememberme1" class="text-surface-900 dark:text-surface-0 leading-normal">Remember
                            me</label>
                    </div>
                    <!-- <a class="text-primary font-medium cursor-pointer hover:text-primary-emphasis">Forgot your password?</a> -->
                </div>
                <Button label="Sign Up" icon="pi pi-user" type="submit"
                    class="w-full py-2 rounded-lg flex justify-center items-center gap-2">
                    <template #icon>
                        <i class="pi pi-user !text-base !leading-normal" />
                    </template>
                </Button>
            </Form>

        </div>
    </div>
</template>


<script setup>

import { ref } from 'vue';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'vue-router';



const checked1 = ref(true);
const route = useRouter()


const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const resolver = zodResolver(
    z.object({
        username: z.string()
            .min(1, "Username is required")
            .min(4, "Username Must be more than 4 chars"),

        email: z.string()
            .min(1, "Email is Required")
            .email("Invalid email format"),

        password: z.string()
            .min(1, "Password is required")
            .min(8, "Minimum is 8 Characters")
            .max(20, "Maximum is 20 Characters")
            .refine(value => /[a-z]/.test(value),
                "Must Contain Lowercase Letters"
            )
            .refine(value => /[A-Z]/.test(value),
                "Must Contain Uppercase Letters"
            )
            .refine(value => /[1-9]/.test(value),
                "Must Contain Numbers"
            )
            .refine(value => /[!@#$%^&*]/.test(value),
                "Must Contain Special Characters"
            ),

        confirmPassword: z.string()
            .min(1, "Confirm Password is required")
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "Confirm password does not match"
    })
)

const submitForm = (e) => {
    if (e.valid) {
        route.push('/')
    }
}




</script>
