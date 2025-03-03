<template>
  <MobileNvigationBar :style="{display:menuIsOpen?'block':'none'}" @close-menu="closeMenu"></MobileNvigationBar>
    <header :style="{display : isInvise?'flex':'none'}" class="SecondHeader">
      <!-- Логотип -->
      <div class="logo bebas-neue-regular">
        BETAPROTECT
      </div>
      <!-- Форма поиска -->
      <form class="search_form montserrat-nav" action="/search" method="GET">
        <input type="text" placeholder="Поиск..." aria-label="Поиск товаров">
      </form>
      <!-- Менюшка -->
      <div @click="openMenu" class="other">
        <icons_1 name="menu"/> 
      </div>
    </header>
</template>
  
<script setup>
  import { ref } from "vue";
  import MobileNvigationBar from "./MobileNvigationBar.vue";
  import icons_1 from "@/assets/icons/icons_1.vue";

  const menuIsOpen = ref(false)
  const isInvise = ref(true)

  const openMenu = () => {
    menuIsOpen.value = true;
    isInvise.value = false;
  }

  const closeMenu = () => {
    menuIsOpen.value = false;
    isInvise.value = true;
  }
</script>
  
<style scoped>
  /* Стили для шапки */
  .SecondHeader {
    display: flex;
    align-items: center; /* Вертикальное центрирование элементов */
    justify-content: space-between; /* Распределение элементов по краям */
    background-color: #2e5846;
    padding: 0.5rem 1rem; /* Отступы для удобства просмотра */
    font-size: clamp(14px, 1.5rem, 22px); /* Адаптивный размер шрифта */
  }
  
  /* Стили для логотипа */
  .logo {
    color: white;
    font-size: 1.5rem; /* Размер шрифта можно также сделать адаптивным */
    font-weight: bold;
  }
  
  /* Стили для формы поиска */
  .search_form {
    display: flex; /* Для правильного расположения элементов внутри формы */
    gap: 0.5rem; /* Пространство между полем ввода и кнопкой */
  }
  
  .search_form input {
    padding: 0.4rem 1rem; /* Внутренние отступы */
    border: none; /* Убираем границу */
    border-radius: 3px; /* Закругляем углы */
    background-color: rgba(255, 255, 255, 0.8); /* Полупрозрачный фон */
    color: #333; /* Цвет текста */
    width: 100%; /* Занимает всю доступную ширину */
    transition: background-color 0.2s ease; /* Плавный переход при hover */
  }
  
  .search_form input:focus {
    outline: none; /* Убираем стандартный фокус */
    background-color: white; /* Изменяем цвет фона при фокусе */
  }
  
  /* Стили для кнопки поиска */
  .submit_button {
    padding: 0.5rem 1rem; /* Внутренние отступы */
    border: none; /* Убираем границу */
    border-radius: 50%; /* Круглая форма */
    background-color: #007bff; /* Голубой цвет */
    color: white; /* Белый текст */
    font-size: 1rem; /* Размер шрифта */
    cursor: pointer; /* Изменяем курсор на "пальчик" */
    transition: background-color 0.2s ease; /* Плавный переход при hover */
  }
  
  .submit_button:hover {
    background-color: #0056b3; /* Тёмно-голубой цвет при наведении */
  }

  .other{
    display: flex;
  }
  
  /* Адаптивность */
  @media (max-width: 768px) {
    .SecondHeader {
      flex-direction: row; /* Элементы располагаются гориз  онтально */
      align-items: center; /* Центрирование элементов */
      gap: 0.5rem; /* Пространство между элементами */
    }
  
    .search_form {
      width: 100%; /* Форма занимает всю ширину */
    }
  }
</style>