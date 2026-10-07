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

    console.log("選択されたファイル:", file)
    console.log("ファイル名:", file.name)
    console.log("ファイルサイズ:", file.size)
    console.log("MIME:", file.type)

    const url = URL.createObjectURL(file)

    console.log("再生用URL:", url)
  }

  return (
    <input
      type="file"
      accept="audio/*"
      onChange={handleChange}
    />
  )
}