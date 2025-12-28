import { useState } from 'react'
import { Search as SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { mockCategories, mockTracks, mockPlaylists } from '@/lib/data'
import { CategoryCard } from '@/components/CategoryCard'
import { MusicCard } from '@/components/MusicCard'
import { usePlayer } from '@/contexts/PlayerContext'

export default function Search() {
  const [query, setQuery] = useState('')
  const { playTrack } = usePlayer()

  const filteredTracks = mockTracks.filter(
    (t) =>
      t.title.toLowerCase().includes(query.toLowerCase()) ||
      t.artist.toLowerCase().includes(query.toLowerCase()),
  )
  const filteredPlaylists = mockPlaylists.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()),
  )

  const hasResults =
    query.length > 0 &&
    (filteredTracks.length > 0 || filteredPlaylists.length > 0)
  const noResults = query.length > 0 && !hasResults

  return (
    <div className="min-h-full bg-background p-6 md:p-8 space-y-8">
      <div className="relative max-w-md">
        <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="O que você quer ouvir?"
          className="h-12 w-full rounded-full border-none bg-white/10 pl-10 text-white placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-white"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {query.length === 0 && (
        <section>
          <h2 className="mb-4 text-xl font-bold text-white">
            Navegar por todas as seções
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {mockCategories.map((category) => (
              <CategoryCard key={category.id} {...category} />
            ))}
          </div>
        </section>
      )}

      {hasResults && (
        <div className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              Melhor resultado
            </h2>
            {filteredTracks.length > 0 && (
              <div
                className="flex max-w-md cursor-pointer flex-col gap-4 rounded-md bg-[#181818] p-6 hover:bg-[#282828] transition-colors group"
                onClick={() => playTrack(filteredTracks[0], filteredTracks)}
              >
                <img
                  src={filteredTracks[0].cover}
                  alt={filteredTracks[0].title}
                  className="h-24 w-24 rounded-full shadow-lg"
                />
                <div>
                  <h3 className="text-3xl font-bold text-white mb-1">
                    {filteredTracks[0].title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      Música
                    </span>
                    <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                    <span className="text-sm text-white font-medium">
                      {filteredTracks[0].artist}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-white">Músicas</h2>
            <div className="flex flex-col">
              {filteredTracks.slice(0, 4).map((track) => (
                <div
                  key={track.id}
                  className="group flex items-center justify-between rounded-md p-2 hover:bg-white/10 cursor-pointer"
                  onClick={() => playTrack(track, [track])}
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={track.cover}
                      alt={track.title}
                      className="h-10 w-10 rounded-sm"
                    />
                    <div className="flex flex-col">
                      <span className="text-white font-medium group-hover:underline">
                        {track.title}
                      </span>
                      <span className="text-sm text-muted-foreground group-hover:text-white">
                        {track.artist}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {track.duration}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {filteredPlaylists.length > 0 && (
            <section>
              <h2 className="mb-4 text-xl font-bold text-white">
                Álbuns e Playlists
              </h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
                {filteredPlaylists.map((playlist) => (
                  <MusicCard
                    key={playlist.id}
                    id={playlist.id}
                    title={playlist.name}
                    subtitle={`De ${playlist.owner}`}
                    image={playlist.cover}
                    type="playlist"
                    onClick={() =>
                      playTrack(playlist.tracks[0], playlist.tracks)
                    }
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      )}

      {noResults && (
        <div className="flex flex-col items-center justify-center pt-20 text-center">
          <h3 className="text-2xl font-bold text-white">
            Nenhum resultado encontrado para "{query}"
          </h3>
          <p className="mt-2 text-muted-foreground">
            Verifique a ortografia ou use palavras-chave diferentes.
          </p>
        </div>
      )}
    </div>
  )
}
