import { describe, expect, it } from 'vitest'
import { buildPosts, parsePost } from './posts'

function source(fields: Record<string, string>, body = 'Body text.'): string {
  const lines = Object.entries(fields).map(([k, v]) => `${k}: ${v}`)
  return `---\n${lines.join('\n')}\n---\n${body}\n`
}

const valid = { title: 'Hello', date: '2026-11-08', summary: 'A summary.' }

describe('parsePost', () => {
  it('extracts title, date and summary from frontmatter', () => {
    const post = parsePost('/posts/hello.md', source(valid))
    expect(post.title).toBe('Hello')
    expect(post.date).toBe('2026-11-08')
    expect(post.summary).toBe('A summary.')
    expect(post.body.trim()).toBe('Body text.')
  })

  it('derives slug from filename', () => {
    expect(parsePost('../content/posts/my-first-post.md', source(valid)).slug).toBe(
      'my-first-post',
    )
  })

  it('throws naming the file when title is missing', () => {
    const { title: _title, ...rest } = valid
    expect(() => parsePost('/posts/bad.md', source(rest))).toThrow(/bad\.md.*title/)
  })

  it('throws on an invalid date', () => {
    expect(() =>
      parsePost('/posts/bad.md', source({ ...valid, date: 'not-a-date' })),
    ).toThrow(/bad\.md.*date/)
  })
})

describe('buildPosts', () => {
  it('sorts posts newest first', () => {
    const posts = buildPosts({
      '/posts/old.md': source({ ...valid, date: '2026-10-01' }),
      '/posts/new.md': source({ ...valid, date: '2026-11-08' }),
    })
    expect(posts.map((p) => p.slug)).toEqual(['new', 'old'])
  })

  it('excludes drafts', () => {
    const posts = buildPosts({
      '/posts/live.md': source(valid),
      '/posts/wip.md': source({ ...valid, draft: 'true' }),
    })
    expect(posts.map((p) => p.slug)).toEqual(['live'])
  })
})
