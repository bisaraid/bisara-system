import { useState, useEffect } from 'react'
import { loadData, saveData } from '../utils/localStorageUtils'

export default function Users() {
  const [users, setUsers] = useState(loadData('users'))
  const [modalOpen, setModalOpen] = useState(false)
  const [form, setForm] = useState({ id: null, name: '', email: '' })

  useEffect(() => {
    saveData('users', users)
  }, [users])

  const handleSave = () => {
    if (form.id) {
      setUsers(users.map((u) => (u.id === form.id ? form : u)))
    } else {
      setUsers([...users, { ...form, id: Date.now() }])
    }
    setModalOpen(false)
    setForm({ id: null, name: '', email: '' })
  }

  const handleDelete = (id) => setUsers(users.filter((u) => u.id !== id))

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Manajemen Pengguna</h2>
        <button onClick={() => setModalOpen(true)} className="bg-blue-600 text-white px-4 py-1 rounded">+ Tambah</button>
      </div>
      <table className="w-full border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th className="border px-2 py-1">Nama</th>
            <th className="border px-2 py-1">Email</th>
            <th className="border px-2 py-1">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td className="border px-2 py-1">{u.name}</td>
              <td className="border px-2 py-1">{u.email}</td>
              <td className="border px-2 py-1">
                <button onClick={() => { setForm(u); setModalOpen(true); }} className="text-blue-600">Edit</button>
                <button onClick={() => handleDelete(u.id)} className="text-red-600 ml-2">Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 p-4 rounded shadow w-80">
            <h3 className="mb-2">{form.id ? 'Edit Pengguna' : 'Tambah Pengguna'}</h3>
            <input className="w-full p-2 mb-2 border rounded" placeholder="Nama" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}/>
            <input className="w-full p-2 mb-2 border rounded" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}/>
            <div className="flex justify-end gap-2">
              <button onClick={() => setModalOpen(false)} className="px-3 py-1 bg-gray-400 text-white rounded">Batal</button>
              <button onClick={handleSave} className="px-3 py-1 bg-blue-600 text-white rounded">Simpan</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

