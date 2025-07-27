import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        content: defineCollection({
            type: 'page',
            source: '**/*.md'
        }),
        docs: defineCollection({
            type: 'page',
            source: '**/*.md'
        }),
        authors: defineCollection({
            type: 'data',
            source: 'authors/**.csv',
            schema: z.object({
                name: z.string(),
                email: z.string(),
                avatar: z.string()
            })
        })
    }
})
