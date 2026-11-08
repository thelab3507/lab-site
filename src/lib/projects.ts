export type ProjectStage = 'building' | 'shipped'
export type ProjectStatus = 'Active' | 'Parked' | 'Archived'

export type Project = {
  slug: string
  name: string
  question: string
  summary: string
  stage: ProjectStage
  status: ProjectStatus
  startedAt: string
  repoUrl?: string
  demoUrl?: string
  postSlug?: string
}

function newestFirst(a: Project, b: Project): number {
  return b.startedAt.localeCompare(a.startedAt)
}

function byStage(projects: Project[], stage: ProjectStage): Project[] {
  return projects.filter((p) => p.stage === stage).sort(newestFirst)
}

export function getBuilding(projects: Project[]): Project[] {
  return byStage(projects, 'building')
}

export function getShipped(projects: Project[]): Project[] {
  return byStage(projects, 'shipped')
}
