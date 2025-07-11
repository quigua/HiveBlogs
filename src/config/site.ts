// src/config/site.ts.astro

const HIVE_USERNAME = import.meta.env.HIVE_USERNAME;

export const SITE_INFO = {
  title: "Hived Blogs",
  description: "Explora, lee, escribe y conecta en la blockchain de Hive. Contenido libre, descentralizado y recompensado.",
  author: "@quigua",
  siteUrl: "https://www.hivedblogs.com", // Reemplaza con la URL real de tu sitio cuando esté en producción
  language: "en", // Idioma principal del sitio

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
      siteTitle: "El Blog de @quigua en Hive",
      siteDescription: "Explora, lee, escribe y conecta en la blockchain de Hive. Contenido libre, descentralizado y recompensado.",
      communityName: "Comunidad Hive Latam",
      footerCopyright: `© ${new Date().getFullYear()} El Blog de @quigua en Hive. Todos los derechos reservados.`,
      quickLinks: "Enlaces Rápidos",
      home: "Inicio",
      originalPosts: "Posts Originales",
      categories: "Categorías",
      about: "Acerca de",
      contact: "Contacto",
      followUs: "Síguenos",
      rebloggedPosts: "Posts Reblogueados",
      worldWideHive: "World Wide Hive",
      communities: "Comunidades",
      followers: "Seguidores",
      hotPosts: "Hot Posts",
      recentPosts: "Posts recientes",
      favorites: "Favoritos",
      latestOriginalPosts: "Últimos Posts Originales",
      recentPublications: "Publicaciones Recientes de @quigua",
      hiveCategories: "Temas y Secciones",
      splinterlands: "Splinterlands",
      hivedBlogs: "Hived Blogs",
      hiveTutorials: "La Web 3.0",
      quiguaServices: "Servicios de @quigua",
      testCategory: "Categoría de Prueba", // Traducción para la categoría de prueba
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
      originalPostsPageTitle: "Original Posts",
      exploreOriginalPosts: "Explora los posts originales de",
      noOriginalPostsFound: "No se encontraron posts originales. Ejecuta `node fetch-hive-posts.js` para obtenerlos.",
      previous: "Anterior",
      page: "Página",
      of: "de",
      next: "Siguiente",
      heroDescription: "Desarrollador de aplicaciones para la cadena de bloques de Hive",
      heroTitle: "Bienvenido al blog de @quigua",
      headerTitle: "El Blog de @quigua en Hive",
      heroButton: "¿Quieres tener un blog monetizado?"
    },
    en: {
      siteTitle: "@quigua's Hived Blog", // Keeping the same for now, but can be changed
      siteDescription: "Explore, read, write, and connect on the Hive blockchain. Free, decentralized, and rewarded content.",
      communityName: "Hive Latam Community",
      footerCopyright: `© ${new Date().getFullYear()} @quigua's Hived Blog. All rights reserved.`,
      quickLinks: "Quick Links",
      home: "Home",
      originalPosts: "Original Posts",
      categories: "Categories",
      about: "About",
      contact: "Contact",
      followUs: "Follow Us",
      rebloggedPosts: "Reblogged Posts",
      worldWideHive: "World Wide Hive",
      communities: "Communities",
      followers: "Followers",
      hotPosts: "Hot Posts",
      recentPosts: "Recent Posts",
      favorites: "Favorites",
      latestOriginalPosts: "Latest Original Posts",
      recentPublications: "Recent Publications by @quigua",
      hiveCategories: "Topics and Sections",
      splinterlands: "Splinterlands",
      hivedBlogs: "Hived Blogs",
      hiveTutorials: "The Web 3.0",
      quiguaServices: "@quigua's Services",
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
      previous: "Anterior",
      page: "Página",
      of: "de",
      next: "Siguiente",
      heroDescription: "Application developer for the Hive blockchain",
      heroTitle: "Welcome to @quigua's blog",
      headerTitle: "@quigua's Hived Blog",
      heroButton: "Do you want to have a monetized blog?"
    }
  }
};

// Puedes exportar otras configuraciones si las necesitas, por ejemplo, para posts

export const POST_SETTINGS = {
  postsPerPage: 6,
  showExcerpt: true,
};

export const MAIN_CATEGORIES = [
  "Splinterlands",
  "Hived Blogs",
  "La Web 3.0",
  "Servicios de quigua", // Cambiado de "Servicios de @quigua"
  "Test Category"
];

export const SUBCATEGORIES = {
  "Splinterlands": [
    "Tutoriales",
    "Batallas y Estrategias",
    "Estadísticas",
    "Sugerencias y Fallos"
  ],
  "Hived Blogs": [],
  "La Web 3.0": [],
  "Servicios de @quigua": [],
  "Test Category": []
};