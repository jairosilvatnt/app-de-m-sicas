import { Play, Pause, Heart, MoreHorizontal } from 'lucide-react'
import { Track } from '@/lib/data'
import { cn } from '@/lib/utils'

interface TrackRowProps {
  track: Track
  index: number
  isPlaying: boolean
  isCurrent: boolean
  onPlay: () => void
}

export function TrackRow({
  track,
  index,
  isPlaying,
  isCurrent,
  onPlay,
}: TrackRowProps) {
  return (
    <div
      className={cn(
        'group grid grid-cols-[16px_4fr_3fr_2fr_minmax(120px,1fr)] gap-4 items-center rounded-md px-4 py-2 hover:bg-white/10 transition-colors cursor-pointer text-sm text-muted-foreground',
        isCurrent && 'text-primary',
      )}
      onClick={onPlay}
    >
      <div className="flex items-center justify-center w-4">
        <span
          className={cn(
            'block group-hover:hidden',
            isCurrent && isPlaying && 'hidden',
          )}
        >
          {isCurrent && !isPlaying ? (
            <span className="text-primary">{index + 1}</span>
          ) : (
            index + 1
          )}
        </span>
        <button
          className={cn(
            'hidden group-hover:block text-white',
            isCurrent && isPlaying && 'block',
          )}
        >
          {isCurrent && isPlaying ? (
            <Pause className="h-4 w-4 fill-primary text-primary" />
          ) : (
            <Play className="h-4 w-4 fill-white" />
          )}
        </button>
      </div>
      <div className="flex items-center gap-3 overflow-hidden">
        <img
          src={track.cover}
          alt={track.album}
          className="h-10 w-10 rounded-sm object-cover bg-neutral-800"
        />
        <div className="flex flex-col truncate">
          <span
            className={cn(
              'truncate font-medium text-white',
              isCurrent && 'text-primary',
            )}
          >
            {track.title}
          </span>
          <span className="truncate group-hover:text-white transition-colors">
            {track.artist}
          </span>
        </div>
      </div>
      <div className="hidden md:block truncate group-hover:text-white transition-colors">
        {track.album}
      </div>
      <div className="hidden md:block truncate">
        {new Date(track.dateAdded).toLocaleDateString('pt-BR', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })}
      </div>
      <div className="flex items-center justify-between">
        <button className="invisible group-hover:visible hover:text-white mr-4">
          <Heart className="h-4 w-4" />
        </button>
        <span className="mr-4">{track.duration}</span>
        <button className="invisible group-hover:visible hover:text-white">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
