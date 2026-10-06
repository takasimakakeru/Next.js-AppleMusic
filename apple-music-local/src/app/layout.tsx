import type { Metadata } from "next"
import { PlayerProvider } from "@/context/PlayerContext"
import "./globals.css"

export const metadata: Metadata = {
  title: "Local Music",
  description: "Local music player",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>
        <PlayerProvider>
          {children}
        </PlayerProvider>
      </body>
    </html>
  )
}
