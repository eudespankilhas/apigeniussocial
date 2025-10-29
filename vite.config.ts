import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  }
})
```

## Solução 4: Verificar estrutura de pastas

Certifique-se de que sua estrutura está assim:
```
projeto/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Dashboard.tsx
│   │   └── ... (outros componentes)
│   ├── App.tsx
│   ├── constants.ts (ou .tsx)
│   └── types.ts (ou .tsx)
├── package.json
└── vite.config.ts