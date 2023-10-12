import './style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@fortawesome/fontawesome-svg-core'
import 'tailwindcss/tailwind.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
