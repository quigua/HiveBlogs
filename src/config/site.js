// src/config/site.js

export const SITE_INFO = {
  title: process.env.HIVE_USERNAME || 'HiveBlogs',
  description: 'Un generador de sitios web para usuarios de Hive.',
  author: process.env.HIVE_USERNAME || 'quigua', // Default author, can be overridden
  socialLinks: {
    twitter: 'https://twitter.com/your_twitter_handle',
    facebook: 'https://facebook.com/your_facebook_page',
    github: 'https://github.com/your_github_repo',
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} ${process.env.HIVE_USERNAME || 'HiveBlogs'}. Todos los derechos reservados.`,
  },
};

export const POST_SETTINGS = {
  postsPerPage: 10, // Default number of posts per page
};