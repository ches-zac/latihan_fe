import './assets/main.css'

import { createApp } from 'vue' // import fungsi createApp bawaan dari vue
import { createPinia } from 'pinia' // library state management di vue

import App from './App.vue' // komponen utama aplikasis
import router from './router' // router vue untuk navigasi halaman

const app = createApp(App) // membuat instance aplikasi vue

app.use(createPinia()) // menggunakan pinia sebagai state management
app.use(router) // menggunakan router untuk navigasi

app.mount('#app') // mount aplikasi ke elemen dengan id 'app' di index.html
