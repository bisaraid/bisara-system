import React, { useEffect, useState } from 'react'
import Modal from '../components/Modal'
import { loadData, saveData } from '../utils/localStorageUtils'
import Table from '../components/Table'

export default function Users() {
  const [users, setUsers] = useState(() => {
    const data = loadData('users')
    if (data.length === 0) {
      // initial sample
      const sample = [
        { id: 1, name: 'Admin Bisara', email: 'admin@bisara.test' },
        { id: 2, name: 'User Biasa', email: 'user@bisara.test' }
      ]
      saveData('users', sample)
      return sample
    }
    return data
  })

  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ id: null, name: '', email: '' })

  useEffect(() => {
    saveData('users', users)
  }, [users])

  const openCreate = () => {
    setForm({ id: null, name: '', email: '' })
    setOpen(true)
  }

  const openEdit = (u) => {
    setForm(u)
    setOpen(true)
  }

  const handleSave = () => {
    if (!form.name.trim() || !form.email.trim()) {
      alert('Nama dan email wajib diisi')
      return
    }
    if (form.id) {
      setUsers((s) => s.map((it) => (it.id === form.id ? form : it)))
    } else {
      setUsers((s) => [...s, { ...form, id: Date.now() }])
    }
    setOpen(false)
  }

  const handleDelete = (id) => {
    if (!confirm('Yakin ingin menghapus?')) return
    setUsers((s) => s.filter((u) => u.id !== id))
  }

  return (
    <div>
      <div className="flex justify-between mb-4 items-center">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Manajemen Pengguna</h2>
        <button onClick={openCreate} className="px-3 py-1 bg-blue-600 text-white rounded">+ Tambah</button>
      </div>

      <Table>
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th className="p-2 border">Nama</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Aksi</th>
          </tr>
        </thead>
        <tbody className="text-gray-800 dark:text-gray-100">
          {users.map((u) => (
            <tr key={u.id}>
              <td className="p-2 border">{u.name}</td>
              <td className="p-2 border">{u.email}</td>
              <td className="p-2 border">
                <button onClick={() => openEdit(u)} className="text-blue-600 mr-2">Edit</button>
                <button onClick={() => handleDelete(u.id)} className="text-red-600">Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal open={open} onClose={() => setOpen(false)} title={form.id ? 'Edit Pengguna' : 'Tambah Pengguna'}>
        <div className="space-y-2">
          <input className="w-full p-2 border rounded bg-white dark:bg-gray-700" placeholder="Nama" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input className="w-full p-2 border rounded bg-white dark:bg-gray-700" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <div className="flex justify-end gap-2">
            <button onClick={() => setOpen(false)} className="px-3 py-1 bg-gray-400 text-white rounded">Batal</button>
            <button onClick={handleSave} className="px-3 py-1 bg-blue-600 text-white rounded">Simpan</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
