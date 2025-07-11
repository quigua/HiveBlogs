import { defineConfig } from 'astro/config';
// Comenta o elimina cualquier importación de sharpImageService o squooshImageService
// import { sharpImageService } from 'astro/config';

// Asegúrate de que tus colecciones de contenido estén definidas aquí si las tienes
// import { collections } from './src/content/config'; // Esto podría ser diferente para ti

import node from '@astrojs/node';

export default defineConfig({
  output: 'server',
  adapter: node({ 
    mode: 'standalone'
  }),
  i18n: {
    defaultLocale: 'en', // Cambiado a inglés
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
    site: 'http://localhost:4321/', // Añadido para definir la URL base del sitio
  integrations: [], // Deja esto vacío si no tienes otras integraciones
  markdown: {
    syntaxHighlight: 'prism', // O 'shiki'
  },
  // ¡IMPORTANTE! Esta sección 'image' DEBE ESTAR COMENTADA O ELIMINADA
  // image: {
  //   service: sharpImageService(),
  // },
});