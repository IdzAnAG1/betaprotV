<template>
  <!-- Динамическое переключение заголовка -->
  <MHeader v-if="isMobile" />
  <MobileCatalogMenu v-if="isMobile" />
  <LHeader v-else />
  <!-- Остальная часть разметки -->
  <router-view></router-view>
  <MobileFooter />
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import MHeader from '@/components/Mobileheader.vue';
import LHeader from '@/components/Laptopheader.vue'; // Новый компонент для десктопной версии
import MobileCatalogMenu from './components/MobileCatalogMenu.vue';
import MobileFooter from './components/MobileFooter.vue';
// Реактивная переменная для хранения состояния
const isMobile = ref(window.innerWidth <= 1024); // Проверяем ширину при загрузке
// Функция для обновления состояния при изменении размера окна
const handleResize = () => {
  isMobile.value = window.innerWidth <= 1024; // Обновляем значение при каждом ресайзе
  console.log('Ширина экрана:', window.innerWidth, 'isMobile:', isMobile.value); // Логирование для отладки
};
// Подписываемся на событие resize при монтировании компонента
onMounted(() => {
  window.addEventListener('resize', handleResize);
});
// Убираем слушатель при размонтировании компонента
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>
<style scoped>
</style>