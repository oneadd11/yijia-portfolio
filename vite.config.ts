// @ts-nocheck
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

let homepageBundleOutDir = 'dist'

export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'file-protocol-friendly-html',
      enforce: 'post',
      transformIndexHtml(html) {
        return html
          .replace(/\s+crossorigin(?:="[^"]*")?/g, '')
          .replace(/(["'])\.\/public\//g, '$1./')
      },
    },
    {
      name: 'inline-homepage-bundle-for-file-preview',
      configResolved(config) {
        homepageBundleOutDir = config.build.outDir
      },
      closeBundle() {
        const outDir = homepageBundleOutDir
        const htmlPath = join(outDir, 'index.html')
        let html = readFileSync(htmlPath, 'utf8')
        const scriptMatch = html.match(
          /<script type="module" src="\.\/assets\/(main-[^"]+\.js)"><\/script>/
        )

        if (!scriptMatch) {
          return
        }

        let script = readFileSync(join(outDir, 'assets', scriptMatch[1]), 'utf8')
        script = script
          .replace(/^import"\.\/modulepreload-polyfill-[^"]+\.js";/, '')
          .replace(/new URL\("([^"]+)",import\.meta\.url\)\.href/g, (_match, asset) => `"./assets/${asset}"`)
          .replace(/<\/script/gi, () => '<\\/script')

        html = html
          .replace(scriptMatch[0], '')
          .replace(/\s*<link rel="modulepreload" href="\.\/assets\/modulepreload-polyfill-[^"]+\.js">\n?/, '')
          .replace('</body>', () => `    <script>${script}</script>\n  </body>`)

        writeFileSync(htmlPath, html)
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        heatSoak: 'cases/heat-soak.html',
        nand: 'cases/nand.html',
        mlcc: 'cases/mlcc.html',
        resume: 'resume.html',
      },
    },
  },
})
