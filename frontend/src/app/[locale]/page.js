import Link from 'next/link'
import { getPosts } from '@/services/post'
import { getAssetURL } from '@/services/directus'
// o directus retorna uma hash da imagem no objeto do post. essa imagem tem quer acessada
// pela url que está em getAssetURL

export const revalidate = 60 // atualiza a cada 60 segundos

export default async function Home({ params }) {
  const posts = await getPosts(params.locale)

  console.log(params)
  console.log("------>")

  return (
    <main>
      <h1>Blog ({params.locale})</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>
            <Link href={`/${params.locale}/posts/${post.slug}`}>
              {post.title}
            </Link>
          </h2>

          {post.cover_image && (
            <img
              src={getAssetURL(post.cover_image)}
              alt={post.title}
              style={{ width: '100%', maxWidth: 200 }}
            />
          )}
        </article>
      ))}

    </main>
  )
}
