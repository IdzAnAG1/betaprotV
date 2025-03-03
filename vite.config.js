import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{ /* Ну собсна резолвит аиласы */
    alias:{
      '@': path.resolve(__dirname, './src')/* Указывается путь котрый мы заменяем на @ */
    }
  }
})
