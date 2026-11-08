import { Link } from 'react-router'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { Post } from '@/lib/posts'

export function PostList({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return <p className="text-sm text-muted-foreground">No posts yet.</p>
  }
  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link to={`/blog/${post.slug}`} className="block">
            <Card className="transition-colors hover:bg-accent">
              <CardHeader>
                <CardDescription>{post.date}</CardDescription>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.summary}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  )
}
