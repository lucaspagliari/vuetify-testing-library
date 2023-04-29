import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import ViteWebfontDownload from 'vite-plugin-webfont-dl'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import tsconfig from './tsconfig.app.json'

const generateAlias = () => {
  const { paths }: Record<string, any> = tsconfig.compilerOptions
  const moduleAlias: Record<string, any> = {}

  for (const alias in paths) {
    const path = paths[alias][0]
    const newAlias = alias.substring(0, alias.length - 2)
    const newPath = path.substring(0, path.length - 2)

    moduleAlias[newAlias] = fileURLToPath(new URL(newPath, import.meta.url))
  }
  return moduleAlias
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/v2',
  plugins: [
    vue(),

    // https://github.com/vbenjs/vite-plugin-vue-setup-extend
    VueSetupExtend(),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      dirs: ['src/base/components'],
    }),

    // https://github.com/feat-agency/vite-plugin-webfont-dl
    ViteWebfontDownload(),
  ],
  resolve: {
    alias: {
      ...generateAlias(),
    },
  },
})
