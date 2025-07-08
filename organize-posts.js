import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const contentBlogDir = path.join(__dirname, 'src', 'content', 'blog');

async function organizePosts() {
    console.log('Iniciando la organización de posts...');
    let movedCount = 0;

    try {
        const files = await fs.readdir(contentBlogDir);

        for (const file of files) {
            if (path.extname(file) === '.md') {
                const oldPath = path.join(contentBlogDir, file);
                const fileContent = await fs.readFile(oldPath, 'utf8');
                const { data, content } = matter(fileContent);

                const category = data.category;
                const subcategory = data.subcategory;
                const permlink = data.permlink; // Asumiendo permlink es único y puede ser usado como filename

                if (!category) {
                    console.warn(`Skipping ${file}: No category found in frontmatter.`);
                    continue;
                }

                const categorySlug = category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
                let newDirPath = path.join(contentBlogDir, categorySlug);

                if (subcategory) {
                    const subcategorySlug = subcategory.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
                    newDirPath = path.join(newDirPath, subcategorySlug);
                }

                const newFilename = `${permlink}.md`; // Usar permlink como el nombre del archivo
                const newPath = path.join(newDirPath, newFilename);

                // Asegurar que el nuevo directorio exista
                await fs.mkdir(newDirPath, { recursive: true });

                // Mover el archivo
                if (oldPath !== newPath) { // Solo mover si las rutas son diferentes
                    await fs.rename(oldPath, newPath);
                    console.log(`Movido: ${file} -> ${path.relative(contentBlogDir, newPath)}`);
                    movedCount++;
                } else {
                    console.log(`Ya en su lugar: ${file}`);
                }
            }
        }
        console.log(`Organización completada. ${movedCount} posts movidos.`);
    } catch (error) {
        console.error('Error durante la organización de posts:', error);
    }
}

organizePosts();