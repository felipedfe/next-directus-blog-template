import { getPosts } from '@/services/getPosts'

export const revalidate = 60 // ← Atualiza a cada 60 segundos

export default async function Home({ params }) {
  const posts = await getPosts(params.locale)

console.log(posts)

  return (
    <main>
      <h1>Blog ({params.locale})</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          {post.cover_image?.filename_disk && (
            <img
              src={`http://localhost:8055/assets/${post.cover_image.filename_disk}`}
              alt={post.title}
              style={{ width: '100%', maxWidth: 400 }}
            />
          )}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      ))}
    </main>
  )
}
