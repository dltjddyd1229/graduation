import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs', // 빌드 결과물을 docs 폴더로 생성
  },
  base: './', // 경로 오류 방지
})