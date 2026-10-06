"use client"

import { usePlayer } from "@/context/PlayerContext"

export default function Player() {
  const { currentTrack, isPlaying, togglePlay } = usePlayer()

  return (
    <div className="player-wrapper">
      <div className="player">

        {/* 曲情報 */}
        <div className="player-track">
          <div className="player-art">
            ♪
          </div>

          <div className="player-info">
            <strong>
              {currentTrack?.title ?? "曲が選択されていません"}
            </strong>

            <span>
              {currentTrack?.artist ?? "アーティスト"}
            </span>
          </div>
        </div>

        {/* 再生操作 */}
        <div className="player-main">
          <div className="player-buttons">
            <button className="player-button secondary">
              ↶
            </button>

            <button
              className="player-button play"
              onClick={togglePlay}
            >
              {isPlaying ? "Ⅱ" : "▶"}
            </button>

            <button className="player-button secondary">
              ↷
            </button>
          </div>

          <div className="progress">
            <span>0:00</span>

            <div className="progress-track">
              <div className="progress-value" />
            </div>

            <span>0:00</span>
          </div>
        </div>

        {/* 音量 */}
        <div className="player-volume">
          🔊
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="70"
          />
        </div>

      </div>
    </div>
  )
}