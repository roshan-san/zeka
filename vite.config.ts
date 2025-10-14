import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
// keep config simple and avoid Node path types in TS build

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    viteReact(),
    tailwindcss(),
  ],
   resolve: {
    alias: {
       "@": new URL("./src", import.meta.url).pathname,
    },
  },
  // if you need aliases later, add them here
})
