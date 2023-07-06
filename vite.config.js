import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  loaders: [
    { test: /\.json$/, loader: 'json-loader' },
  ]
  
})
