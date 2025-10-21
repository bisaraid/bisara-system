export const getTheme = () => localStorage.getItem('theme') || 'light'
export const setTheme = (mode) => localStorage.setItem('theme', mode)

export const loadData = (key) => {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : []
  } catch (e) {
    console.error('loadData error', e)
    return []
  }
}

export const saveData = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch (e) {
    console.error('saveData error', e)
  }
}
