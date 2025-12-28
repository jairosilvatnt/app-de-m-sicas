import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'
import { Track } from '@/lib/data'

interface PlayerContextType {
  currentTrack: Track | null
  isPlaying: boolean
  queue: Track[]
  progress: number
  volume: number
  playTrack: (track: Track, newQueue?: Track[]) => void
  togglePlay: () => void
  nextTrack: () => void
  prevTrack: () => void
  setVolume: (volume: number) => void
  setProgress: (progress: number) => void
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined)

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [queue, setQueue] = useState<Track[]>([])
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(80)

  // Simulate playback progress
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying && currentTrack) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false)
            return 0
          }
          return prev + 0.5 // Simulate progress speed
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isPlaying, currentTrack])

  const playTrack = (track: Track, newQueue?: Track[]) => {
    setCurrentTrack(track)
    setIsPlaying(true)
    setProgress(0)
    if (newQueue) setQueue(newQueue)
  }

  const togglePlay = () => {
    if (currentTrack) {
      setIsPlaying(!isPlaying)
    }
  }

  const nextTrack = () => {
    if (!currentTrack || queue.length === 0) return
    const currentIndex = queue.findIndex((t) => t.id === currentTrack.id)
    if (currentIndex < queue.length - 1) {
      playTrack(queue[currentIndex + 1])
    } else {
      // Loop back to start or stop? Let's loop for now
      playTrack(queue[0])
    }
  }

  const prevTrack = () => {
    if (!currentTrack || queue.length === 0) return
    const currentIndex = queue.findIndex((t) => t.id === currentTrack.id)
    if (currentIndex > 0) {
      playTrack(queue[currentIndex - 1])
    } else {
      playTrack(queue[queue.length - 1])
    }
  }

  return (
    <PlayerContext.Provider
      value={{
        currentTrack,
        isPlaying,
        queue,
        progress,
        volume,
        playTrack,
        togglePlay,
        nextTrack,
        prevTrack,
        setVolume,
        setProgress,
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export const usePlayer = () => {
  const context = useContext(PlayerContext)
  if (!context) {
    throw new Error('usePlayer must be used within a PlayerProvider')
  }
  return context
}
