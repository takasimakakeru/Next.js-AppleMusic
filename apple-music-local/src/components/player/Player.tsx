"use client"

import { usePlayer } from "@/context/PlayerContext"

export default function Player() {
  const { currentTrack, isPlaying, togglePlay } = usePlayer()

  return (
    <div>
      <div>
        <p>{currentTrack?.title ?? "曲が選択されていません"}</p>
        <p>{currentTrack?.artist ?? "アーティスト"}</p>
      </div>

      <button onClick={togglePlay}>
        {isPlaying ? "停止" : "再生"}
      </button>
    </div>
  )
}
