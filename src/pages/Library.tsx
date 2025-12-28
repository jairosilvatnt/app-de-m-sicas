import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MusicCard } from '@/components/MusicCard'
import { mockPlaylists, mockTracks } from '@/lib/data'
import { usePlayer } from '@/contexts/PlayerContext'

export default function Library() {
  const { playTrack } = usePlayer()

  return (
    <div className="min-h-full bg-background p-6 md:p-8">
      <h1 className="mb-6 text-3xl font-bold text-white">Sua Biblioteca</h1>

      <Tabs defaultValue="playlists" className="space-y-6">
        <TabsList className="bg-transparent p-0 gap-2 h-auto">
          <TabsTrigger
            value="playlists"
            className="rounded-full bg-[#2A2A2A] px-4 py-2 text-sm font-medium text-white data-[state=active]:bg-white data-[state=active]:text-black hover:bg-[#3E3E3E] transition-colors"
          >
            Playlists
          </TabsTrigger>
          <TabsTrigger
            value="artists"
            className="rounded-full bg-[#2A2A2A] px-4 py-2 text-sm font-medium text-white data-[state=active]:bg-white data-[state=active]:text-black hover:bg-[#3E3E3E] transition-colors"
          >
            Artistas
          </TabsTrigger>
          <TabsTrigger
            value="albums"
            className="rounded-full bg-[#2A2A2A] px-4 py-2 text-sm font-medium text-white data-[state=active]:bg-white data-[state=active]:text-black hover:bg-[#3E3E3E] transition-colors"
          >
            Álbuns
          </TabsTrigger>
        </TabsList>

        <TabsContent value="playlists" className="mt-0">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {/* Liked Songs Special Card */}
            <div
              className="col-span-2 md:col-span-2 lg:col-span-2 group relative flex flex-col justify-end gap-2 overflow-hidden rounded-md bg-gradient-to-br from-indigo-700 to-blue-500 p-6 cursor-pointer hover:shadow-lg transition-all"
              onClick={() => playTrack(mockTracks[0], mockTracks)}
            >
              <div className="mb-4">
                <span className="line-clamp-3 text-white">
                  {mockTracks
                    .slice(0, 3)
                    .map((t) => `${t.artist} - ${t.title}`)
                    .join(' • ')}
                  ...
                </span>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">
                  Músicas Curtidas
                </h3>
                <p className="text-white/80">
                  {mockTracks.length} músicas curtidas
                </p>
              </div>
              <div className="absolute bottom-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-black">
                  <div className="h-0 w-0 border-b-[8px] border-l-[12px] border-t-[8px] border-b-transparent border-l-black border-t-transparent ml-1" />
                </div>
              </div>
            </div>

            {mockPlaylists
              .filter((p) => p.id !== 'liked-songs')
              .map((playlist) => (
                <MusicCard
                  key={playlist.id}
                  id={playlist.id}
                  title={playlist.name}
                  subtitle={`De ${playlist.owner}`}
                  image={playlist.cover}
                  type="playlist"
                  onClick={() => playTrack(playlist.tracks[0], playlist.tracks)}
                />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="artists" className="mt-0">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {/* Mock artists from tracks */}
            {Array.from(new Set(mockTracks.map((t) => t.artist))).map(
              (artist, i) => {
                const track = mockTracks.find((t) => t.artist === artist)
                return (
                  <div
                    key={i}
                    className="group flex flex-col items-center gap-4 rounded-md bg-[#181818] p-4 hover:bg-[#282828] cursor-pointer transition-colors"
                  >
                    <img
                      src={track?.cover}
                      alt={artist}
                      className="h-32 w-32 rounded-full object-cover shadow-lg group-hover:scale-105 transition-transform"
                    />
                    <div className="text-center">
                      <h3 className="font-bold text-white">{artist}</h3>
                      <p className="text-sm text-muted-foreground">Artista</p>
                    </div>
                  </div>
                )
              },
            )}
          </div>
        </TabsContent>

        <TabsContent value="albums" className="mt-0">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {mockTracks.map((track) => (
              <MusicCard
                key={track.id}
                id={track.id}
                title={track.album}
                subtitle={track.artist}
                image={track.cover}
                type="album"
                onClick={() => playTrack(track, [track])}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
