import { createBrowserRouter } from 'react-router'
import { SiteLayout } from '@/components/site-layout'
import { BlogListPage } from '@/pages/blog-list'
import { BlogPostPage } from '@/pages/blog-post'
import { HomePage } from '@/pages/home'
import { NotFoundPage } from '@/pages/not-found'
import { ProjectsPage } from '@/pages/projects'

export const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/projects', element: <ProjectsPage /> },
      { path: '/blog', element: <BlogListPage /> },
      { path: '/blog/:slug', element: <BlogPostPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
