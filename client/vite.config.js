import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/server': {
        target: 'https://image-ocean.onrender.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/server/, ''),
        
      },
    },
  },
  plugins: [react()],
})
