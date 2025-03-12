<template>
    <section class="certificates montserrat-nav">
      <div class="container">
        <h2 class="section-title">Сертификаты и документы</h2>
        <div class="content-wrapper">
          <div class="slider-container">
            <swiper
              :modules="modules"
              :autoplay="{ delay: 3000, pauseOnMouseEnter: true }"
              :loop="true"
              :speed="800"
              :slides-per-view="1"
              @swiper="onSwiper">
              <swiper-slide v-for="(cert, index) in certificates" :key="index">
                <div class="slide-content">
                  <img 
                    :src="cert.image" 
                    :alt="cert.title"
                    class="cert-image"
                    @click="openLightbox(index)"
                  />
                </div>
              </swiper-slide>
            </swiper>
          </div>
  
          <div class="contacts-sidebar ">
            <Benefits />
            <div class="contacts-sidebar_text">
                <h4>BETAPROTECT</h4>
                <p>
                    Ваше здоровье под защитой сертификатов
                    Мы не просто продаем биопрепараты — мы гарантируем их безопасность и эффективность. Каждый продукт в нашем каталоге подтвержден официальными документами, которые доступны для ознакомления<br>
                </p>
                <h4>Декларации о соответстви<br></h4>
                <p>
                    Кофе Минсер Форте — энергия с доказанным качеством<br>
                    Формавит + — витаминный комплекс по стандартам РФ<br>
                    ОстеоФрост — поддержка костей с сертификатом Минздрава<br>
                    PrunoТабс , Броккотабс , Витатамин , Гемпротект — инновации с документальным подтверждением<br>
                </p>
                <h4>Специализированные свидетельства <br></h4>
                <p>
                    Эректосил (крем-гель и таблетки) — двойная проверка эффективности<br>
                    Спирулина (пастилки) — природная сила с сертификатом чистоты<br>
                    АльфаПротект — защита на клеточном уровне подтверждена документами<br>
                </p>
                <h4>Почему наши сертификаты важны для вас?<br></h4>
                <p>
                    Каждый документ подтверждает соответствие ТР ТС 021/2011 и ТР ТС 022/2011<br>
                    Продукция проходит испытания в аккредитованных лабораториях<br>
                </p>
                <h4>
                    BETAPROTECT — это не просто бренд, а система гарантий
                </h4>
            </div>
          </div>
        </div>
  
        <div v-if="showLightbox" class="lightbox" @click.self="closeLightbox">
          <div class="lightbox-container">
            <img :src="activeImage" class="lightbox-image">
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import Benefits from '@/components/Non-permanentComponents/Contacts.vue'
  import { ref } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/autoplay';
  
  const certs = import.meta.glob('@/assets/images/certificates/*.jpg', { eager: true });
  const certificates = ref(Object.values(certs).map((cert, index) => ({
    image: cert.default,
    title: `Документ ${index + 1}`
  })));
  
  const modules = [Autoplay];
  const swiperInstance = ref(null);
  const showLightbox = ref(false);
  const activeImage = ref('');
  
  const onSwiper = (swiper) => {
    swiperInstance.value = swiper;
  };
  
  const openLightbox = (index) => {
    activeImage.value = certificates.value[index].image;
    showLightbox.value = true;
  };
  
  const closeLightbox = () => {
    showLightbox.value = false;
  };
  </script>
  
  <style scoped>
  .certificates {
    padding: 2rem ;
    display: flex;
    align-items: center;
  }
  .section-title{
    text-align: center;
    margin: 0;
    color: var(--color-primary);
  }
  .container {
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .content-wrapper {
    display: flex;
    gap: 30px;
    align-items: stretch;
  }
  
  .slider-container {
    flex: 1;
    min-width: 0;
    height: 100%;
  }
  
  .swiper {
    height: 100%;
    width: 100%;
  }
  
  .slide-content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .cert-image {
    max-height: 100%;
    max-width: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
  }
  
  .contacts-sidebar {
    width: 350px;
  }
  .contacts-sidebar_text{
    text-align: justify;
    color: #444;
  }
  .contacts-sidebar_text h4{
    font-size: 1.10rem;
    color: var(--color-primary);
  }
  /* Новые стили для лайтбокса */
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.76);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    overflow-y: auto;
    padding: 20px;
  }
  
  .lightbox-container {
    max-width: 90%;
    max-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .lightbox-image {
    max-width: 100%;
    max-height: 100vh;
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0,0,0,0.5);
  }
  
  @media (max-width: 1200px) {
    .container {
      max-width: 100%;
    }
    
    .content-wrapper {
      height: 70vh;
    }
    
    .contacts-sidebar {
      width: 300px;
    }
  }
  
  @media (max-width: 992px) {
    .content-wrapper {
      flex-direction: column;
      height: auto;
      gap: 40px;
    }
    
    .slider-container {
      height: 60vh;
    }
    
    .contacts-sidebar {
      width: 100%;
      max-width: 500px;
      margin: 0 auto;
    }
  }
  
  @media (max-width: 768px) {
    .certificates {
      padding: 30px 0;
    }
    
    .slider-container {
      height: 50vh;
    }
    
    .section-title {
      font-size: 2rem;
    }
    
    /* Адаптив для лайтбокса */
    .lightbox {
      padding: 10px;
    }
    
    .lightbox-container {
      max-width: 100%;
      max-height: 85vh;
    }
    
    .lightbox-image {
      max-height: 85vh;
    }
  }
  
  @media (max-width: 480px) {
    .slider-container {
      height: 40vh;
    }
    
    .section-title {
      font-size: 1.8rem;
    }
    .benefits{
      padding: 0;
    }
  }
  </style>