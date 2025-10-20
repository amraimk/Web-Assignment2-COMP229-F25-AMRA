import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: { 
    allowedHosts: ['web-comp229-amra-fall2025.onrender.com'] 
  }
})
