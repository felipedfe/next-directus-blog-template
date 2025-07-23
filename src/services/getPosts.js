export async function getPosts(lang = 'pt') {
  const res = await fetch(`http://localhost:8055/items/posts?filter[language][_eq]=${lang}&fields[]=id&fields[]=title&fields[]=slug&fields[]=content&fields[]=language&fields[]=cover_image.filename_disk`, {
    next: { revalidate: 60 }, // Atualiza a cada 60 segundos (ISR)
  })

  const data = await res.json()
  return data.data
}
