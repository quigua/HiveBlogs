import { defineConfig } from 'astro/config';
// Comenta o elimina cualquier importación de sharpImageService o squooshImageService
// import { sharpImageService } from 'astro/config';

// Asegúrate de que tus colecciones de contenido estén definidas aquí si las tienes
// import { collections } from './src/content/config'; // Esto podría ser diferente para ti

export default defineConfig({
  // Puedes tener otras configuraciones aquí (ej. site: 'https://tusitio.com')
  integrations: [], // Deja esto vacío si no tienes otras integraciones
  markdown: {
    syntaxHighlight: 'prism', // O 'shiki'
  },
  // ¡IMPORTANTE! Esta sección 'image' DEBE ESTAR COMENTADA O ELIMINADA
  // image: {
  //   service: sharpImageService(),
  // },
});