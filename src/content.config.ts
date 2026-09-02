import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const works = defineCollection({
    // Load Markdown and MDX files in the `src/content/works/` directory.
    loader: glob({ base: './src/content/works', pattern: '**/*.{md,mdx}' }),
    // Type-check frontmatter using a schema
    schema: z.object({
        icon: z.string(),
        title: z.string(),
        description: z.string(),
        // Transform string to Date object
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        tags: z.array(z.string()).optional(),
        // Optional scope label for work that is a feature/module within a larger project, not the whole project
        scope: z.string().optional(),
        // Ownership/contribution line shown on cards and the case study header (e.g. "UX architecture · Frontend implementation")
        role: z.string().optional(),
        // Short role/discipline title shown above `role` on production-work cards (e.g. "UX Engineer · Frontend")
        identity: z.string().optional(),
        // Highlight this post as the featured case study on the /works listing
        featured: z.boolean().optional(),
        // Short, concrete highlight bullets shown on the featured card (only used when featured is true)
        highlights: z.array(z.string()).optional(),
        // Delivery context shown on project cards (e.g. "React · Production · Web & Mobile")
        delivery: z.string().optional(),
        // Add pageSkills support
        pageSkills: z.array(z.object({
            category: z.string(),
            icon: z.string(),
            skills: z.array(z.string())
        })).optional(),
    }),
});

export const collections = { works };