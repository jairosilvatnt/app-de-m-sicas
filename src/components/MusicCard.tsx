import { Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface MusicCardProps {
  id: string
  title: string
  subtitle: string
  image: string
  type: 'playlist' | 'album' | 'artist'
  className?: string
  onClick?: () => void
}

export function MusicCard({
  id,
  title,
  subtitle,
  image,
  type,
  className,
  onClick,
}: MusicCardProps) {
  return (
    <Link
      to={type === 'playlist' ? `/playlist/${id}` : '#'}
      className={cn(
        'group relative flex flex-col gap-3 rounded-md bg-[#181818] p-4 transition-all duration-300 hover:bg-[#282828] cursor-pointer',
        className,
      )}
      onClick={onClick}
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-md shadow-lg">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-2 right-2 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Button
            size="icon"
            className="h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-xl hover:bg-primary/90 hover:scale-105 transition-transform"
          >
            <Play className="fill-current pl-1 h-6 w-6" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="truncate font-bold text-white" title={title}>
          {title}
        </h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </Link>
  )
}
