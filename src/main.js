import { createApp } from 'vue'
import './style.css'
import router from './router'/* Импортируем роутер из папки src/router */
import App from './App.vue'

const app = createApp(App)
app.use(router) /* Подключаем роутер */
app.mount("#app")
