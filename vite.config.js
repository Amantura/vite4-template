import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import EsLint from 'vite-plugin-eslint'
import path from 'path'

const server = {
  port: 8001
}

const resolve = {
  alias: {
    '@@': path.resolve(__dirname, './src/components'),
    '~~': path.resolve(__dirname, './src/services'),
    '~': path.resolve(__dirname, './src/stores'),
    '@': path.resolve(__dirname, './src')
  }
}

export default defineConfig({
  server,
  resolve,
  plugins: [
    Vue(),
    EsLint({
      fix: true,
      include: '**/*.+(vue|js|jsx|ts|tsx)',
      exclude: ['**/node_modules/**', 'dist/**']
    }),
  ],
})