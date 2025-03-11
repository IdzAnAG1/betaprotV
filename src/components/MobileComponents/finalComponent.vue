<template>
    <div class="action_container montserrat-nav ">
        <div class="action">
            <icons_1 :name="iconName"></icons_1>
            <p>{{ actionText }}</p>
        </div>
        <div class="underActionClass">
            {{ underActionText }}
        </div>
    </div>
</template>
<script setup>
import icons_1 from '@/assets/icons/icons_1.vue'
defineProps({
    iconName: {
        type: String,
        required: true,
    },
    actionText:{
        type: String,
        required: true,
    },
    underActionText:{
        type: String,
        required: true,
    }
}); 
</script>
<style scoped>
.action_container{
    width: 100%;
    padding: 1rem;
    color: var(--third-color);
}
.action{
    gap: 1rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    background: var(--color-primary);
    border-radius: 5px 5px 0 0 ;
    -webkit-box-shadow: 0px 5px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 5px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 5px 8px 0px rgba(34, 60, 80, 0.2); 
}
.underActionClass{
    text-align: center;
    box-shadow:  inset 5px 5px 8px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    background: #519b7b;
    color: var(--third-color);
    border-radius: 0 0 5px 5px;
}

@media (max-width: 600px) {
    .action_container {
        max-width: 100%;
    }
}
</style>