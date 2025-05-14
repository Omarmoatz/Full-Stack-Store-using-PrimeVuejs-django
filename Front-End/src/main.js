import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura'
import Lara from '@primeuix/themes/lara'
import Nora from '@primeuix/themes/nora'

import Menubar from 'primevue/menubar';
import Badge from 'primevue/badge';
import Avatar from 'primevue/avatar';

import { useForm } from '@primevue/forms/useform';
import { Form } from '@primevue/forms';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import FileUpload from 'primevue/fileupload';
import Checkbox from 'primevue/checkbox';

import Carousel from 'primevue/carousel';
import { Button, Card, IconField, InputIcon, Message, Password, Ripple, Select, Tag } from 'primevue';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import KeyFilter from 'primevue/keyfilter';
import Skeleton from 'primevue/skeleton';



import AnimateOnScroll from 'primevue/animateonscroll';

import 'primeicons/primeicons.css'


import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap"

import '../tailwind.config.js';
import './assets/tailwind.css';


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

app.component('Menubar', Menubar)
app.component('Badge', Badge)
app.component('Avatar', Avatar)

app.component('InputIcon', InputIcon)
app.component('IconField', IconField)
app.component('InputGroup', InputGroup)
app.component('InputGroupAddon', InputGroupAddon)
app.component('InputText', InputText)
app.component('FloatLabel', FloatLabel)
app.component('FileUpload', FileUpload)
app.component('Checkbox', Checkbox)

app.component('Tag', Tag)
app.component('Carousel', Carousel)
app.component('Button', Button)
app.component('Select', Select)
app.component('Message', Message)
app.component('Card', Card)
app.component('Skeleton', Skeleton)

app.component('Form', Form)
app.component('Password', Password)

app.component('Toast', Toast);
app.use(ToastService);

app.directive('keyfilter', KeyFilter);
app.directive('Ripple', Ripple);
app.directive('animateonscroll', AnimateOnScroll);



app.mount('#app')
