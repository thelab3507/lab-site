import { ProjectCard } from '@/components/project-card'
import { projects } from '@/content/projects'
import { getBuilding, getShipped } from '@/lib/projects'

export function ProjectsPage() {
  const all = [...getBuilding(projects), ...getShipped(projects)]
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {all.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  )
}
