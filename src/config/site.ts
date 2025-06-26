// src/config/site.ts

export const SITE_INFO = {
  title: "Hived Blogs - Tu plataforma de blogging descentralizada",
  description: "Explora, lee, escribe y conecta en la blockchain de Hive. Contenido libre, descentralizado y recompensado.",
  author: "@quigua", // Puedes cambiar esto
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

  contact: {
    email: "contacto@hiveblogs.com", // Email de contacto
    // Otros datos de contacto
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} HiveBlogs. Todos los derechos reservados.`,
    // Aquí puedes definir textos específicos para secciones del footer si quieres
  }
};

// Puedes exportar otras configuraciones si las necesitas, por ejemplo, para posts
export const POST_SETTINGS = {
  postsPerPage: 6,
  showExcerpt: true,
};