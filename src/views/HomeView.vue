<template>
    <section class="home-view">
        <div class="homeview_container">
            <!-- Блок с изображением (полная ширина) -->
            <div class="image-block">
                <img 
                    src="@/assets/images/main_Image.jpg" 
                    alt="Основное изображение"
                    class="main-image"
                >
            </div>

            <!-- Контентный блок (текст + фидбек) -->
            <div class="content-wrapper">
                <!-- Текстовый блок -->
                <article class="text-block">
                    <div class="divider"></div>
                    <h2 class="company-title">ООО "МЕД КОМПЛЕКС"</h2>
                    <div class="divider"></div>
                    
                    <div class="content">
                        <p v-for="(text, index) in paragraphs" :key="index">
                            {{ text }}
                        </p>
                    </div>
                </article>

                <!-- Блок обратной связи -->
                <div class="feedback-block">
                    <finCa
                     iconName="phone"
                     actionText="Перезвоните мне" 
                     underActionText="Оставьте свой номер телефона и мы вам перезвоним"
                     />
                     <finCa
                        iconName="email"
                        actionText="Подписаться" 
                        underActionText="Оставьте свою почты чтобы получать наши новинки"
                     />
                     <finCa
                        iconName="info"
                        actionText="Информация" 
                        underActionText="Расчитать индекс массы тела"
                     />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import finCa from '@/components/MobileComponents/finalComponent.vue'

const paragraphs = [
    'Мы всегда заботимся о наших клиентах и хотим, чтобы вы получали только лучшие, проверенные, качественные товары и услуги. А еще у нас есть мечта – чтобы вы были здоровыми, сильными, красивыми и стройными. Мы знаем, как помочь вам в этом!',
    'Мы вместе сделаем здоровье и стройность вашим новым образом жизни. Не придумывайте кучу отговорок и не откладывайте на завтра то, что можно сделать уже сегодня и сейчас. Кроме того, у нас есть убедительные аргументы «за»: Кофе Минсер Форте, Бета-Про 8, Бета-Протект, «Формавит», «Эректосил», «Остеофрост». Они уже доказали свою эффективность на протяжении 15 лет в 9 странах тысячам человек.',
    'У нас вы найдете полезную продукцию для похудения, здоровых суставов, активной сексуальной жизни, обратную связь для поддержки вашего настроения на пути к здоровому идеальному телу, хорошую, веселую компанию для похудения с реальными историями успеха и многое другое, нужное вам для достижения цели!'
];
</script>

<style scoped>
.Action_container{
    width: 100%; /* Занимает всю доступную ширину */ /* Максимальная ширина на больших экранах */
    padding: 1rem;
    color: #FAFAFA;
}
.Action {
    gap: 1rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    background: #2e5846;
    border-radius: 5px 5px 0 0 ;
    -webkit-box-shadow: 0px 5px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 5px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 5px 8px 0px rgba(34, 60, 80, 0.2);
}

.home-view {
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem 1rem;
}

.homeview_container {
    display: grid;
    gap: 2rem;
}

/* Блок с изображением */
.image-block {
    grid-column: 1 / -1; /* Занимает всю ширину */
}

.main-image {
    width: 100%;
    height: 600px;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Контейнер для текста и фидбека */
.content-wrapper {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;
}

/* Текстовый блок */
.text-block {
    background: rgba(255, 255, 255, 0.95);
    padding: 2rem;
    border-radius: 15px;
}

.company-title {
    text-align: center;
    font-size: clamp(1.5rem, 5vw, 2rem); /* Адаптивный размер заголовка */
    color: #2e5846;
    margin: 1rem 0;
}

.content p {
    font-size: clamp(0.9rem, 3vw, 1.1rem); /* Адаптивный размер параграфов */
    line-height: 1.6;
    margin: 1.5rem 0;
    color: #444;
}

.divider {
    height: 2px;
    background: linear-gradient(90deg, transparent 0%, #2e5846 50%, transparent 100%);
    margin: 2rem 0;
}

/* Блок обратной связи */
.feedback-block {
    display: grid;
    gap: 1.5rem;
}

/* Десктопная версия */
@media (min-width: 1024px) {
    .content-wrapper {
        grid-template-columns: 2fr 1fr; /* Соотношение 2:1 */
        gap: 3rem;
    }

    .main-image {
        height: 700px;
    }

    .feedback-block {
        position: sticky;
        top: 2rem;
    }
}



/* Мобильная версия */
@media (max-width: 767px) {
    .main-image {
        height: 300px;
    }

    .text-block {
        padding: 1rem;
    }

    .company-title {
        font-size: clamp(1rem, 4vw, 1.5rem); /* Адаптивный размер заголовка */
    }

    .content p {
        font-size: clamp(0.8rem, 3vw, 1rem); /* Адаптивный размер параграфов */
    }
}
</style>