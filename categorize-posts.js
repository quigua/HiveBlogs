import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const postsDir = path.join(__dirname, 'src', 'content', 'blog');

const categorizePost = (content, data) => {
  const title = data.title ? data.title.toLowerCase() : '';
  const body = content ? content.toLowerCase() : '';
  const tags = data.tags ? data.tags.map(tag => tag.toLowerCase()) : [];
  const community = data.community ? data.community.toLowerCase() : ''; // Asumiendo que 'community' puede estar en el frontmatter

  let category = 'General'; // Categoría por defecto
  let subcategory = null;

  // Reglas para Splinterlands
  const isSplinterlands = tags.includes('splinterlands') || community === 'hive-13323' || title.includes('splinterlands') || body.includes('splinterlands');

  if (isSplinterlands) {
    category = 'Splinterlands';

    // Subcategorías de Splinterlands
    if (
      title.includes('tutorial') || body.includes('tutorial') ||
      title.includes('guia') || body.includes('guia') ||
      title.includes('como hacer') || body.includes('how to') ||
      title.includes('beginner') || body.includes('principiante')
    ) {
      subcategory = 'Tutoriales';
    } else if (
      title.includes('batalla') || body.includes('batalla') ||
      title.includes('estrategia') || body.includes('estrategia') ||
      title.includes('battle') || body.includes('battle') ||
      title.includes('strategy') || body.includes('strategy') ||
      title.includes('lineup') || body.includes('lineup') ||
      title.includes('combate') || body.includes('combate')
    ) {
      subcategory = 'Batallas y Estrategias';
    } else if (
      title.includes('estadistica') || body.includes('estadistica') ||
      title.includes('stats') || body.includes('stats') ||
      title.includes('data') || body.includes('data') ||
      title.includes('reporte') || body.includes('reporte') ||
      title.includes('analisis') || body.includes('analisis') ||
      title.includes('metrics') || body.includes('metrics')
    ) {
      subcategory = 'Estadísticas';
    } else if (
      title.includes('sugerencia') || body.includes('sugerencia') ||
      title.includes('bug') || body.includes('bug') ||
      title.includes('error') || body.includes('error') ||
      title.includes('fallo') || body.includes('fallo') ||
      title.includes('suggestion') || body.includes('suggestion') ||
      title.includes('issue') || body.includes('issue') ||
      title.includes('report') || body.includes('report')
    ) {
      subcategory = 'Sugerencias y Fallos';
    }
  } else if (
    tags.includes('servicio') || body.includes('servicio') || title.includes('servicio') ||
    tags.includes('consultoria') || body.includes('consultoria') || title.includes('consultoria') ||
    tags.includes('desarrollo') || body.includes('desarrollo') || title.includes('desarrollo') ||
    tags.includes('aplicacion') || body.includes('aplicacion') || title.includes('aplicacion') ||
    tags.includes('freelance') || body.includes('freelance') || title.includes('freelance') ||
    tags.includes('oferta') || body.includes('oferta') || title.includes('oferta') ||
    tags.includes('ayuda') || body.includes('ayuda') || title.includes('ayuda') ||
    tags.includes('soporte') || body.includes('soporte') || title.includes('soporte')
  ) {
    category = 'Servicios de @quigua';
  }
  // Aquí se pueden añadir reglas para otras categorías principales si el post no es de Splinterlands
  // else if (tags.includes('web3') || title.includes('web 3.0')) {
  //   category = 'La Web 3.0';
  // }
  // ... y así sucesivamente para 'Hived Blogs' y 'Servicios de @quigua'

  return { category, subcategory };
};

fs.readdir(postsDir, (err, files) => {
  if (err) {
    console.error('Error al leer el directorio de posts:', err);
    return;
  }

  let categorizedCount = 0;
  let updatedCount = 0;

  files.forEach(file => {
    if (path.extname(file) === '.md') {
      const filePath = path.join(postsDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);

      const { category: newCategory, subcategory: newSubcategory } = categorizePost(content, data);

      // Solo actualiza si la categoría no está ya definida o si la nueva es más específica
      if (!data.category || data.category === 'General' || (newCategory !== 'General' && newCategory !== data.category)) {
        data.category = newCategory;
        updatedCount++;
      }
      if (newSubcategory && (!data.subcategory || data.subcategory !== newSubcategory)) {
        data.subcategory = newSubcategory;
        updatedCount++;
      }

      // Escribir el archivo de vuelta con el frontmatter actualizado
      const newContent = matter.stringify(content, data);
      fs.writeFileSync(filePath, newContent);
      categorizedCount++;
    }
  });

  console.log(`Proceso de categorización completado para ${categorizedCount} posts originales.`);
  console.log(`Se actualizaron ${updatedCount} campos de categoría/subcategoría.`);
});
