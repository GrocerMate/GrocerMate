import React from 'react';
import {
  ShoppingBagIcon,
  UserGroupIcon,
  MagnifyingGlassIcon,
  ChartBarIcon
} from '@heroicons/react/24/solid';

export default function DashboardAnalytics({ stats }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {/* Total Products */}
      <div className="bg-white rounded-xl shadow text-center py-6 px-4">
        <div className="flex justify-center mb-3">
          <ShoppingBagIcon className="h-10 w-10 text-green-600" />
        </div>
        <p className="text-sm text-gray-500">Total Products</p>
        <h2 className="text-2xl font-bold text-gray-800">{stats.totalProducts}</h2>
      </div>

      {/* Total Sellers */}
      <div className="bg-white rounded-xl shadow text-center py-6 px-4">
        <div className="flex justify-center mb-3">
          <UserGroupIcon className="h-10 w-10 text-green-600" />
        </div>
        <p className="text-sm text-gray-500">Total Sellers</p>
        <h2 className="text-2xl font-bold text-gray-800">{stats.totalSellers}</h2>
      </div>

      {/* Active Users */}
      <div className="bg-white rounded-xl shadow text-center py-6 px-4">
        <div className="flex justify-center mb-3">
          <ChartBarIcon className="h-10 w-10 text-green-600" />
        </div>
        <p className="text-sm text-gray-500">Active Users</p>
        <h2 className="text-2xl font-bold text-gray-800">{stats.activeUsers}</h2>
      </div>

      {/* Top Searches */}
      <div className="bg-white rounded-xl shadow text-center py-6 px-4">
        <div className="flex justify-center mb-3">
          <MagnifyingGlassIcon className="h-10 w-10 text-green-600" />
        </div>
        <p className="text-sm text-gray-500">Top Searches</p>
        <h2 className="text-2xl font-bold text-gray-800">{stats.topSearches}</h2>
      </div>
    </div>
  );
}
