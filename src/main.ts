import { createApp } from 'vue'
import { vuetify, pinia } from './vuetify'

import App from './App.vue'

import '@base/assets/stylesheets/main.scss'

const app = createApp(App)

app.use(vuetify)

app.mount('#app')
