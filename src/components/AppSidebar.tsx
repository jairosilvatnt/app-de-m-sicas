import { Home, Search, Library, Plus, Heart } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  useSidebar,
} from '@/components/ui/sidebar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { mockPlaylists } from '@/lib/data'
import { cn } from '@/lib/utils'

export function AppSidebar() {
  const location = useLocation()
  const { isMobile } = useSidebar()

  if (isMobile) return null

  const isActive = (path: string) => location.pathname === path

  return (
    <Sidebar
      collapsible="none"
      className="border-r border-[#282828] bg-black text-gray-300 w-[240px] hidden md:flex h-screen flex-col"
    >
      <SidebarHeader className="p-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-white font-bold text-xl mb-4"
        >
          {/* Simple Logo Placeholder */}
          <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
            <div className="h-4 w-4 bg-black rounded-full" />
          </div>
          <span>App de Músicas</span>
        </Link>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={isActive('/')}
              className="text-base font-bold data-[active=true]:text-white data-[active=true]:bg-[#282828]"
            >
              <Link to="/" className="flex items-center gap-4">
                <Home
                  className={cn(
                    'h-6 w-6',
                    isActive('/') ? 'text-white' : 'text-gray-400',
                  )}
                />
                <span>Início</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={isActive('/search')}
              className="text-base font-bold data-[active=true]:text-white data-[active=true]:bg-[#282828]"
            >
              <Link to="/search" className="flex items-center gap-4">
                <Search
                  className={cn(
                    'h-6 w-6',
                    isActive('/search') ? 'text-white' : 'text-gray-400',
                  )}
                />
                <span>Buscar</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={isActive('/library')}
              className="text-base font-bold data-[active=true]:text-white data-[active=true]:bg-[#282828]"
            >
              <Link to="/library" className="flex items-center gap-4">
                <Library
                  className={cn(
                    'h-6 w-6',
                    isActive('/library') ? 'text-white' : 'text-gray-400',
                  )}
                />
                <span>Sua Biblioteca</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <div className="mt-2 space-y-1">
          <button className="flex w-full items-center gap-4 px-4 py-3 text-sm font-bold text-gray-400 transition-colors hover:text-white hover:bg-transparent">
            <div className="flex h-6 w-6 items-center justify-center rounded-[4px] bg-gray-400 text-black group-hover:bg-white">
              <Plus className="h-4 w-4 text-black" />
            </div>
            <span>Criar Playlist</span>
          </button>
          <Link
            to="/playlist/liked-songs"
            className="flex w-full items-center gap-4 px-4 py-3 text-sm font-bold text-gray-400 transition-colors hover:text-white"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-[4px] bg-gradient-to-br from-indigo-600 to-blue-400">
              <Heart className="h-3 w-3 fill-white text-white" />
            </div>
            <span>Músicas Curtidas</span>
          </Link>
        </div>

        <div className="my-2 border-t border-[#282828] mx-4" />

        <SidebarGroup>
          <SidebarGroupContent>
            <ScrollArea className="h-[calc(100vh-350px)]">
              <ul className="space-y-1 px-2">
                {mockPlaylists.map((playlist) => (
                  <li key={playlist.id}>
                    <Link
                      to={`/playlist/${playlist.id}`}
                      className={cn(
                        'block truncate rounded-md px-2 py-2 text-sm text-gray-400 transition-colors hover:text-white',
                        isActive(`/playlist/${playlist.id}`) &&
                          'text-white font-medium',
                      )}
                    >
                      {playlist.name}
                    </Link>
                  </li>
                ))}
                {/* Simulate many playlists */}
                {Array.from({ length: 20 }).map((_, i) => (
                  <li key={i}>
                    <Link
                      to="#"
                      className="block truncate rounded-md px-2 py-2 text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      Playlist #{i + 1}
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
