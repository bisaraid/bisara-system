import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem('user')) || null,
  login: (username, password) => {
    const users = [
      { username: 'admin', password: '1234', role: 'admin' },
      { username: 'user', password: '1234', role: 'user' }
    ]
    const found = users.find(
      (u) => u.username === username && u.password === password
    )
    if (found) {
      localStorage.setItem('user', JSON.stringify(found))
      set({ user: found })
      return true
    }
    return false
  },
  logout: () => {
    localStorage.removeItem('user')
    set({ user: null })
  }
}))
