export const getTheme = () =>
  localStorage.getItem('theme') || 'light'

export const setTheme = (mode) =>
  localStorage.setItem('theme', mode)

export const loadData = (key) =>
  JSON.parse(localStorage.getItem(key)) || []

export const saveData = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data))
