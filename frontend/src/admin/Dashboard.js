import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Overview from './Overview';
import ManageSellers from './ManageSellers';
import UploadProductAdmin from './UploadProductAdmin';
import DashboardAnalytics from './components/DashboardAnalytics';


export default function AdminDashboard() {
  const [selectedTab, setSelectedTab] = useState('overview');

  const renderContent = () => {
    switch (selectedTab) {
      case 'overview':
  return (
    <>
      <h1 className="text-2xl font-bold text-green-700 mb-4">Dashboard Overview</h1>
      <DashboardAnalytics
        stats={{
          totalProducts: 128,
          totalSellers: 7,
          activeUsers: 312,
          topSearches: 'Milk, Bananas, Rice'
        }}
      />
    </>
  );
      case 'products': return <UploadProductAdmin />;
      case 'sellers': return <ManageSellers />;
      default: return <Overview />;
    }
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <main className="flex-1 p-6">{renderContent()}</main>
    </div>
  );
}

