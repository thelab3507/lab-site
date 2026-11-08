import { ProjectCard } from '@/components/project-card'
import { projects } from '@/content/projects'
import { getBuilding } from '@/lib/projects'

export function BuildingBoard() {
  const building = getBuilding(projects)
  return (
    <section aria-labelledby="building-heading" className="space-y-4">
      <h2 id="building-heading" className="text-xl font-semibold">
        Currently building
      </h2>
      {building.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          Nothing in progress. The first topic gets picked next.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {building.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      )}
    </section>
  )
}
