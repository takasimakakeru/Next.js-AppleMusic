import Link from "next/link"

const navigation = [
  { href: "/", label: "ホーム", icon: "⌂" },
  { href: "/search", label: "検索", icon: "⌕" },
  { href: "/new", label: "新着・おすすめ", icon: "✦" },
  { href: "/radio", label: "ラジオ", icon: "◉" },
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-mark">♫</span>
        <span>Local Music</span>
      </div>

      <nav className="sidebar-nav">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`sidebar-link ${
              item.href === "/" ? "active" : ""
            }`}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}