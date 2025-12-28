import { Home, Search, Library } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

export function MobileNav() {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around bg-gradient-to-t from-black to-black/95 px-4 backdrop-blur-lg md:hidden border-t border-[#282828]">
      <Link to="/" className="flex flex-col items-center gap-1">
        <Home
          className={cn(
            'h-6 w-6',
            isActive('/') ? 'text-white' : 'text-gray-500',
          )}
        />
        <span
          className={cn(
            'text-[10px]',
            isActive('/') ? 'text-white' : 'text-gray-500',
          )}
        >
          Início
        </span>
      </Link>
      <Link to="/search" className="flex flex-col items-center gap-1">
        <Search
          className={cn(
            'h-6 w-6',
            isActive('/search') ? 'text-white' : 'text-gray-500',
          )}
        />
        <span
          className={cn(
            'text-[10px]',
            isActive('/search') ? 'text-white' : 'text-gray-500',
          )}
        >
          Buscar
        </span>
      </Link>
      <Link to="/library" className="flex flex-col items-center gap-1">
        <Library
          className={cn(
            'h-6 w-6',
            isActive('/library') ? 'text-white' : 'text-gray-500',
          )}
        />
        <span
          className={cn(
            'text-[10px]',
            isActive('/library') ? 'text-white' : 'text-gray-500',
          )}
        >
          Biblioteca
        </span>
      </Link>
    </div>
  )
}
