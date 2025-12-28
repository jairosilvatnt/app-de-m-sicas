import { getGreeting, mockPlaylists, mockTracks } from '@/lib/data'
import { MusicCard } from '@/components/MusicCard'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { usePlayer } from '@/contexts/PlayerContext'

export default function Index() {
  const greeting = getGreeting()
  const { playTrack } = usePlayer()

  return (
    <div className="relative min-h-full bg-gradient-to-b from-indigo-900/40 to-background p-6 md:p-8">
      <h1 className="mb-6 text-3xl font-bold tracking-tight text-white">
        {greeting}
      </h1>

      {/* Quick Access Grid */}
      <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {mockPlaylists.slice(0, 6).map((playlist) => (
          <div
            key={playlist.id}
            className="group flex cursor-pointer items-center gap-3 overflow-hidden rounded-md bg-white/10 transition-colors hover:bg-white/20"
            onClick={() => playTrack(playlist.tracks[0], playlist.tracks)}
          >
            <img
              src={playlist.cover}
              alt={playlist.name}
              className="h-16 w-16 object-cover shadow-lg"
            />
            <span className="truncate pr-4 font-bold text-white">
              {playlist.name}
            </span>
            <div className="ml-auto mr-4 hidden rounded-full bg-primary p-2 shadow-xl group-hover:block transition-all animate-fade-in-up">
              <div className="h-0 w-0 border-b-[8px] border-l-[12px] border-t-[8px] border-b-transparent border-l-black border-t-transparent ml-1" />
            </div>
          </div>
        ))}
      </div>

      {/* Sections */}
      <div className="space-y-8">
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white hover:underline cursor-pointer">
              Feito para você
            </h2>
          </div>
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex w-max space-x-4 pb-4">
              {mockPlaylists.map((playlist) => (
                <MusicCard
                  key={playlist.id}
                  id={playlist.id}
                  title={playlist.name}
                  subtitle={`De ${playlist.owner}`}
                  image={playlist.cover}
                  type="playlist"
                  className="w-[180px]"
                  onClick={() => playTrack(playlist.tracks[0], playlist.tracks)}
                />
              ))}
              {mockTracks.slice(0, 4).map((track) => (
                <MusicCard
                  key={track.id}
                  id={track.id}
                  title={track.title}
                  subtitle={track.artist}
                  image={track.cover}
                  type="album"
                  className="w-[180px]"
                  onClick={() => playTrack(track, [track])}
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white hover:underline cursor-pointer">
              Tocadas recentemente
            </h2>
          </div>
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex w-max space-x-4 pb-4">
              {mockTracks.map((track) => (
                <MusicCard
                  key={track.id}
                  id={track.id}
                  title={track.title}
                  subtitle={track.artist}
                  image={track.cover}
                  type="album"
                  className="w-[180px]"
                  onClick={() => playTrack(track, [track])}
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white hover:underline cursor-pointer">
              Explorar novos gêneros
            </h2>
          </div>
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex w-max space-x-4 pb-4">
              {mockPlaylists.slice(0, 2).map((playlist) => (
                <MusicCard
                  key={playlist.id}
                  id={playlist.id}
                  title={playlist.name}
                  subtitle={playlist.description}
                  image={playlist.cover}
                  type="playlist"
                  className="w-[180px]"
                  onClick={() => playTrack(playlist.tracks[0], playlist.tracks)}
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>
      </div>
    </div>
  )
}
