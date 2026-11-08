import type { Project } from '@/lib/projects'

export const projects: Project[] = [
  {
    slug: 'topic-scout',
    name: 'Topic scout',
    question:
      'Can a scheduled pipeline over official feeds, scored by a home inference server, surface topics that pass the five-test filter?',
    summary:
      'A self-built pipeline that searches for topics programmatically. It runs on the home PC as a scheduled task, pulls official RSS feeds and APIs, dedupes lexically, scores on title, summary and a short snippet, and uses GitHub search as a novelty check.',
    stage: 'shipped',
    status: 'Active',
    startedAt: '2026-11-04',
  },
]
