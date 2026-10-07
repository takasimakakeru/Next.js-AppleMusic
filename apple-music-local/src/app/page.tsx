import Sidebar from "@/components/layout/Sidebar"
import Player from "@/components/player/Player"
import FileImporter from "@/components/music/FileImporter"

const albums = [
  {
    title: "Midnight Drive",
    artist: "Demo Artist",
    gradient: "linear-gradient(135deg, #6366f1, #ec4899)",
  },
  {
    title: "Neon City",
    artist: "Demo Artist",
    gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)",
  },
  {
    title: "After Rain",
    artist: "Demo Artist",
    gradient: "linear-gradient(135deg, #10b981, #0ea5e9)",
  },
  {
    title: "Digital Dreams",
    artist: "Demo Artist",
    gradient: "linear-gradient(135deg, #f97316, #ef4444)",
  },
  {
    title: "Night Walk",
    artist: "Demo Artist",
    gradient: "linear-gradient(135deg, #8b5cf6, #14b8a6)",
  },
]

export default function Home() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main">
        <header className="topbar">
          <div>
            <p className="eyebrow">YOUR MUSIC</p>
            <h1>ホーム</h1>
          </div>

          <button className="profile-button">
            T
          </button>
        </header>

        <section className="hero">
          <div className="hero-content">
            <p>LOCAL MUSIC PLAYER</p>

            <h2>
              あなたの音楽を、
              <br />
              あなたのデバイスで。
            </h2>

            <label className="primary-button">
  音楽を追加
  <FileImporter />
</label>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <h2>最近のアルバム</h2>

            <a href="/albums">
              すべて見る
            </a>
          </div>

          <div className="album-grid">
            {albums.map((album) => (
              <article
                className="album-card"
                key={album.title}
              >
                <div
                  className="album-art"
                  style={{
                    background: album.gradient,
                  }}
                >
                  <span>♫</span>
                </div>

                <h3>{album.title}</h3>
                <p>{album.artist}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Player />
    </div>
  )
}