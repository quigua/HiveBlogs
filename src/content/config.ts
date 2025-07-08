import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    created: z.string(),
    author: z.string(),
    imageUrl: z.string(),
    permlink: z.string(), // ¡Cambio importante aquí! Ahora es solo una cadena de texto
    description: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    votesCount: z.number().default(0),
    hbdPayout: z.string().default("0.00 HBD"),
    commentsCount: z.number().default(0),
  }),
});

export const collections = {
  'blog': blogCollection,
};