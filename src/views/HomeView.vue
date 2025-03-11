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
                <article class="text-block  montserrat-nav">
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
            <div class="mini_info  montserrat-nav">
                <div class="mini_info_item flex-Center">
                    <icon_1 name="time"/>
                    <p>Эффективность подтверждена 15 годами работы и тысячами довольных клиентов в 9 странах мира.</p>
                </div>
                <div class="mini_info_item flex-Center">
                    <icon_1 name="safety"/>
                    <p>Гарантируем качество и безопасность всей продукции, прошедшей строгий контроль.</p>
                </div>
                <div class="mini_info_item flex-Center">
                    <icon_1 name="availability"/>
                    <p>Широкий ассортимент продуктов для комплексного подхода к здоровью: от похудения до поддержания суставов.</p>
                </div>
                <div class="mini_info_item flex-Center">
                    <icon_1 name="delivery"/>
                    <p>Быстрая доставка и конфиденциальность заказов – ваши персональные данные в безопасности.</p>
                </div>
            </div>
            <div class="laptop_catalog_container montserrat-nav">
                <div class="laptop_catalog_container_left">
                    <div class="laptop_catalog_containe_left_button flex-Center">
                        <icon_1 name="menu"></icon_1>
                        <p>Каталог</p>
                    </div>
                    <div class="laptop_catalog_containe_left_category_list">
                        тут будет список
                    </div>
                </div>
                <div class="laptop_catalog_container_right">
                    Тут будет блок товаров
                </div>
            </div>
            <div class="some_text_for_home montserrat-nav">
                <Benefits></Benefits>
                <div class="benefits_text flex-Center">
                    <p>
                    Ваше здоровье — наш главный приоритет!
                    Каждый продукт, который мы предлагаем, создан на основе многолетних исследований и натуральных компонентов, чтобы вы могли доверять каждому ингредиенту. Например, Кофе Минсер Форте не только помогает в борьбе с лишними килограммами, но и заряжает энергией на весь день, а «Остеофрост» содержит уникальные формулы для восстановления суставов, одобренные ведущими специалистами. Мы не просто продаем товары — мы создаем решения, которые работают в гармонии с вашим телом!
                    <br>
                    <br>
                    Присоединяйтесь к нашему сообществу победителей!
                    Вас ждут не только продукты, но и круглосуточная поддержка от экспертов, персональные планы питания, онлайн-марафоны с тренерами и еженедельные вебинары о здоровье. А еще — закрытый клуб, где участники делятся своими достижениями: как Мария сбросила 20 кг за полгода, а Петр вернул подвижность суставов и покорил горную вершину! Здесь нет места сомнениям — только реальные результаты и вдохновение.
                    Почему стоит начать именно сейчас?
                    <br>
                    <br>
                    У нас действуют специальные условия для новых клиентов: скидки на первые заказы, бесплатные консультации нутрициолога и подарки-помощники в виде чек-листов и рецептов. Не ждите «идеального момента» — он настанет только тогда, когда вы решитесь сделать шаг.
                    Здоровое тело, блеск в глазах, уверенность в себе — это не мечта, а реальность, которая начинается с вашего решения. Выбирайте лучшее. Выбирайте нас!
                </p>
                </div>
            </div>
        </div>                 
    </section>
</template>

<script setup>
import icon_1 from '@/assets/icons/icons_1.vue'
import finCa from '@/components/MobileComponents/finalComponent.vue'
import Benefits from '@/components/Non-permanentComponents/Contacts.vue'
const paragraphs = [
    'Мы всегда заботимся о наших клиентах и хотим, чтобы вы получали только лучшие, проверенные, качественные товары и услуги. А еще у нас есть мечта – чтобы вы были здоровыми, сильными, красивыми и стройными. Мы знаем, как помочь вам в этом!',
    'Мы вместе сделаем здоровье и стройность вашим новым образом жизни. Не придумывайте кучу отговорок и не откладывайте на завтра то, что можно сделать уже сегодня и сейчас. Кроме того, у нас есть убедительные аргументы «за»: Кофе Минсер Форте, Бета-Про 8, Бета-Протект, «Формавит», «Эректосил», «Остеофрост». Они уже доказали свою эффективность на протяжении 15 лет в 9 странах тысячам человек.',
    'У нас вы найдете полезную продукцию для похудения, здоровых суставов, активной сексуальной жизни, обратную связь для поддержки вашего настроения на пути к здоровому идеальному телу, хорошую, веселую компанию для похудения с реальными историями успеха и многое другое, нужное вам для достижения цели!'
];
</script>

<style scoped>
.home-view {
    max-width:var(--max_width-primary);
    margin: 0 auto;
    padding: 2rem 1rem;
}
.homeview_container {
    display: grid;
    gap: 2rem;
}

/* Блок с изображением */
.image-block {
    grid-column: 1 / -1;
}
.main-image {
    width: 100%;
    height: 600px;
    object-fit: cover;
    border-radius: 15px;
}

/* Контейнер для текста и фидбека */
.content-wrapper {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;
}

/* Текстовый блок */
.text-block {
    text-align: justify;
    padding: 2rem;
}
.company-title {
    text-align: center;
    font-size: clamp(1.5rem, 5vw, 2rem);
    color: #2e5846;
    margin: 1rem 0;
}
.content p {
    font-size: clamp(0.9rem, 3vw, 1.1rem);
    line-height: 1.6;
    margin: 1.5rem 0;
    color: #444;
}
.divider {
    height: 2px;
    background: linear-gradient(90deg, transparent 0%, #2e5846 50%, transparent 100%);
    margin: 2rem 0;
}

/* Мини-инфо блок */
.mini_info {
    border: .5px solid #2e5846;
    border-radius: 5px;
    color: #2e5846;
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}
.mini_info_item {
    margin: 0.5rem;
    position: relative;
    text-align: center;
    flex-direction: column;
}

/* Блок обратной связи */
.feedback-block {
    display: grid;
    gap: 1.5rem;
}

/* Каталог */
.laptop_catalog_container {
    padding: 2rem;
    display: flex;
}
.laptop_catalog_container_left {
    width: 35%;
    color: #FAFAFA;
}
.laptop_catalog_container_right {
    width: 65%;
}
.laptop_catalog_containe_left_button {
    background: #2e5846;
    border-radius: 5px 5px 0 0;
    padding: 1rem;
}
.laptop_catalog_containe_left_button p {
    padding: .5rem;
    margin: 0;
}
.laptop_catalog_containe_left_category_list {
    border-radius: 0 0 5px 5px;
    padding: 1rem;
    color: var(--color-primary);
    background-color: gainsboro;
}

/* Контакты и текст */
.some_text_for_home {
    text-align: justify;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1rem;
    color: black;
    line-height: 1.6;
}


/* Медиа-запросы */
@media (min-width: 768px) {
    .some_text_for_home {
        grid-template-columns: 1fr 2fr;
        gap: 3rem;
    }
    .content-wrapper {
        grid-template-columns: 2fr 1fr;
        gap: 3rem;
    }
    .main-image {
        height: 700px;
    }
    .feedback-block {
        position: sticky;
        top: 2rem;
    }
    .mini_info {
        grid-template-columns: repeat(4, 1fr);
    }
    .mini_info_item:nth-child(n+2)::before {
        opacity: 0.3;
        content: '';
        position: absolute;
        left: -0.5rem;
        height: 90%;
        width: 0.5px;
        background: #2e5846;
    }
}

@media (max-width: 767px) {
    .main-image {
        height: 300px;
    }
    .text-block,
    .mini_info {
        padding: 1rem;
    }
    .company-title {
        font-size: clamp(1rem, 4vw, 1.5rem);
    }
    .laptop_catalog_container {
        flex-direction: column;
    }
    .laptop_catalog_container_left,
    .laptop_catalog_container_right {
        width: 100% !important;
    }
}

/* Для очень узких экранов (Galaxy Fold) */
@media (max-width: 320px) {
    .home-view {
        padding: 1rem 0.5rem;
    }
    .main-image {
        height: 200px;
        border-radius: 8px;
    }
    .text-block,
    .mini_info,
    .laptop_catalog_container,
    .some_text_for_home {
        padding: 0.5rem !important;
    }
    .benefits_contacts_description {
        padding: 0.5rem !important;
    }
    .benefits_contacts_descriptio_item:last-child {
        flex-wrap: wrap;
        gap: 0.3rem;
        justify-content: center;
    }
    .benefits_text p {
        line-height: 1.4;
    }
}
</style>