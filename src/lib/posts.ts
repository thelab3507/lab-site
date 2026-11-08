import fm from 'front-matter'

export type Post = {
  slug: string
  title: string
  date: string
  summary: string
  body: string
}

type Frontmatter = {
  title?: unknown
  date?: unknown
  summary?: unknown
  draft?: unknown
}

function requireString(path: string, field: string, value: unknown): string {
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(`${path}: frontmatter "${field}" is required`)
  }
  return value
}

export function parsePost(path: string, raw: string): Post {
  const { attributes, body } = fm<Frontmatter>(raw)
  const title = requireString(path, 'title', attributes.title)
  const summary = requireString(path, 'summary', attributes.summary)
  const date = normalizeDate(path, attributes.date)
  const slug = path.split('/').pop()!.replace(/\.md$/, '')
  return { slug, title, date, summary, body }
}

function normalizeDate(path: string, value: unknown): string {
  const text = value instanceof Date ? value.toISOString() : String(value ?? '')
  const iso = text.slice(0, 10)
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso) || Number.isNaN(Date.parse(iso))) {
    throw new Error(`${path}: frontmatter "date" must be YYYY-MM-DD`)
  }
  return iso
}

export function isDraft(raw: string): boolean {
  return fm<Frontmatter>(raw).attributes.draft === true
}

export function buildPosts(files: Record<string, string>): Post[] {
  return Object.entries(files)
    .filter(([, raw]) => !isDraft(raw))
    .map(([path, raw]) => parsePost(path, raw))
    .sort((a, b) => b.date.localeCompare(a.date))
}

const files = import.meta.glob<string>('../content/posts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

export function loadPosts(): Post[] {
  return buildPosts(files)
}

export function getPost(slug: string): Post | undefined {
  return loadPosts().find((p) => p.slug === slug)
}
