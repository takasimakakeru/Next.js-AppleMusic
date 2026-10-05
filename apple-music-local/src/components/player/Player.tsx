export default function Player() {
  return (
    <div className="player-wrapper">
      <div className="player">
        <div className="player-track">
          <div className="player-art">
            ♫
          </div>

          <div className="player-info">
            <strong>まだ再生されていません</strong>
            <span>曲を選択してください</span>
          </div>
        </div>

        <div className="player-main">
          <div className="player-buttons">
            <button className="player-button secondary">
              ↶
            </button>

            <button className="player-button play">
              ▶
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

        <div className="player-volume">
          <span>🔊</span>
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