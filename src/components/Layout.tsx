import { Outlet } from 'react-router-dom'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/AppSidebar'
import { MobileNav } from '@/components/MobileNav'
import { Player } from '@/components/Player'
import { PlayerProvider } from '@/contexts/PlayerContext'

export default function Layout() {
  return (
    <PlayerProvider>
      <SidebarProvider defaultOpen={true} className="bg-black">
        <div className="flex w-full bg-black min-h-screen">
          <AppSidebar />
          <SidebarInset className="flex-1 overflow-hidden bg-[#121212] flex flex-col relative w-full">
            <div className="flex-1 overflow-y-auto pb-24 scroll-smooth">
              <Outlet />
            </div>
            {/* Player Overlay */}
            <Player />
            <MobileNav />
          </SidebarInset>
        </div>
      </SidebarProvider>
    </PlayerProvider>
  )
}
