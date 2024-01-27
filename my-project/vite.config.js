import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['node_modules/web3-utils/lib/esm/event_emitter.js'],
    },
  },
  
})
