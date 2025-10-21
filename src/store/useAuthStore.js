import { create } from 'zustand'

const SAVED_USER = JSON.parse(localStorage.getItem('bisara_user') || 'null')

export const useAuthStore = create((set) => ({
  user: SAVED_USER,
  login: (username, password) => {
    // dummy accounts
    const accounts = [
      { username: 'admin', password: '1234', role: 'admin', name: 'Admin Bisara' },
      { username: 'user', password: '1234', role: 'user', name: 'User Biasa' }
    ]
    const found = accounts.find((a) => a.username === username && a.password === password)
    if (found) {
      localStorage.setItem('bisara_user', JSON.stringify(found))
      set({ user: found })
      return { ok: true, user: found }
    }
    return { ok: false, message: 'Username atau password salah' }
  },
  logout: () => {
    localStorage.removeItem('bisara_user')
    set({ user: null })
  },
  updateUser: (payload) => {
    const next = { ...(JSON.parse(localStorage.getItem('bisara_user') || '{}')), ...payload }
    localStorage.setItem('bisara_user', JSON.stringify(next))
    set({ user: next })
  }
}))
