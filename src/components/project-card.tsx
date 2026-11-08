import { Link } from 'react-router'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import type { Project } from '@/lib/projects'

export function ProjectCard({ project }: { project: Project }) {
  const { name, question, summary, stage, status, repoUrl, demoUrl, postSlug } = project
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{question}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex gap-2">
          <Badge variant={stage === 'building' ? 'default' : 'secondary'}>
            {stage === 'building' ? 'Building' : 'Shipped'}
          </Badge>
          <Badge variant="outline">{status}</Badge>
        </div>
        <p className="text-sm text-muted-foreground">{summary}</p>
      </CardContent>
      {(repoUrl || demoUrl || postSlug) && (
        <CardFooter className="gap-4 text-sm">
          {repoUrl && (
            <a className="underline underline-offset-4" href={repoUrl} rel="noreferrer">
              Repo
            </a>
          )}
          {demoUrl && (
            <a className="underline underline-offset-4" href={demoUrl} rel="noreferrer">
              Demo
            </a>
          )}
          {postSlug && (
            <Link className="underline underline-offset-4" to={`/blog/${postSlug}`}>
              Post
            </Link>
          )}
        </CardFooter>
      )}
    </Card>
  )
}
