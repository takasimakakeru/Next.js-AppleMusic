"use client"

export default function FileImporter() {
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const files = event.target.files

    if (!files || files.length === 0) {
      return
    }

    const file = files[0]

    console.log("選択された曲:", file)
    console.log("曲名:", file.name)
    console.log("ファイルサイズ:", file.size)
    console.log("MIME:", file.type)
  }

  return (
    <input
      type="file"
      accept="audio/*"
      onChange={handleChange}
    />
  )
}