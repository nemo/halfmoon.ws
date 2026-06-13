import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
    originalUrl: z.string().url(),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    period: z.string(),
    summary: z.string(),
    brandColor: z.string().regex(/^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, {
      message: 'brandColor must be a hex color, e.g. #c53b3b',
    }),
    link: z.string().url().optional(),
    order: z.number(),
    heroImage: z.string().optional(),
    gallery: z.array(z.string()).optional(),
  }),
});

export const collections = { posts, projects };
