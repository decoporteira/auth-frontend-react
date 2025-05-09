import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000',
})

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
})

export const login = async (email_address, password) => {
  try {
    const response = await api.post('/sessions', {
      session: {
        email_address,
        password
      }
    })
    return response.data.data.token
  } catch (error) {
    console.error('Erro no login:', error)
    throw error
  }
}

export const register = async (email_address, password, password_confirmation) => {
  try {
    const response = await api.post('/users', {
      user: {
        email_address,
        password,
        password_confirmation
      }
    })
    return response.data
  } catch (error) {
    console.error('Erro no registro:', error)
    throw error
  }
}
  
export default api