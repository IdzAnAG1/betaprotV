import { createRouter,createWebHashHistory, createWebHistory } from "vue-router"; /* Импорт из пакета vue-router */
import HomeView from '@/views/HomeView.vue';
import About from '@/views/About.vue'; /* Импорт из моей папки views */
const routes =  [ /* Создание константы routes для обозначения маршрутов */
    { /* Маршрут '/' - Home */
        path : '/',
        name : 'Home',
        component : HomeView
    },
    { /* Маршрут '/' - Home */
        path : '/about',
        name : 'About',
        component : About
    },
    { /* Маршрут '/' - Home */
        path : '/',
        name : 'Home',
        component : HomeView
    },
    { /* Маршрут '/' - Home */
        path : '/',
        name : 'Home',
        component : HomeView
    },
    { /* Маршрут '/' - Home */
        path : '/',
        name : 'Home',
        component : HomeView
    },
    { /* Маршрут '/' - Home */
        path : '/',
        name : 'Home',
        component : HomeView
    },
]   
const router = createRouter({
    history: createWebHistory(), routes
});
export default router;


export const commonRoutes = [
    { name: 'Главная', path: '/' },
    { name: 'О нас', path: '/about' },
    { name: 'Сертификаты', path: '/certificates' },
    { name: 'Доставка', path: '/delivery' },
    { name: 'Товары', path: '/products' }
  ]