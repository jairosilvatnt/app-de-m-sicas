export interface Track {
  id: string
  title: string
  artist: string
  album: string
  duration: string // mm:ss
  cover: string
  dateAdded: string
}

export interface Playlist {
  id: string
  name: string
  owner: string
  description: string
  cover: string
  tracks: Track[]
  type: 'playlist' | 'album'
}

export interface Category {
  id: string
  name: string
  color: string
  image: string
}

// Mock Data
export const mockTracks: Track[] = [
  {
    id: '1',
    title: 'Midnight City',
    artist: 'M83',
    album: "Hurry Up, We're Dreaming",
    duration: '4:03',
    cover: 'https://img.usecurling.com/p/300/300?q=night%20city&color=purple',
    dateAdded: '2023-11-01',
  },
  {
    id: '2',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    duration: '3:20',
    cover: 'https://img.usecurling.com/p/300/300?q=red%20lights&color=red',
    dateAdded: '2023-11-02',
  },
  {
    id: '3',
    title: 'Levitating',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    duration: '3:23',
    cover: 'https://img.usecurling.com/p/300/300?q=disco%20ball&color=blue',
    dateAdded: '2023-11-03',
  },
  {
    id: '4',
    title: 'Peaches',
    artist: 'Justin Bieber',
    album: 'Justice',
    duration: '3:18',
    cover: 'https://img.usecurling.com/p/300/300?q=peaches&color=orange',
    dateAdded: '2023-11-04',
  },
  {
    id: '5',
    title: "Don't Start Now",
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    duration: '3:03',
    cover: 'https://img.usecurling.com/p/300/300?q=dance%20floor&color=purple',
    dateAdded: '2023-11-05',
  },
  {
    id: '6',
    title: 'Watermelon Sugar',
    artist: 'Harry Styles',
    album: 'Fine Line',
    duration: '2:54',
    cover: 'https://img.usecurling.com/p/300/300?q=summer%20fruits&color=pink',
    dateAdded: '2023-11-06',
  },
  {
    id: '7',
    title: 'Bad Guy',
    artist: 'Billie Eilish',
    album: 'When We All Fall Asleep',
    duration: '3:14',
    cover: 'https://img.usecurling.com/p/300/300?q=dark%20room&color=black',
    dateAdded: '2023-11-07',
  },
  {
    id: '8',
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    album: 'Divide',
    duration: '3:53',
    cover: 'https://img.usecurling.com/p/300/300?q=boxing&color=blue',
    dateAdded: '2023-11-08',
  },
]

export const mockPlaylists: Playlist[] = [
  {
    id: 'liked-songs',
    name: 'Músicas Curtidas',
    owner: 'Você',
    description: 'Suas músicas favoritas em um só lugar.',
    cover: 'https://img.usecurling.com/p/500/500?q=heart%20love&color=purple',
    type: 'playlist',
    tracks: mockTracks,
  },
  {
    id: 'pl-1',
    name: 'Top Brasil',
    owner: 'Spotify',
    description: 'As músicas mais tocadas no Brasil agora.',
    cover: 'https://img.usecurling.com/p/500/500?q=brazil%20party&color=green',
    type: 'playlist',
    tracks: [mockTracks[0], mockTracks[2], mockTracks[4], mockTracks[6]],
  },
  {
    id: 'pl-2',
    name: 'Vibes Noturnas',
    owner: 'Spotify',
    description: 'Relaxe e aproveite a noite.',
    cover: 'https://img.usecurling.com/p/500/500?q=night%20moon&color=blue',
    type: 'playlist',
    tracks: [mockTracks[1], mockTracks[3], mockTracks[5], mockTracks[7]],
  },
  {
    id: 'pl-3',
    name: 'Rock Classics',
    owner: 'Spotify',
    description: 'Os maiores clássicos do Rock.',
    cover: 'https://img.usecurling.com/p/500/500?q=electric%20guitar&color=red',
    type: 'playlist',
    tracks: [mockTracks[0], mockTracks[7]],
  },
]

export const mockCategories: Category[] = [
  {
    id: 'pop',
    name: 'Pop',
    color: 'bg-pink-600',
    image: 'https://img.usecurling.com/p/300/300?q=pop%20singer&color=pink',
  },
  {
    id: 'rock',
    name: 'Rock',
    color: 'bg-red-600',
    image: 'https://img.usecurling.com/p/300/300?q=rock%20band&color=red',
  },
  {
    id: 'hip-hop',
    name: 'Hip-Hop',
    color: 'bg-orange-600',
    image: 'https://img.usecurling.com/p/300/300?q=rapper&color=orange',
  },
  {
    id: 'brasil',
    name: 'Brasil',
    color: 'bg-green-600',
    image:
      'https://img.usecurling.com/p/300/300?q=rio%20de%20janeiro&color=green',
  },
  {
    id: 'indie',
    name: 'Indie',
    color: 'bg-purple-600',
    image:
      'https://img.usecurling.com/p/300/300?q=guitar%20acoustic&color=purple',
  },
  {
    id: 'dance',
    name: 'Dance',
    color: 'bg-cyan-600',
    image: 'https://img.usecurling.com/p/300/300?q=dj%20party&color=cyan',
  },
  {
    id: 'latin',
    name: 'Latina',
    color: 'bg-yellow-600',
    image: 'https://img.usecurling.com/p/300/300?q=salsa%20dance&color=yellow',
  },
  {
    id: 'rnb',
    name: 'R&B',
    color: 'bg-blue-600',
    image: 'https://img.usecurling.com/p/300/300?q=microphone&color=blue',
  },
]

export const getGreeting = () => {
  const hour = new Date().getHours()
  if (hour >= 5 && hour < 12) return 'Bom dia'
  if (hour >= 12 && hour < 18) return 'Boa tarde'
  return 'Boa noite'
}
