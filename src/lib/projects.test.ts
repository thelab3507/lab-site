import { describe, expect, it } from 'vitest'
import { getBuilding, getShipped, type Project } from './projects'

function project(overrides: Partial<Project>): Project {
  return {
    slug: 'p',
    name: 'P',
    question: 'Q?',
    summary: 'S',
    stage: 'building',
    status: 'Active',
    startedAt: '2026-11-01',
    ...overrides,
  }
}

describe('getBuilding', () => {
  it('returns only building-stage projects', () => {
    const projects = [
      project({ slug: 'a', stage: 'building' }),
      project({ slug: 'b', stage: 'shipped' }),
    ]
    expect(getBuilding(projects).map((p) => p.slug)).toEqual(['a'])
  })

  it('orders by startedAt descending', () => {
    const projects = [
      project({ slug: 'old', startedAt: '2026-10-01' }),
      project({ slug: 'new', startedAt: '2026-11-04' }),
    ]
    expect(getBuilding(projects).map((p) => p.slug)).toEqual(['new', 'old'])
  })

  it('does not mutate the input array', () => {
    const projects = [
      project({ slug: 'old', startedAt: '2026-10-01' }),
      project({ slug: 'new', startedAt: '2026-11-04' }),
    ]
    getBuilding(projects)
    expect(projects.map((p) => p.slug)).toEqual(['old', 'new'])
  })
})

describe('getShipped', () => {
  it('excludes building-stage projects', () => {
    const projects = [
      project({ slug: 'a', stage: 'building' }),
      project({ slug: 'b', stage: 'shipped' }),
    ]
    expect(getShipped(projects).map((p) => p.slug)).toEqual(['b'])
  })
})
