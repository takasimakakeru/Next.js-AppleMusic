"use client"

import { createContext, useContext, useState } from "react"

export type Track = {
  id: string
  title: string
  artist: string
  album: string
  cover?: string
  src?: string
}

type PlayerContextType = {
  currentTrack: Track | null
  isPlaying: boolean
  playTrack: (track: Track) => void
  togglePlay: () => void
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined)

export function PlayerProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  function playTrack(track: Track) {
    setCurrentTrack(track)
    setIsPlaying(true)
  }

  function togglePlay() {
    setIsPlaying((prev) => !prev)
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
