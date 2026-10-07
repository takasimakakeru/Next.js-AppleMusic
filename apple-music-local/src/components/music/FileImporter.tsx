"use client"

import { usePlayer } from "@/context/PlayerContext"

export default function FileImporter() {
  const { playTrack } = usePlayer()

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const files = event.target.files

    if (!files || files.length === 0) {
      return
    }

    const file = files[0]

    const url = URL.createObjectURL(file)

    const track = {
      id: crypto.randomUUID(),
      title: file.name.replace(/\.[^/.]+$/, ""),
      artist: "Unknown Artist",
      album: "Unknown Album",
      src: url,
    }

    playTrack(track)
  }

  return (
    <input
      type="file"
      accept="audio/*"
      onChange={handleChange}
    />
  )
}