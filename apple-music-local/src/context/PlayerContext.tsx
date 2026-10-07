"use client"

import {
  createContext,
  useContext,
  useRef,
  useState,
} from "react"

export type Track = {
  id: string
  title: string
  artist: string
  album: string
  cover?: string
  src: string
}

type PlayerContextType = {
  currentTrack: Track | null
  isPlaying: boolean
  playTrack: (track: Track) => void
  togglePlay: () => void
}

const PlayerContext = createContext<PlayerContextType | undefined>(
  undefined
)

export function PlayerProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const audioRef = useRef<HTMLAudioElement | null>(null)

  function playTrack(track: Track) {
    setCurrentTrack(track)
    setIsPlaying(true)

    if (audioRef.current) {
      audioRef.current.pause()
    }

    const audio = new Audio(track.src)

    audioRef.current = audio

    audio.play().catch((error) => {
      console.error("再生に失敗しました:", error)
      setIsPlaying(false)
    })

    audio.onended = () => {
      setIsPlaying(false)
    }
  }

  function togglePlay() {
    if (!audioRef.current) {
      return
    }

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play().catch((error) => {
        console.error("再生に失敗しました:", error)
      })
      setIsPlaying(true)
    }
  }

  return (
    <PlayerContext.Provider
      value={{
        currentTrack,
        isPlaying,
        playTrack,
        togglePlay,
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export function usePlayer() {
  const context = useContext(PlayerContext)

  if (!context) {
    throw new Error("usePlayer must be used inside PlayerProvider")
  }

  return context
}