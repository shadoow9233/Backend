import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy: {
      '/api': 'http://localhost:3000/',
    },
  },
  plugins: [react()],
})





// server:{
//   port:3000,
//     proxy:{
//       '/api':{
//         target:'http://localhost:3000/',
//         changeOrigin:true,
// }