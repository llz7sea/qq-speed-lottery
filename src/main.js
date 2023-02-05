import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store/store.js'
import element from "element-plus"
import 'element-plus/dist/index.css'
import eventBus from 'vue3-eventbus'

let app = createApp(App)
app.use(store)
app.use(element)
app.use(eventBus)
app.mount('#app')