import { ClipboardDocumentCheckIcon, CubeIcon, UserGroupIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';

export default function Sidebar({ selectedTab, setSelectedTab }) {
  const tabs = [
    { id: 'overview', label: 'Overview', icon: ClipboardDocumentCheckIcon },
    { id: 'products', label: 'Products', icon: CubeIcon },
    { id: 'sellers', label: 'Sellers', icon: UserGroupIcon }
  ];

  return (
    <aside className="w-64 bg-white shadow-lg h-screen p-6 space-y-4">
      <h2 className="text-xl font-bold text-green-700">Admin Panel</h2>
      {tabs.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => setSelectedTab(id)}
          className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium ${
            selectedTab === id
              ? 'bg-green-100 text-green-700'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <Icon className="h-5 w-5" />
          {label}
        </button>
      ))}
    </aside>
  );
}
