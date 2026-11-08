import { useParams } from 'react-router'
import { Markdown } from '@/components/markdown'
import { getPost } from '@/lib/posts'
import { NotFoundPage } from '@/pages/not-found'

export function BlogPostPage() {
  const { slug = '' } = useParams()
  const post = getPost(slug)
  if (!post) return <NotFoundPage />
  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm text-muted-foreground">{post.date}</p>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </header>
      <Markdown>{post.body}</Markdown>
    </article>
  )
}
