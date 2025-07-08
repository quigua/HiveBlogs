// src/config/site.ts.astro

const HIVE_USERNAME = import.meta.env.HIVE_USERNAME;

export const SITE_INFO = {
  title: "Hived Blogs",
  description: "Explora, lee, escribe y conecta en la blockchain de Hive. Contenido libre, descentralizado y recompensado.",
  author: "@quigua",
  siteUrl: "https://www.hivedblogs.com", // Reemplaza con la URL real de tu sitio cuando esté en producción
  language: "es", // Idioma principal del sitio

  socialLinks: {
    twitter: "https://twitter.com/tu_usuario_twitter", // Reemplaza con tu usuario real
    facebook: "https://facebook.com/tu_pagina_facebook", // Reemplaza con tu página real
    github: "https://github.com/tu_usuario_github/HiveBlogs", // Reemplaza
    // Puedes añadir más redes sociales aquí
  },

  community: {
    name: "Comunidad Hive Latam", // Nombre de la comunidad principal
    link: "https://peakd.com/c/hive-131131", // Enlace a la comunidad
    // Puedes añadir más comunidades
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} HiveBlogs. Todos los derechos reservados.`,
    // Aquí puedes definir textos específicos para secciones del footer si quieres
  },

  // New locales object for translations
  locales: {
    es: {
      siteTitle: "Hived Blogs",
      siteDescription: "Explora, lee, escribe y conecta en la blockchain de Hive. Contenido libre, descentralizado y recompensado.",
      communityName: "Comunidad Hive Latam",
      footerCopyright: `© ${new Date().getFullYear()} HiveBlogs. Todos los derechos reservados.`,
      quickLinks: "Enlaces Rápidos",
      home: "Inicio",
      originalPosts: "Posts Originales",
      categories: "Categorías",
      about: "Acerca de",
      contact: "Contacto",
      followUs: "Síguenos",
      posts: "Publicaciones",
      rebloggedPosts: "Posts Reblogueados",
      worldWideHive: "World Wive Hive",
      communities: "Comunidades",
      followers: "Seguidores",
      hotPosts: "Hot Posts",
      recentPosts: "Posts recientes",
      favorites: "Favoritos",
      latestOriginalPosts: "Últimos Posts Originales",
      recentPublications: "Publicaciones Recientes de @quigua",
      hiveCategories: "Categorías de Hive",
      technology: "Tecnología",
      blockchain: "Blockchain",
      tutorials: "Tutoriales",
      news: "Noticias",
      aboutUser: "Acerca de",
      subscribedCommunities: "Comunidades Suscritas",
      community: "Comunidad",
      subscribers: "Suscriptores:",
      activeAuthors: "Autores Activos:",
      pendingHBD: "HBD Pendientes:",
      recentPostsTitle: "Posts Recientes",
      errorLoadingPosts: "Error al cargar los posts recientes.",
      noRecentPosts: "No se encontraron posts recientes para esta comunidad.",
      communityNotFound: "Comunidad no encontrada.",
      errorLoadingCommunityInfo: "No se pudo cargar la información de la comunidad.",
      backToCommunity: "Volver a esta Comunidad",
      by: "Por",
      on: "el",
      comments: "Comentarios",
      unknownDate: "Fecha desconocida",
      postNotFound: "Post no encontrado",
      postTooOld: "Este post es demasiado antiguo para ser mostrado.",
      postNotFoundOrError: "Post no encontrado o error al cargar.",
      errorLoadingPost: "Error al cargar el post.",
      backToCommunityPage: "Volver a la Comunidad",
      originalPostsPageTitle: "Posts Originales",
      exploreOriginalPosts: "Explora los posts originales de",
      noOriginalPostsFound: "No se encontraron posts originales. Ejecuta `node fetch-hive-posts.js` para obtenerlos.",
      previous: "Anterior",
      page: "Página",
      of: "de",
      next: "Siguiente",
      heroDescription: "Desarrollador de aplicaciones para la cadena de bloques de Hive",
      heroTitle: "Bienvenido al blog de @quigua",
      headerTitle: "El Blog de @quigua en Hive"
    },
    en: {
      siteTitle: "Hived Blogs", // Keeping the same for now, but can be changed
      siteDescription: "Explore, read, write, and connect on the Hive blockchain. Free, decentralized, and rewarded content.",
      communityName: "Hive Latam Community",
      footerCopyright: `© ${new Date().getFullYear()} HiveBlogs. All rights reserved.`,
      quickLinks: "Quick Links",
      home: "Home",
      originalPosts: "Original Posts",
      categories: "Categories",
      about: "About",
      contact: "Contact",
      followUs: "Follow Us",
      posts: "Posts",
      rebloggedPosts: "Reblogged Posts",
      worldWideHive: "World Wide Hive",
      communities: "Communities",
      followers: "Followers",
      hotPosts: "Hot Posts",
      recentPosts: "Recent Posts",
      favorites: "Favorites",
      latestOriginalPosts: "Latest Original Posts",
      recentPublications: "Recent Publications by @quigua",
      hiveCategories: "Hive Categories",
      technology: "Technology",
      blockchain: "Blockchain",
      tutorials: "Tutorials",
      news: "News",
      aboutUser: "About",
      subscribedCommunities: "Subscribed Communities",
      community: "Community",
      subscribers: "Subscribers:",
      activeAuthors: "Active Authors:",
      pendingHBD: "Pending HBD:",
      recentPostsTitle: "Recent Posts",
      errorLoadingPosts: "Error loading recent posts.",
      noRecentPosts: "No recent posts found for this community.",
      communityNotFound: "Community not found.",
      errorLoadingCommunityInfo: "Could not load community information.",
      backToCommunity: "Back to this Community",
      by: "By",
      on: "on",
      comments: "Comments",
      unknownDate: "Unknown date",
      postNotFound: "Post not found",
      postTooOld: "This post is too old to be displayed.",
      postNotFoundOrError: "Post not found or error loading.",
      errorLoadingPost: "Error loading post.",
      backToCommunityPage: "Back to Community Page",
      originalPostsPageTitle: "Original Posts",
      exploreOriginalPosts: "Explore original posts by",
      noOriginalPostsFound: "No original posts found. Run `node fetch-hive-posts.js` to get them.",
      previous: "Previous",
      page: "Page",
      of: "of",
      next: "Next",
      heroDescription: "Became an application developer for the Hive blockchain",
      heroTitle: "Welcome to @quigua's blog",
      headerTitle: "@quigua's Hived Blog"
    }
  }
};

// Puedes exportar otras configuraciones si las necesitas, por ejemplo, para posts

export const POST_SETTINGS = {
  postsPerPage: 6,
  showExcerpt: true,
};