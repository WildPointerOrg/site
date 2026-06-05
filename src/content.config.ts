import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const stageSlugs = [
  'idea-forming',
  'discovery',
  'product-design',
  'planning',
  'architecture',
  'backlog',
  'development',
  'qa',
  'delivery',
  'operations',
  'feedback'
] as const;

const projectStatuses = ['active', 'paused', 'released', 'archived'] as const;

const markdownId = ({ entry }: { entry: string }) => entry.replace(/\.md$/i, '');

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/projects',
    generateId: markdownId
  }),
  schema: z.object({
    title: z.string().min(1),
    tagline: z.string().optional(),
    status: z.enum(projectStatuses),
    stage: z.enum(stageSlugs),
    stageLabel: z.string().min(1),
    summary: z.string().min(1),
    startedAt: z.string().optional(),
    neededRoles: z.array(z.string()).default([]),
    links: z
      .object({
        github: z.string().optional(),
        docs: z.string().optional(),
        discussions: z.string().optional(),
        roadmap: z.string().optional()
      })
      .optional(),
    contacts: z
      .object({
        coordinator: z.string().optional(),
        telegram: z.string().optional(),
        email: z.string().optional()
      })
      .optional(),
    coverImage: z.string().optional(),
    coverAlt: z.string().optional(),
    materials: z
      .array(
        z.object({
          stage: z.enum(stageSlugs),
          title: z.string().min(1),
          summary: z.string().optional(),
          url: z.string().min(1),
          order: z.number().default(999)
        })
      )
      .default([]),
    featured: z.boolean().default(false),
    order: z.number().default(999)
  })
});

const stages = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/stages',
    generateId: markdownId
  }),
  schema: z.object({
    title: z.string().min(1),
    order: z.number(),
    shortDescription: z.string().min(1),
    purpose: z.string().min(1),
    mainOutput: z.string().min(1),
    activities: z.array(z.string()).default([]),
    outputs: z.array(z.string()).default([]),
    requiredRoles: z.array(z.string()).default([]),
    relatedDocuments: z
      .array(
        z.object({
          title: z.string(),
          url: z.string().optional()
        })
      )
      .default([])
  })
});

const roles = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/roles',
    generateId: markdownId
  }),
  schema: z.object({
    title: z.string().min(1),
    order: z.number(),
    mission: z.string().min(1),
    summary: z.string().min(1),
    traditionalEquivalent: z.string().optional(),
    responsibilities: z.array(z.string()).default([]),
    limitations: z.array(z.string()).default([]),
    relatedStages: z.array(z.enum(stageSlugs)).default([]),
    relatedDocuments: z
      .array(
        z.object({
          title: z.string(),
          url: z.string().optional()
        })
      )
      .default([])
  })
});

const documents = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/documents',
    generateId: markdownId
  }),
  schema: z.object({
    title: z.string().min(1),
    docId: z.string().min(1),
    category: z.enum(['ENT', 'PRC', 'INS']),
    summary: z.string().min(1),
    url: z.string().optional(),
    order: z.number().default(999)
  })
});

export const collections = { projects, stages, roles, documents };

export { stageSlugs, projectStatuses };
