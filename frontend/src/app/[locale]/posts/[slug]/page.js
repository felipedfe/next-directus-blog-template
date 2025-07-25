import { getPostBySlug } from '@/services/post'
import { getAssetURL } from '@/services/directus'

export const revalidate = 60

export default async function PostPage({ params }) {
  const { locale, slug } = params
  const post = await getPostBySlug(slug, locale)

  if (!post) return <div>Post não encontrado</div>
  console.log(post)

  return (
    <main style={{ padding: '2rem' }}>
      <h1>{post.title}</h1>

      {post.cover_image && (
        <img
          src={getAssetURL(post.cover_image)}
          alt={post.title}
          style={{ width: '100%', maxWidth: 600 }}
        />
      )}

      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </main>
  )
}
