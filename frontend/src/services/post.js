import axiosClient from './axiosClient'

export async function getPosts(lang = 'pt') {
  const response = await axiosClient.get('/items/posts', {
    params: {
      filter: {
        language: { _eq: lang }
      },
      fields: [
        'id',
        'title',
        'slug',
        'content',
        'language',
        'cover_image'
      ]
    }
  })

  return response.data.data
}

export async function getPostBySlug(slug, lang = 'pt') {
  const response = await axiosClient.get('/items/posts', {
    params: {
      filter: {
        slug: { _eq: slug },
        language: { _eq: lang },
      },
      limit: 1,
      fields: [
        'id',
        'title',
        'slug',
        'content',
        'language',
        'cover_image'
      ]
    }
  })

  return response.data.data[0] || null
}