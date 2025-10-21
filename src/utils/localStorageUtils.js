export const getTheme = () => localStorage.getItem('bisara_theme') || 'light'
export const setTheme = (mode) => localStorage.setItem('bisara_theme', mode)

export const loadData = (key) => {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}
export const saveData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data))
}
