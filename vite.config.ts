import { defineConfig, type Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

/** Figma Make exports use `figma:asset/...` imports; outside that environment we stub to a tiny transparent PNG. */
function figmaAssetStub(): Plugin {
  const virtualPrefix = '\0figma:asset:'
  const transparentPng =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=='

  return {
    name: 'figma-asset-stub',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        return virtualPrefix + id.slice('figma:asset/'.length)
      }
    },
    load(id) {
      if (id.startsWith(virtualPrefix)) {
        return `export default ${JSON.stringify(transparentPng)}`
      }
    },
  }
}

export default defineConfig({
  // Required for GitHub Pages: https://paramits.github.io/Cookingshow/
  base: '/Cookingshow/',
  plugins: [
    figmaAssetStub(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
