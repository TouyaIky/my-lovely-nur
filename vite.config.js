import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
// base './' = path relatif, jadi tidak perlu mengubah nama repository di GitHub Pages
export default defineConfig({plugins:[react()],base:'./'})
