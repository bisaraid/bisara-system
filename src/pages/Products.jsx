import React, { useEffect, useState } from 'react'
import Modal from '../components/Modal'
import { loadData, saveData } from '../utils/localStorageUtils'
import Table from '../components/Table'

export default function Products() {
  const [items, setItems] = useState(() => {
    const d = loadData('products')
    if (d.length === 0) {
      const sample = [
        { id: 1, name: 'Produk A', price: 10000, stock: 10 },
        { id: 2, name: 'Produk B', price: 25000, stock: 5 }
      ]
      saveData('products', sample)
      return sample
    }
    return d
  })
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ id: null, name: '', price: 0, stock: 0 })

  useEffect(() => saveData('products', items), [items])

  const openCreate = () => { setForm({ id: null, name: '', price: 0, stock: 0 }); setOpen(true) }
  const openEdit = (p) => { setForm(p); setOpen(true) }

  const handleSave = () => {
    if (!form.name) return alert('Nama wajib')
    if (form.id) setItems((s) => s.map((it) => (it.id === form.id ? form : it)))
    else setItems((s) => [...s, { ...form, id: Date.now() }])
    setOpen(false)
  }

  const handleDelete = (id) => {
    if (!confirm('Yakin hapus?')) return
    setItems((s) => s.filter((i) => i.id !== id))
  }

  return (
    <div>
      <div className="flex justify-between mb-4 items-center">
        <h2 className="text-xl font-bold">Produk</h2>
        <button onClick={openCreate} className="px-3 py-1 bg-blue-600 text-white rounded">+ Tambah Produk</button>
      </div>

      <Table>
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th className="p-2 border">Nama</th>
            <th className="p-2 border">Harga</th>
            <th className="p-2 border">Stok</th>
            <th className="p-2 border">Aksi</th>
          </tr>
        </thead>
        <tbody className="text-gray-800 dark:text-gray-100">
          {items.map((p) => (
            <tr key={p.id}>
              <td className="p-2 border">{p.name}</td>
              <td className="p-2 border">Rp {p.price.toLocaleString()}</td>
              <td className="p-2 border">{p.stock}</td>
              <td className="p-2 border">
                <button onClick={() => openEdit(p)} className="text-blue-600 mr-2">Edit</button>
                <button onClick={() => handleDelete(p.id)} className="text-red-600">Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal open={open} onClose={() => setOpen(false)} title={form.id ? 'Edit Produk' : 'Tambah Produk'}>
        <div className="space-y-2">
          <input className="w-full p-2 border rounded" placeholder="Nama" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input type="number" className="w-full p-2 border rounded" placeholder="Harga" value={form.price} onChange={(e) => setForm({ ...form, price: Number(e.target.value) })} />
          <input type="number" className="w-full p-2 border rounded" placeholder="Stok" value={form.stock} onChange={(e) => setForm({ ...form, stock: Number(e.target.value) })} />
          <div className="flex justify-end gap-2">
            <button onClick={() => setOpen(false)} className="px-3 py-1 bg-gray-400 text-white rounded">Batal</button>
            <button onClick={handleSave} className="px-3 py-1 bg-blue-600 text-white rounded">Simpan</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

