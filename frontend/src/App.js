import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import SearchResultsPage from './SearchResultsPage';
import GrocerProfilePage from './pages/GrocerProfilePage';
import AdminDashboard from './admin/Dashboard';
import SellerDashboard from './seller/SellerDashboard';





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/grocer/:id" element={<GrocerProfilePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/seller" element={<SellerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
