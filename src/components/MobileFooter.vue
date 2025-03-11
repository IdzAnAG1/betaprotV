<template>
    <footer class="m_footer montserrat-nav">
      <div class="m_footer_container">
        <!-- Логотип -->
        <div class="m_footer_container_logo">
          <img 
            src="C:\Users\Susan\Desktop\Studies\neWFolder\betaprotV\src\assets\images\logo.png" 
            alt="Logo" 
            class="logo"
          />
        </div>
  
        <!-- Контакты -->
        <div class="m_footer_container_contacts_links">
          <h3>Контакты:</h3>
          <p>ОГРН:<br> - 1027700528591</p>
          <p>Юридический Адрес:<br> - 123557, г. Москва, Большой Тишинский пер. 43</p>
          <p>Почтовый адрес:<br> - 115088, г. Москва а/я №121</p>
          <p>Тел./факс:<br> - 8(495)781-42-14</p>
          <p>СМС:<br> - +7(925) 007-30-03</p>
        </div>
  
        <!-- Почта -->
        <div class="m_footer_container_contacts_email">
          <h3>Почта:</h3>
          <p>rusbetaprotect@gmail.com</p>
        </div>
  
        <!-- Социальные сети -->
        <div class="m_footer_container_contacts_social_links">
          <h3>Социальные сети:</h3>
          <div class="m_footer_container_contacts_social_links_container">
            <icons_1 name="tg" />
            <icons_1 name="vk" />
            <icons_1 name="ok" />

          </div>
        </div>
      </div>
    </footer>
  </template>
<script setup>
    import icons_1 from '@/assets/icons/icons_1.vue';
</script>
<style scoped>
/* Общие стили */
.m_footer {
  background:var(--color-primary);
  color: #FAFAFA;
  padding: 2rem 1rem;
}

/* Контейнер футера */
.m_footer_container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Адаптивные колонки */
  gap: 1rem; /* Пространство между элементами */
  max-width: 1200px; /* Ограничение максимальной ширины */
  margin: 0 auto; /* Центрирование контейнера */
}

/* Логотип */
.m_footer_container_logo {
  text-align: center; /* Центрирование логотипа */
}

.logo {
  max-width: 100%; /* Адаптивность изображения */
  height: auto;
}

/* Контакты, почта, соцсети */
.m_footer_container_contacts_links,
.m_footer_container_contacts_email,
.m_footer_container_contacts_social_links {
  opacity: 0.8;
}

.m_footer_container_contacts_links p,
.m_footer_container_contacts_email p {
  opacity: 0.6;
  line-height: 1.5; /* Улучшение читаемости */
}

/* Заголовки */
.m_footer_container_contacts_links h3,
.m_footer_container_contacts_email h3,
.m_footer_container_contacts_social_links h3 {
  margin-bottom: 0.5rem;
}

/* Социальные сети */
.m_footer_container_contacts_social_links_container {
  display: flex;
  justify-content: center; /* Центрирование иконок */
  gap: 1rem; /* Пространство между иконками */
}

/* Адаптивность */
@media (max-width: 768px) {
  .m_footer_container {
    grid-template-columns: 1fr; /* На маленьких экранах все элементы в столбец */
    text-align: center; /* Центрирование текста */
  }

  .m_footer_container_contacts_links,
  .m_footer_container_contacts_email,
  .m_footer_container_contacts_social_links {
    margin-top: 1rem; /* Добавляем отступы между блоками */
  }
}
</style>