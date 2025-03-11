<template>
    <section class="mobile_menu montserrat-nav">
        <div class="m_menu_left_icon">
            <icons_1 name="list"/>
        </div>
        <div class="m_menu_text">
            <p>Каталог</p>
        </div>
        <div class="m_menu_right_icon">
            <icons_1 name="arrow"/>
        </div>
    </section>
</template>

<script setup>
import icons_1 from '../assets/icons/icons_1.vue';
</script>

<style scoped>
.mobile_menu{
    background: #50858B;
    margin: 0.5rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.m_menu_left_icon,.m_menu_right_icon{
    display: flex;
    align-items: center;
}
.m_menu_text p {
    font-size: 15px;
    font-weight: 700;
    color: var( --third-color);
}
</style>