import React, { useState } from 'react';
import grocers from '../data/grocers';

export default function ManageSellers() {
  const [sellerList, setSellerList] = useState(grocers);
  const [newSeller, setNewSeller] = useState({ name: '', suburb: '', contact: '' });
  const [editingId, setEditingId] = useState(null);
  const [editedSeller, setEditedSeller] = useState({ name: '', suburb: '', contact: '' });

  const handleAdd = () => {
    if (!newSeller.name || !newSeller.suburb || !newSeller.contact) return;
    const newEntry = {
      id: newSeller.name.toLowerCase().replace(/\s+/g, '-'),
      ...newSeller,
      products: []
    };
    setSellerList(prev => [...prev, newEntry]);
    setNewSeller({ name: '', suburb: '', contact: '' });
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to remove this seller?");
    if (confirmed) {
      setSellerList(prev => prev.filter(s => s.id !== id));
    }
  };

  const handleEdit = (seller) => {
    setEditingId(seller.id);
    setEditedSeller({ name: seller.name, suburb: seller.suburb, contact: seller.contact });
  };

  const handleUpdate = (id) => {
    setSellerList(prev => prev.map(s =>
      s.id === id ? { ...s, ...editedSeller } : s
    ));
    setEditingId(null);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-bold text-green-700 mb-4">Manage Sellers</h2>

      {/* Add Seller */}
      <div className="mb-6 space-y-2">
        <h3 className="font-semibold text-sm text-gray-700">Add Seller</h3>
        <div className="flex gap-2 flex-wrap">
          <input type="text" placeholder="Name" className="border p-2 rounded w-40" value={newSeller.name} onChange={(e) => setNewSeller({ ...newSeller, name: e.target.value })} />
          <input type="text" placeholder="Suburb" className="border p-2 rounded w-40" value={newSeller.suburb} onChange={(e) => setNewSeller({ ...newSeller, suburb: e.target.value })} />
          <input type="text" placeholder="Contact" className="border p-2 rounded w-40" value={newSeller.contact} onChange={(e) => setNewSeller({ ...newSeller, contact: e.target.value })} />
          <button onClick={handleAdd} className="bg-green-600 text-white px-4 py-2 rounded">Add</button>
        </div>
      </div>

      {/* Sellers Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border">
          <thead className="bg-green-50 text-left text-sm text-green-700">
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Suburb</th>
              <th className="px-4 py-2 border">Contact</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800">
            {sellerList.map((seller) => (
              <tr key={seller.id} className="border-t">
                <td className="px-4 py-2 border">
                  {editingId === seller.id ? (
                    <input type="text" className="border p-1 w-full" value={editedSeller.name} onChange={(e) => setEditedSeller({ ...editedSeller, name: e.target.value })} />
                  ) : seller.name}
                </td>
                <td className="px-4 py-2 border">
                  {editingId === seller.id ? (
                    <input type="text" className="border p-1 w-full" value={editedSeller.suburb} onChange={(e) => setEditedSeller({ ...editedSeller, suburb: e.target.value })} />
                  ) : seller.suburb}
                </td>
                <td className="px-4 py-2 border">
                  {editingId === seller.id ? (
                    <input type="text" className="border p-1 w-full" value={editedSeller.contact} onChange={(e) => setEditedSeller({ ...editedSeller, contact: e.target.value })} />
                  ) : seller.contact}
                </td>
                <td className="px-4 py-2 border space-x-2">
                  {editingId === seller.id ? (
                    <>
                      <button onClick={() => handleUpdate(seller.id)} className="text-green-600 hover:underline text-xs">Save</button>
                      <button onClick={() => setEditingId(null)} className="text-gray-600 hover:underline text-xs">Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(seller)} className="text-blue-600 hover:underline text-xs">Edit</button>
                      <button onClick={() => handleDelete(seller.id)} className="text-red-600 hover:underline text-xs">Remove</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
            {sellerList.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center text-gray-400 py-4">No sellers found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
