import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura'
import Lara from '@primeuix/themes/lara'
import Nora from '@primeuix/themes/nora'

import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import { Message, Select } from 'primevue';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import KeyFilter from 'primevue/keyfilter';


import 'primeicons/primeicons.css'


import './assets/tailwind.css';
// import tailwindcss from './tailwind.config.js';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { useForm } from '@primevue/forms/useform';
import { Form } from '@primevue/forms';


const app = createApp(App)

app.use(router)

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: '.my-app-dark',
            cssLayer: false
        }
    }
});

// useForm
app.component('InputGroup', InputGroup)
app.component('InputGroupAddon', InputGroupAddon)
app.component('InputText', InputText)
app.component('FloatLabel', FloatLabel)
app.component('Select', Select)
app.component('Message', Message)
app.component('Form', Form)

app.use(ToastService);
app.component('Toast', Toast);

app.directive('keyfilter', KeyFilter);

app.mount('#app')
