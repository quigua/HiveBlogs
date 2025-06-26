import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    author: z.string(),
    imageUrl: z.string(), // ¡Cambio importante aquí! Ahora es solo una cadena de texto
    excerpt: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    votes: z.number().default(0),
    hbdPayout: z.string().default("0.00 HBD"),
    comments: z.number().default(0),
  }),
});

export const collections = {
  'blog': blogCollection,
};