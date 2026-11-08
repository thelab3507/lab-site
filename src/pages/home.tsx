import { BuildingBoard } from '@/components/building-board'
import { PostList } from '@/components/post-list'
import { loadPosts } from '@/lib/posts'

export function HomePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-2">
        <h1 className="text-3xl font-bold">The Lab</h1>
        <p className="text-muted-foreground">
          Reps in the lab: builds and contributions sparked by the news.
        </p>
      </section>
      <BuildingBoard />
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Latest posts</h2>
        <PostList posts={loadPosts().slice(0, 3)} />
      </section>
    </div>
  )
}
