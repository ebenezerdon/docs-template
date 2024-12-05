import type { APIRoute } from 'astro'
import { getCollection, type CollectionEntry } from 'astro:content'

export const GET: APIRoute = async () => {
  const docs = await getCollection('docs')

  const searchIndex = docs.map((entry: CollectionEntry<'docs'>) => ({
    title: entry.data.title,
    description: entry.data.description,
    group: entry.data.group,
    slug: `/${entry.slug}`,
  }))

  return new Response(JSON.stringify(searchIndex), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}