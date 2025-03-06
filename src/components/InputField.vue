<template>
    <div class="second_laptop_header_container_input">
        <input type="text" class="second_laptop_header_container_input_field montserrat-nav" :placeholder="re">
        <button class="second_laptop_header_container_button montserrat-nav">Поиск</button>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue' // Добавлен ref

const placeHolderWords = [
      "Эректосил",
      "Альфа Протект",
      "Минсер Форте",
      "Spirulina",
      "Остеофрост",
      "Сорбоформ",
      "BrokkoTabs",
      "PrunoTabs",
      "Гемпротект",
      "ImbiroTabs"
  ]
  
  const re = ref("")
  const currentWordIndex = ref(0)
  const isDeleting = ref(false)
  const typingSpeed = 150
  const pauseBetweenWords = 2000
  
  const typeWords = () => {
    const currentWord = placeHolderWords[currentWordIndex.value]
    
    if (!isDeleting.value) {
      re.value = currentWord.substring(0, re.value.length + 1)
      
      if (re.value === currentWord) {
        isDeleting.value = true
        setTimeout(typeWords, pauseBetweenWords)
        return
      }
    } else {
      re.value = currentWord.substring(0, re.value.length - 1)
      
      if (re.value === '') {
        isDeleting.value = false
        currentWordIndex.value = (currentWordIndex.value + 1) % placeHolderWords.length
      }
    }
    
    setTimeout(typeWords, isDeleting.value ? typingSpeed/2 : typingSpeed)
  }
  
  onMounted(() => {
    setTimeout(typeWords, 500)
  })
  
</script>
<style scoped>
    .second_laptop_header_container_input_field {
        width: 100%; /* Занимаем всю ширину контейнера */
        min-width: 120px; /* Минимальная ширина поля */
        height: 2.5rem;
        background-color: #FAFAFA;
        border-radius: 5px;
        border: none;
        padding: 1rem;
        flex: 1; /* Добавляем растягивание */
        color: #2e5846;
    }
    .second_laptop_header_container_button {
        border-radius: 5px;
        background-color: #2e5846;
        border: none;
        white-space: nowrap; /* Запрещаем перенос текста */
        padding: 0 1.5rem;
    }
</style>