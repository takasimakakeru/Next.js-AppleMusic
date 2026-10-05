const albums = [
  {
    title: "Midnight Drive",
    artist: "Demo Artist",
    color: "linear-gradient(135deg, #6366f1, #ec4899)",
  },
  {
    title: "Neon City",
    artist: "Demo Artist",
    color: "linear-gradient(135deg, #06b6d4, #3b82f6)",
  },
  {
    title: "After Rain",
    artist: "Demo Artist",
    color: "linear-gradient(135deg, #10b981, #0ea5e9)",
  },
  {
    title: "Digital Dreams",
    artist: "Demo Artist",
    color: "linear-gradient(135deg, #f97316, #ef4444)",
  },
]

export default function Home() {
  return (
    <main className="app">
      <aside className="sidebar">
        <div className="logo">♫ Local Music</div>

        <nav>
          <a className="nav-item active" href="/">
            <span>⌂</span>
            ホーム
          </a>

          <a className="nav-item" href="/library">
            <span>▣</span>
            ライブラリ
          </a>

          <a className="nav-item" href="/albums">
            <span>◉</span>
            アルバム
          </a>

          <a className="nav-item" href="/artists">
            <span>♙</span>
            アーティスト
          </a>

          <a className="nav-item" href="/playlists">
            <span>☷</span>
            プレイリスト
          </a>
        </nav>
      </aside>

      <section className="content">
        <header className="header">
          <div>
            <p className="eyebrow">YOUR MUSIC</p>
            <h1>ホーム</h1>
          </div>

          <input
            className="search"
            type="search"
            placeholder="曲、アーティスト、アルバムを検索"
          />
        </header>

        <section className="hero">
          <div>
            <p>LOCAL MUSIC PLAYER</p>
            <h2>あなたの音楽を、<br />あなたのデバイスで。</h2>
            <button>音楽を追加</button>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <h2>最近のアルバム</h2>
            <a href="/albums">すべて見る</a>
          </div>

          <div className="album-grid">
            {albums.map((album) => (
              <article className="album-card" key={album.title}>
                <div
                  className="album-art"
                  style={{ background: album.color }}
                >
                  <span>♫</span>
                </div>

                <h3>{album.title}</h3>
                <p>{album.artist}</p>
              </article>
            ))}
          </div>
        </section>
      </section>

      <footer className="player">
        <div className="now-playing">
          <div className="mini-art" />
          <div>
            <strong>まだ再生されていません</strong>
            <span>曲を選択してください</span>
          </div>
        </div>

        <div className="player-controls">
          <button>↶</button>
          <button className="play">▶</button>
          <button>↷</button>
        </div>

        <div className="volume">
          🔊
          <input type="range" min="0" max="100" defaultValue="70" />
        </div>
      </footer>
    </main>
  )
}