import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from "path" // <--- Importa esto al principio

export default defineConfig({
  logLevel: 'error',
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      // Esto le dice a Vite que "@" significa la carpeta "src"
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    strictPort: true,
  }
});