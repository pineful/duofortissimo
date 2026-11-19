import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 소스는 app/ 에 두고, 빌드 결과는 저장소의 docs/ 로 냅니다.
// 저장소 루트(/)와 docs/ 양쪽에서 같은 사이트가 열리도록 scripts/sync-root.mjs 가 루트로 복사합니다.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: '../docs',
    emptyOutDir: true,
    assetsDir: 'assets',
  },
})
