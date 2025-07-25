export const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL

export function getAssetURL(filename) {
  return `${DIRECTUS_URL}/assets/${filename}`
}
