<template>
    <header class="laptop_Header montserrat-nav">
      <div class="laptop_Header_container">
        <ul class="laptop_header_nav">
          <li v-for="(page, index) in pages" :key="index">
            <router-link class="nav_link" :to="page.path" active-class="active">
              {{ page.name }}
            </router-link>
          </li>
        </ul>
            <div class="contacts">
                <div class="contacts_number">
                    <p class="contacts_number_text">
                        8(495) 781-42-14
                        <span class="contacts_number_text_2">
                            Горячая линия
                        </span>
                    </p>
                </div>    
                <div class="contacts_social_links">
                    <icons_1 name="tg"/>
                    <icons_1 name="vk"/>
                    <icons_1 name="ok"/>
                </div>
                <div class="contacts_geo">
                    <icons_1 name="geo" width="50px"/>
                    <div class="contacts_geo_text">
                        <p>
                        Москва<br>Московская Область
                        </p>    
                    </div>
                </div> 
            </div>
      </div>
    </header>
    <header class="second_laptop_header montserrat-nav">
        <div class="second_laptop_header_container">
            <div class="second_laptop_header_container_logo ">
                <span class="bebas-neue-regular">BETAPROTECT</span>
            </div>
            <div class="second_laptop_header_container_catalog">
                <div  class="second_laptop_header_container_catalog_button">
                    <icons_1 name="list"/>
                    Каталог
                    <icons_1 name="arrow"/> 
                </div>
            </div>
            <div class="second_laptop_header_container_input">
                <field></field>
            </div>
            <div class="second_laptop_header_container_buttons">
                <icons_1 name="tg"></icons_1>
                <icons_1 name="tg"></icons_1>
                <icons_1 name="tg"></icons_1>
                <icons_1 name="tg"></icons_1>
            </div>
        </div>
    </header>
  </template>
  <script setup>
  import icons_1 from '@/assets/icons/icons_1.vue'
  import field from '@/components/InputField.vue'
  import { commonRoutes } from '@/router'
  defineProps({
      pages: {
          type: Array,
          default: () => commonRoutes
      }
  })
  </script>

  <style scoped>
    .second_laptop_header, .laptop_Header{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .laptop_Header {
        color: #FAFAFA;
        background: #2e5846;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .second_laptop_header{
        position: sticky;
        top: 0;
        z-index: 1000; /* Чтобы хедер был поверх других элементов *
        /* Остальные существующие стили */
        background: rgb(188, 220, 206, 0.8);             
        color: #1d382c;
        font-weight: 900;
        font-size: 2.5rem;
    }
    .laptop_Header_container, .second_laptop_header_container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 1400px;
    }
    .second_laptop_header_container{
        padding: 1rem;
    }
    .laptop_header_nav {
        display: flex;
        gap: 2rem;
        align-items: center;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    
    .nav_link {
        color: #FAFAFA;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.3s ease;
        padding: 0.5rem 1rem;
        border-radius: 4px;
    }
    .contacts{
        display: flex;
        align-items: center;
        justify-content: center;
        gap:1rem;
    }
    .contacts_number_text{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .contacts_number_text_2{
        opacity: 0.6;
        font-size: 12px;
        text-align: center;
    }
    .contacts_social_links{
        display: flex;
        gap:0.5rem;
    }
    .contacts_geo{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .contacts_geo_text{
        font-size: 12px;
        text-align: center;
    }
    .contacts_geo::before,
    .contacts_social_links::before{
        opacity: 0.5;
        display: flex;
        align-items: center;
        content: "|";
        font-family: 'Courier New', Courier, monospace;
    }
    .second_laptop_header_container_catalog{
        color: #FAFAFA;
        display: flex;
        align-items: center;
        border: 1px solid #1d382c;
        padding: 0 1rem 0 1rem;
        border-radius: 4px;
        background-color: #2e5846;
    }
    .second_laptop_header_container_catalog_button{
        gap: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: medium;
    }
    .second_laptop_header_container {
        display: flex;
        gap: 1rem; /* Добавляем промежуток между элементами */
        align-items: center;
    }

    .second_laptop_header_container_input {
        flex: 1; /* Занимаем доступное пространство */
        max-width: 800px; /* Максимальная ширина при больших экранах */
        display: flex;
        gap: 0.5rem;
    }


    .second_laptop_header_container_buttons{
        gap: 1rem;
        display: flex;
    }

    /* Адаптация для мобильных устройств */
    @media (max-width: 768px) {
        .second_laptop_header_container {
            flex-wrap: wrap; /* Разрешаем перенос элементов */
        }
        
        .second_laptop_header_container_input {
            order: 1; /* Переносим поле поиска вниз */
            width: 100%;
            max-width: 100%;
        }
        
        .second_laptop_header_container_catalog {
            margin-left: auto; /* Выравниваем каталог справа */
        }
    }
</style>