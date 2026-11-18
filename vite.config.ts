import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

function copyStaticScriptsPlugin() {
  return {
    name: 'copy-static-scripts',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const srcJsDir = path.resolve(__dirname, 'js');
      const destJsDir = path.resolve(distDir, 'js');
      if (fs.existsSync(srcJsDir) && fs.existsSync(distDir)) {
        fs.mkdirSync(destJsDir, {recursive: true});
        for (const file of fs.readdirSync(srcJsDir)) {
          fs.copyFileSync(path.join(srcJsDir, file), path.join(destJsDir, file));
        }
      }
    },
  };
}

export default defineConfig(() => {
  return {
    base: './',
    plugins: [copyStaticScriptsPlugin()],
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          bab: path.resolve(__dirname, 'bab.html'),
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
