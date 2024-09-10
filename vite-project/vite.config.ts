// vite.config.js
// https://vitejs.dev/guide/build.html

import UnoCSS from "unocss/vite"; // TODO: Était déjà présent

export default {
  // config options
  plugins: [UnoCSS()],
  build: {
    outDir: '../docs',
    emptyOutDir: true, // also necessary
  }
};
