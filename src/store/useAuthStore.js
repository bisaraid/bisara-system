import { create } from 'zustand'

const initialUser = JSON.parse(localStorage.getItem('user')) || null

export const useAuthStore = create((set) => ({
  user: initialUser,
  login: (username, password) => {
    // Dummy users (bisa diubah nanti)
    const users = [
      { username: 'admin', password: '1234', role: 'admin', name: 'Admin Bisara' },
      { username: 'user', password: '1234', role: 'user', name: 'User Biasa' }
    ]

    const found = users.find((u) => u.username === username && u.password === password)
    if (found) {
      localStorage.setItem('user', JSON.stringify(found))
      set({ user: found })
      return { ok: true, user: found }
    }
    return { ok: false, message: 'Username atau password salah' }
  },
  logout: () => {
    localStorage.removeItem('user')
    set({ user: null })
  },
  updateUser: (payload) => {
    const next = { ...initialUser, ...payload }
    localStorage.setItem('user', JSON.stringify(next))
    set({ user: next })
  }
}))
