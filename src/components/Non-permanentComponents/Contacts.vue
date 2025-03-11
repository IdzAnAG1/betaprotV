<template>
    <div class="benefits">
        <div class="benefits_contacts">
            <div class="benefits_contacts_title">
                <h4>Контакты</h4>
            </div>
            <div class="benefits_contacts_description">
                <p class="benefits_contacts_descriptio_item">                            
                    8 (495) 781-42-14
                    <span>Горячая линия</span>
                </p>
                <p class="benefits_contacts_descriptio_item">
                    rusbetaprotect@gmail.com
                </p>
                <p class="benefits_contacts_descriptio_item">
                    <icon_1 name="tg"></icon_1>
                    <icon_1 name="vk"></icon_1>
                    <icon_1 name="ok"></icon_1>
                </p>
                <p class="benefits_contacts_descriptio_item">                    
                    <span>Вопросы по заказам и отгрузкам</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>
import icon_1 from '@/assets/icons/icons_1.vue'

</script>
<style scoped>
.benefits{
    padding: 1rem;
}
.benefits_contacts {
    border: 0.5px solid rgba(46, 88, 70, 0.5);
    border-radius: 5px;
    overflow: hidden;
}
.benefits_contacts_title{
    background: rgb(188, 220, 206, 0.6);
}
.benefits_contacts_title h4 {
    margin: 0;
    padding: 1rem;
}
.benefits_text p {
    text-align: justify;
    hyphens: auto;
    word-break: break-word;
    overflow-wrap: anywhere;
    font-size: clamp(0.8rem, 3vw, 1rem);
}
.benefits_contacts_description {
    color: #2e5846;
    padding: 1rem;
    font-size: clamp(1rem, 2vw, 1.25rem);
}
.benefits_contacts_descriptio_item {
    margin: 0 0 1rem 0;
    display: flex;
    flex-direction: column;
}
.benefits_contacts_descriptio_item:nth-last-child(2){
    flex-direction: row;
    gap: 0.5rem;
}
.benefits_contacts_descriptio_item span {
    opacity: 0.5;
    color: #000;
    font-size: clamp(0.5rem, 1.5vw, 0.675rem);
}
</style>