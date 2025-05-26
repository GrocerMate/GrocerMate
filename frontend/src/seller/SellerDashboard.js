import React, { useState } from 'react';
import { PackagePlusIcon, LayoutDashboardIcon, LogOutIcon } from 'lucide-react';

export default function SellerDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 border-r">
        <h1 className="text-xl font-bold text-green-700 mb-6">GrocerMate Seller</h1>
        <nav className="flex flex-col gap-4 text-sm">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center gap-2 p-2 rounded ${
              activeTab === 'dashboard'
                ? 'bg-green-100 text-green-700 font-semibold'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <LayoutDashboardIcon className="h-4 w-4" /> Dashboard
          </button>
          <button
            onClick={() => setActiveTab('upload')}
            className={`flex items-center gap-2 p-2 rounded ${
              activeTab === 'upload'
                ? 'bg-green-100 text-green-700 font-semibold'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <PackagePlusIcon className="h-4 w-4" /> Upload Products
          </button>
          <button
            className="flex items-center gap-2 p-2 rounded text-gray-500 hover:text-red-600 mt-20"
          >
            <LogOutIcon className="h-4 w-4" /> Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-8">
        {activeTab === 'dashboard' && (
          <div>
            <h2 className="text-2xl font-bold text-green-700 mb-4">Dashboard Overview</h2>
            <p className="text-gray-600 text-sm">Welcome! View your store summary and insights here.</p>
          </div>
        )}

        {activeTab === 'upload' && (
          <div>
            <h2 className="text-2xl font-bold text-green-700 mb-4">Upload Products</h2>
            <form className="bg-white border rounded-lg p-6 max-w-xl">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Product Name</label>
                <input
                  type="text"
                  className="mt-1 w-full border px-3 py-2 rounded text-sm"
                  placeholder="e.g. Tomatoes 1kg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select className="mt-1 w-full border px-3 py-2 rounded text-sm">
                  <option>Fruits & Vegetables</option>
                  <option>Dairy</option>
                  <option>Bakery</option>
                  <option>Meat & Poultry</option>
                  <option>Beverages</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Price (AUD)</label>
                <input
                  type="number"
                  className="mt-1 w-full border px-3 py-2 rounded text-sm"
                  placeholder="e.g. 3.99"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Image URL</label>
                <input
                  type="text"
                  className="mt-1 w-full border px-3 py-2 rounded text-sm"
                  placeholder="e.g. https://..."
                />
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
              >
                Upload Product
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
