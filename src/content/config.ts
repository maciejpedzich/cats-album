import { z, defineCollection } from 'astro:content';

const cats = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    description: z.string().max(250),
    image: z.object({
      src: z.string(),
      alt: z.string()
    }),
    passedAway: z.boolean().optional().default(false),
    owner: z.object({
      name: z.string(),
      link: z.string().optional()
    })
  })
});

export const collections = { cats };
