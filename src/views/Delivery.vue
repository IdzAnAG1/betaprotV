<template>
    <section class="Delivery montserrat-nav">
        <div class="Delivery_container">
            <div class="Delivery_container_text">
                <h2>Доставка</h2>
                <p>После оформления заказа, оператор свяжется с Вами в рабочее время для подтверждения места и времени доставки, а также при необходимости уточнит недостающую информацию.</p>
                <hr>
                <div class="Delivery_container_text_description">
                    <div class="Delivery_container_text_description_item">
                        <icons_1 name="RussianPost" width="153" height="95"/>
                        <p>Доставка Почтой России осуществляется в пределах территории Российской Федерации. Срок доставки: от 3 до 10 дней в зависимости от удаленности места получения посылки. Пересылка для вас бесплатна.</p>
                    </div>
                    <div class="Delivery_container_text_description_item">
                        <icons_1 name="CDEK" width="153" height="95"/>
                        <p>Доставка СДЭК осуществляется как на территории Российской Федерации, так и за её приделами. Срок доставки: от 3 до 10 дней в зависимости от удаленности места получения посылки. Пересылка для вас бесплатна.</p>
                    </div>
                    <div class="Delivery_container_text_description_item">
                        <icons_1 name="BLines" width="253" height="75"/>
                        <p>Доставка Почтой России осуществляется в пределах территории Российской Федерации. Срок доставки: от 3 до 10 дней в зависимости от удаленности места получения посылки. Пересылка для вас бесплатна.</p>
                    </div>
                </div>
                <p>Стоимость доставки 350-400 рублей Оплата товара наложеным платежом при получении.</p>
            </div>
            <div class="Delivery_container_contacts">
                <Benefits/>
            </div>
        </div>
    </section>
</template>
<script setup>
    import Benefits from '@/components/Non-permanentComponents/Contacts.vue'
    import icons_1 from '@/assets/icons/icons_1.vue';
</script>
<style scoped>
.Delivery {
    color: #444;
    display: grid;
    justify-content: center;
}

.Delivery_container {
    height: 100vh;
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 2rem;
    max-width: var(--max_width-primary);
    padding: 1rem;
}

/* Мобильная версия */
@media (max-width: 768px) {
    
    .Delivery_container {
        height: auto;
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    
    .Delivery_container_contacts {
        margin-top: 2rem;
    }
}

.Delivery_container h2 {
    margin: 0 0 1rem 0;
    font-size: 2rem;
}

.Delivery_container p {
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.Delivery_container hr {
    margin: 2rem 0;
    border: 0;
    border-top: 1px solid #ddd;
}
</style>