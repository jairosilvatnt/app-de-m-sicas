import { useParams } from 'react-router-dom'
import { Play, Heart, MoreHorizontal, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { mockPlaylists } from '@/lib/data'
import { TrackRow } from '@/components/TrackRow'
import { usePlayer } from '@/contexts/PlayerContext'
import { cn } from '@/lib/utils'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function PlaylistDetail() {
  const { id } = useParams<{ id: string }>()
  const playlist = mockPlaylists.find((p) => p.id === id)
  const { currentTrack, isPlaying, playTrack } = usePlayer()

  if (!playlist) {
    return <div className="p-8 text-white">Playlist not found</div>
  }

  const handlePlay = (trackId?: string) => {
    if (trackId) {
      const track = playlist.tracks.find((t) => t.id === trackId)
      if (track) playTrack(track, playlist.tracks)
    } else {
      playTrack(playlist.tracks[0], playlist.tracks)
    }
  }

  // Extract a color (mocked logic)
  const headerGradient =
    id === 'liked-songs' ? 'from-indigo-800' : 'from-green-800'

  return (
    <div className="min-h-full w-full">
      {/* Header */}
      <div
        className={cn(
          'flex flex-col gap-6 bg-gradient-to-b p-6 pt-10 md:flex-row md:items-end md:p-8',
          headerGradient,
          'to-background',
        )}
      >
        <img
          src={playlist.cover}
          alt={playlist.name}
          className="h-52 w-52 rounded-md object-cover shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
        />
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-white">
            Playlist
          </span>
          <h1 className="text-4xl font-black text-white md:text-7xl">
            {playlist.name}
          </h1>
          <div className="mt-2 flex items-center gap-1 text-sm font-medium text-white/90">
            <span>{playlist.owner}</span>
            <span>•</span>
            <span>{playlist.tracks.length} músicas</span>
          </div>
          <p className="mt-2 text-white/70">{playlist.description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-black/20 p-6 backdrop-blur-3xl md:p-8">
        {/* Actions */}
        <div className="mb-8 flex items-center gap-6">
          <Button
            size="icon"
            className="h-14 w-14 rounded-full bg-primary text-black hover:bg-green-400 hover:scale-105 transition-all shadow-lg"
            onClick={() => handlePlay()}
          >
            <Play className="h-7 w-7 fill-black pl-1" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="text-gray-400 hover:text-white"
          >
            <Heart className="h-8 w-8" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="text-gray-400 hover:text-white"
          >
            <MoreHorizontal className="h-8 w-8" />
          </Button>
        </div>

        {/* Table Header */}
        <div className="mb-4 grid grid-cols-[16px_4fr_3fr_2fr_minmax(120px,1fr)] gap-4 border-b border-[#282828] px-4 pb-2 text-sm font-medium text-gray-400 uppercase tracking-wider">
          <span className="text-center">#</span>
          <span>Título</span>
          <span className="hidden md:block">Álbum</span>
          <span className="hidden md:block">Adicionada em</span>
          <div className="flex justify-end pr-8">
            <Clock className="h-4 w-4" />
          </div>
        </div>

        {/* Track List */}
        <div className="flex flex-col">
          {playlist.tracks.map((track, index) => (
            <TrackRow
              key={track.id}
              track={track}
              index={index}
              isPlaying={isPlaying}
              isCurrent={currentTrack?.id === track.id}
              onPlay={() => handlePlay(track.id)}
            />
          ))}
        </div>
      </div>

      {/* Extra space for player */}
      <div className="h-24" />
    </div>
  )
}
