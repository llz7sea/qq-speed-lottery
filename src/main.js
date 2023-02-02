import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store/store.js'
import element from "element-plus"
import 'element-plus/dist/index.css'

let app = createApp(App)
app.use(store)
app.use(element)
app.mount('#app')