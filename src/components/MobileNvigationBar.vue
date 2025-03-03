<template>
  <section class="mobile_nav" :style="customStyle">
    <div class="nav_header">
      <span class="title">Меню</span>
      <button @click="handleClose" class="close_btn">
        <icons_1 name="close"/>
      </button>
    </div>

    <nav class="nav_content">
      <h3 class="nav_title">Меню страниц</h3>
      <ul class="nav_list">
        <li 
          v-for="(page, index) in pages" 
          :key="index" 
          class="nav_item"
          @click="handleClose"
        >
          <router-link 
            :to="page.path" 
            class="nav_link"
            active-class="active"
          >
            {{ page.name }}
          </router-link>
        </li>
      </ul>
    </nav>

    <div class="contacts">
      <div class="phone_wrapper">
        <icons_1 name="phone"/>
        <a href="tel:+74957814214" class="phone">+7 495 781-42-14</a>
      </div>
      <icons_1 name="arrow"/>
    </div>

    <MobileCatalogMenu class="catalog" />
  </section>
</template>

<script setup>
import { commonRoutes } from '@/router'
import icons_1 from '@/assets/icons/icons_1.vue'
import MobileCatalogMenu from '@/components/MobileCatalogMenu.vue'

defineProps({
  customStyle: {
    type: Object,
    default: () => ({})
  },
  pages: {
    type: Array,
    default: () => commonRoutes
  }
})

const emit = defineEmits(['close-menu'])
const handleClose = () =>{
  emit('close-menu')
}
</script>

<style scoped>
.mobile_nav {
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.nav_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #2e5846;
  color: white;
}

.close_btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.nav_content {
  flex: 1;
  padding: 1rem;
}

.nav_title {
  text-align: center;
  margin: 1rem 0;
  color: #333;
}

.nav_list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav_item {
  margin: 0.5rem 0;
}

.nav_link {
  display: block;
  padding: 1rem;
  color: #333;
  text-decoration: none;
  border-radius: 8px;
  transition: background 0.3s ease;
}

.nav_link.active {
  background: rgba(46, 88, 70, 0.1);
  color: #2e5846;
  font-weight: 500;
}

.contacts {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #2e5846;
  margin: 1rem;
  border-radius: 8px;
  color: white;
}

.phone_wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.phone {
  color: inherit;
  text-decoration: none;
}

.arrow {
  transition: transform 0.3s ease;
}

.contacts:hover .arrow {
  transform: rotate(360deg);
}

.catalog {
  margin: 1rem;
  padding: 1rem;
}
</style>