import { usePlayer } from '@/contexts/PlayerContext'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Volume2,
  ListMusic,
  Heart,
  Maximize2,
} from 'lucide-react'
import { cn } from '@/lib/utils'

export function Player() {
  const {
    currentTrack,
    isPlaying,
    togglePlay,
    nextTrack,
    prevTrack,
    progress,
    setProgress,
    volume,
    setVolume,
  } = usePlayer()

  if (!currentTrack) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex h-[90px] flex-col bg-[#181818] border-t border-[#282828] px-4 md:h-[90px] md:flex-row md:items-center md:justify-between md:px-6">
      {/* Mobile progress bar */}
      <div className="w-full md:hidden absolute top-0 left-0">
        <Slider
          defaultValue={[progress]}
          max={100}
          step={1}
          value={[progress]}
          onValueChange={(val) => setProgress(val[0])}
          className="h-1 py-0 cursor-pointer"
        />
      </div>

      <div className="flex items-center justify-between md:w-[30%] mt-2 md:mt-0">
        <div className="flex items-center gap-4">
          <img
            src={currentTrack.cover}
            alt={currentTrack.title}
            className="h-14 w-14 rounded-md object-cover bg-neutral-800 shadow-lg"
          />
          <div className="flex flex-col justify-center overflow-hidden">
            <h4 className="truncate text-sm font-medium text-white hover:underline cursor-pointer">
              {currentTrack.title}
            </h4>
            <p className="truncate text-xs text-muted-foreground hover:underline cursor-pointer hover:text-white">
              {currentTrack.artist}
            </p>
          </div>
          <Button
            size="icon"
            variant="ghost"
            className="hidden md:flex text-muted-foreground hover:text-primary"
          >
            <Heart className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Play Button - simplified */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            size="icon"
            variant="ghost"
            onClick={togglePlay}
            className="text-white"
          >
            {isPlaying ? (
              <Pause className="fill-white" />
            ) : (
              <Play className="fill-white" />
            )}
          </Button>
        </div>
      </div>

      {/* Center Controls - Desktop */}
      <div className="hidden md:flex flex-col items-center max-w-[40%] w-full gap-2">
        <div className="flex items-center gap-6">
          <Button
            size="icon"
            variant="ghost"
            className="text-muted-foreground hover:text-white h-8 w-8"
          >
            <Shuffle className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={prevTrack}
            className="text-muted-foreground hover:text-white"
          >
            <SkipBack className="fill-current h-5 w-5" />
          </Button>
          <Button
            size="icon"
            className="h-8 w-8 rounded-full bg-white text-black hover:scale-105 transition-transform"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <Pause className="fill-black h-5 w-5" />
            ) : (
              <Play className="fill-black h-5 w-5 ml-1" />
            )}
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={nextTrack}
            className="text-muted-foreground hover:text-white"
          >
            <SkipForward className="fill-current h-5 w-5" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="text-muted-foreground hover:text-white h-8 w-8"
          >
            <Repeat className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center w-full gap-2 text-xs text-muted-foreground">
          <span>0:{(progress * 0.03).toFixed(0).padStart(2, '0')}</span>
          <Slider
            defaultValue={[0]}
            max={100}
            step={1}
            value={[progress]}
            onValueChange={(val) => setProgress(val[0])}
            className="w-full cursor-pointer group"
          />
          <span>{currentTrack.duration}</span>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-end w-[30%] gap-3">
        <Button
          size="icon"
          variant="ghost"
          className="text-muted-foreground hover:text-white h-8 w-8"
        >
          <ListMusic className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2 w-32">
          <Volume2 className="h-5 w-5 text-muted-foreground" />
          <Slider
            defaultValue={[80]}
            max={100}
            step={1}
            value={[volume]}
            onValueChange={(val) => setVolume(val[0])}
            className="w-24"
          />
        </div>
        <Button
          size="icon"
          variant="ghost"
          className="text-muted-foreground hover:text-white h-8 w-8"
        >
          <Maximize2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
