import { PostList } from '@/components/post-list'
import { loadPosts } from '@/lib/posts'

export function BlogListPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Blog</h1>
      <PostList posts={loadPosts()} />
    </div>
  )
}
