import { Link, Outlet } from 'react-router'
import { Separator } from '@/components/ui/separator'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const links = [
  { to: '/projects', label: 'Projects' },
  { to: '/blog', label: 'Blog' },
]

export function SiteLayout() {
  return (
    <div className="mx-auto flex min-h-svh max-w-3xl flex-col px-4">
      <header className="flex items-center justify-between py-4">
        <Link to="/" className="text-lg font-bold">
          The Lab
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {links.map(({ to, label }) => (
              <NavigationMenuItem key={to}>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link to={to}>{label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </header>
      <Separator />
      <main className="flex-1 py-8">
        <Outlet />
      </main>
      <Separator />
      <footer className="py-4 text-sm text-muted-foreground">
        Reps in the lab: builds and contributions sparked by the news.
      </footer>
    </div>
  )
}
