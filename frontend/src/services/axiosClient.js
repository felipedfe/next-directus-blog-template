import axios from 'axios'

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DIRECTUS_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// interceptador de erros
axiosClient.interceptors.response.use(
  response => response,
  error => {
    console.error('Erro na requisição:', error?.response || error.message)
    return Promise.reject(error)
  }
)

export default axiosClient
