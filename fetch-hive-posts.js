// fetch-hive-posts.js

// --- INICIO DEL CÓDIGO (NO RECORTAR ARRIBA DE ESTA LÍNEA) ---

// Importa tus métodos de hiveblogkit (asegúrate de que el nombre sea 'hiveblogkit' si así lo enlazaste)
// Asegúrate de que 'hiveblogkit' esté correctamente `npm link`eado o instalado
import { getUsersOriginalPosts, getUsersRebloggedPosts, getUserCommunitySubscriptions } from 'hiveblogkit';
import fs from 'fs/promises'; // Para operaciones asíncronas con archivos
import path from 'path';     // Para manejar rutas de archivos

// --- CONFIGURACIÓN ---
const HIVE_USERNAME = process.env.HIVE_USERNAME; // Lee el usuario de una variable de entorno
const ORIGINAL_POSTS_DIR = path.join(process.cwd(), 'src', 'content', 'blog');
const REBLOGGED_POSTS_DIR = path.join(process.cwd(), 'src', 'data', 'reblogged-posts');
const COMMUNITY_SUBSCRIPTIONS_DIR = path.join(process.cwd(), 'src', 'data', 'community-subscriptions');
// --- FIN CONFIGURACIÓN ---

// Función para sanitizar nombres de archivo (quitar caracteres especiales)
function sanitizeFilename(title, permlink) {
    // Usa el permlink si está limpio, si no, sanitiza el título
    const baseName = permlink || title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Elimina caracteres no alfanuméricos, espacios o guiones
        .replace(/\s+/g, '-')        // Reemplaza espacios con guiones
        .replace(/-+/g, '-')         // Elimina guiones duplicados
        .substring(0, 50);           // Limita la longitud para nombres de archivo
    return `${baseName}.md`;
}

// Función para formatear los metadatos para el frontmatter de Astro
function formatFrontmatter(postData) {
    // Parsear json_metadata para obtener tags, imagen, descripción
    let metadata = {};
    try {
        metadata = JSON.parse(postData.json_metadata);
    } catch (e) {
        console.warn(`Advertencia: No se pudo parsear json_metadata para el post ${postData.permlink}:`, e);
    }

    const tags = metadata.tags || [];
    const image = metadata.image && metadata.image.length > 0 ? metadata.image[0] : '/placeholder-post.jpg';
    const description = metadata.description || (postData.body ? postData.body.substring(0, 150).replace(/\n/g, ' ') + '...' : 'Sin descripción.');

    // Asegúrate de escapar comillas dobles dentro de los valores para evitar errores en el frontmatter
    const escapedTitle = postData.title.replace(/"/g, '\\"');
    const escapedDescription = description.replace(/"/g, '\\"');
    const escapedAuthor = postData.author.replace(/"/g, '\\"');
    const escapedPermlink = postData.permlink.replace(/"/g, '\\"');
    const escapedCategory = postData.category.replace(/"/g, '\\"');
    const escapedUrl = postData.url.replace(/"/g, '\\"');
    const escapedImage = image ? image.replace(/"/g, '\\"') : null;

    // --- PROPIEDADES AÑADIDAS AL FRONTMATTER PARA EL POSTCARD ---
    // total_payout_value ya debería estar en HBD o al menos en un formato legible.
    // Determinar el valor del pago según si el post ya ha sido pagado o está pendiente
    let hbdPayout;
    const now = new Date();
    // postData.cashout_time es la fecha en que se espera el pago.
    // Si cashout_time es futuro o está muy cerca del futuro (es decir, aún no ha pagado),
    // usamos pending_payout_value. De lo contrario, usamos total_payout_value.
    if (new Date(postData.cashout_time) > now) {
        hbdPayout = postData.pending_payout_value || '0.000 HBD (Pendiente)';
    } else {
        hbdPayout = postData.total_payout_value || '0.000 HBD (Pagado)';
    }
    
    const votesCount = postData.active_votes ? postData.active_votes.length : 0;
    const commentsCount = postData.children || 0;
    // --- FIN PROPIEDADES AÑADIDAS ---

    return `---
title: "${escapedTitle}"
description: "${escapedDescription}"
author: "${escapedAuthor}"
permlink: "${escapedPermlink}"
category: "${escapedCategory}"
created: "${new Date(postData.created).toISOString()}"
lastUpdate: "${new Date(postData.last_update).toISOString()}"
url: "${escapedUrl}"
reputation: ${postData.author_reputation_calculated}
${escapedImage ? `imageUrl: "${escapedImage}"` : ''}
tags: [${tags.map(tag => `"${tag.replace(/"/g, '\\"')}"`).join(', ')}]
hbdPayout: "${hbdPayout}"
votesCount: ${votesCount}
commentsCount: ${commentsCount}
---`;
}

async function fetchAndSavePosts() {
    console.log(`\n--- Obteniendo posts para el usuario: ${HIVE_USERNAME} ---\n`);

    if (!HIVE_USERNAME || HIVE_USERNAME.trim() === '') {
        console.error('ERROR: La variable de entorno HIVE_USERNAME no está definida. Por favor, configúrala antes de ejecutar el script.');
        console.error('Puedes hacerlo con: export HIVE_USERNAME=tu_usuario_de_hive');
        process.exit(1);
    }

    try {
        // --- Posts Originales ---
        console.log('Obteniendo posts originales...');
        const originalPosts = await getUsersOriginalPosts(HIVE_USERNAME);
        console.log(`Encontrados ${originalPosts.length} posts originales.`);

        // await fs.mkdir(ORIGINAL_POSTS_DIR, { recursive: true });
        for (const post of originalPosts) {
            console.log(`Processing post: ${post.permlink}, Active Votes: ${post.active_votes ? post.active_votes.length : 0}`);
            const filename = sanitizeFilename(post.title, post.permlink);
            const filepath = path.join(ORIGINAL_POSTS_DIR, filename);
            const frontmatter = formatFrontmatter(post);
            const content = post.body; // El cuerpo del post ya está en Markdown

            await fs.writeFile(filepath, `${frontmatter}\n\n${content}`, 'utf-8');
            console.log(`Guardado: ${filepath}`);
        }
        console.log('Posts originales guardados correctamente.');

        // --- Posts Reblogueados ---
        console.log('\nObteniendo posts reblogueados...');
        const rebloggedPosts = await getUsersRebloggedPosts(HIVE_USERNAME);
        console.log(`Encontrados ${rebloggedPosts.length} posts reblogueados.`);

        await fs.mkdir(REBLOGGED_POSTS_DIR, { recursive: true });
        for (const post of rebloggedPosts) {
            const filename = sanitizeFilename(post.title, post.permlink);
            const filepath = path.join(REBLOGGED_POSTS_DIR, filename);
            const frontmatter = formatFrontmatter(post);
            const content = post.body; // El cuerpo del post ya está en Markdown

            await fs.writeFile(filepath, `${frontmatter}\n\n${content}`, 'utf-8');
            console.log(`Guardado: ${filepath}`);
        }
        console.log('Posts reblogueados guardados correctamente.');

    } catch (error) {
        console.error('\n¡Error al obtener o guardar los posts de Hive:', error);
        if (error.code === 'ERR_MODULE_NOT_FOUND') { // Cambiado a ERR_MODULE_NOT_FOUND para mayor precisión
            console.error("Asegúrate de que 'hiveblogkit' esté correctamente `npm link`eado o instalado en tu proyecto.");
            console.error("También verifica que tu librería `hiveblogkit` haya sido construida (si usa TypeScript o Babel) y que el `main` o `exports` en su `package.json` apunte al archivo compilado correcto.");
        } else {
            console.error("Detalles del error:", error);
        }
    } finally {
        console.log('\n--- Proceso de obtención de posts finalizado ---');
    }
}

fetchAndSavePosts();

// --- FIN DEL CÓDIGO (NO RECORTAR DEBAJO DE ESTA LÍNEA) ---

async function fetchAndSaveCommunitySubscriptions() {
    console.log(`\n--- Obteniendo suscripciones de comunidad para el usuario: ${HIVE_USERNAME} ---\n`);

    if (!HIVE_USERNAME || HIVE_USERNAME.trim() === '') {
        console.error('ERROR: La variable de entorno HIVE_USERNAME no está definida. Por favor, configúrala antes de ejecutar el script.');
        process.exit(1);
    }

    try {
        console.log('Obteniendo suscripciones de comunidad...');
        const subscriptions = await getUserCommunitySubscriptions(HIVE_USERNAME);

        if (subscriptions && subscriptions.length > 0) {
            console.log(`Encontradas ${subscriptions.length} suscripciones de comunidad.`);
            await fs.mkdir(COMMUNITY_SUBSCRIPTIONS_DIR, { recursive: true });
            const filepath = path.join(COMMUNITY_SUBSCRIPTIONS_DIR, 'subscriptions.json');
            await fs.writeFile(filepath, JSON.stringify(subscriptions, null, 2), 'utf-8');
            console.log(`Suscripciones de comunidad guardadas en: ${filepath}`);
        } else {
            console.log(`No se encontraron suscripciones de comunidad para '${HIVE_USERNAME}'.`);
        }
    } catch (error) {
        console.error('\n¡Error al obtener o guardar las suscripciones de comunidad:', error);
    } finally {
        console.log('\n--- Proceso de obtención de suscripciones de comunidad finalizado ---');
    }
}

// Llama a la nueva función para obtener y guardar las suscripciones de comunidad
fetchAndSaveCommunitySubscriptions();