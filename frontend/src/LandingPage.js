import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import logo from './images/logo.png';
import { MapPinIcon } from '@heroicons/react/24/solid';
import products from './data/products';

const postcodes = [
  "3000 - Melbourne (CBD)",
  "3053 - Carlton",
  "3054 - Carlton North",
  "3065 - Fitzroy",
  "3068 - Fitzroy North",
  "3066 - Collingwood",
  "3002 - East Melbourne",
  "3003 - West Melbourne",
  "3051 - North Melbourne",
  "3052 - Parkville",
  "3008 - Docklands",
  "3006 - Southbank",
  "3205 - South Melbourne",
  "3207 - Port Melbourne",
  "3182 - St Kilda",
  "3182 - St Kilda West",
  "3183 - St Kilda East",
  "3206 - Albert Park",
  "3206 - Middle Park",
  "3181 - Prahran",
  "3181 - Windsor",
  "3141 - South Yarra",
  "3121 - Richmond",
  "3121 - Cremorne",
  "3067 - Abbotsford",
  "3056 - Brunswick",
  "3057 - Brunswick East",
  "3055 - Brunswick West",
  "3031 - Flemington",
  "3031 - Kensington",
  "3032 - Ascot Vale",
  "3039 - Moonee Ponds",
  "3011 - Footscray",
  "3012 - West Footscray",
  "3011 - Seddon",
  "3013 - Yarraville",
];

export default function LandingPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const suburbRef = useRef(null);
  const [suburb, setSuburb] = useState('');
  const [filteredPostcodes, setFilteredPostcodes] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const productNames = products.map((p) => p.name);
  const productRef = useRef(null);

  const handleSuburbChange = (e) => {
  const value = e.target.value;
  setSuburb(value);
  const filtered = postcodes.filter(p =>
    p.toLowerCase().includes(value.toLowerCase())
  );
  setFilteredPostcodes(filtered);
  setFilteredProducts([]); // hide product dropdown
};

const handleSelectPostcode = (postcode) => {
  setSuburb(postcode);
  setFilteredPostcodes([]);
};

const handleProductChange = (e) => {
  const value = e.target.value;
  setQuery(value);
  const filtered = productNames.filter(name =>
    name.toLowerCase().includes(value.toLowerCase())
  );
  setFilteredProducts(filtered);
  setFilteredPostcodes([]); // hide suburb dropdown
};


const handleSelectProduct = (product) => {
  setQuery(product);
  setFilteredProducts([]);
};

useEffect(() => {
  const handleClickOutside = (e) => {
    if (suburbRef.current && !suburbRef.current.contains(e.target)) {
      setFilteredPostcodes([]);
    }
    if (productRef.current && !productRef.current.contains(e.target)) {
      setFilteredProducts([]);
    }
  };
  window.addEventListener('click', handleClickOutside);
  return () => window.removeEventListener('click', handleClickOutside);
}, []);


const highlightMatch = (text, input) => {
  if (!input) return text;
  const safeInput = input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${safeInput})`, 'i');
  const parts = text.split(regex);
  return parts.map((part, idx) =>
    regex.test(part)
      ? <span key={idx} className="text-green-600">{part}</span>
      : part
  );
};

  const handleSearch = () => {
    if (query.trim() && suburb.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}&suburb=${encodeURIComponent(suburb)}`);
    } else {
      alert('Please enter both a product and suburb.');
    }
  };

  return (
    <div
  className="min-h-screen text-center flex flex-col justify-between"
  style={{
    backgroundImage: "url('/images/landing-bg.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left top, right bottom",
    backgroundSize: "auto",
    backgroundAttachment: "fixed",
    backgroundColor: "#f3fdf5",
  }}
>
      {/* Top Nav */}
      <header className="flex justify-end p-6 space-x-6 text-sm text-gray-800 font-medium">
        <span onClick={() => navigate('/search')} className="hover:text-green-700 cursor-pointer">Browse Products</span>
        <span onClick={() => navigate('/search')} className="hover:text-green-700 cursor-pointer">Browse Stores</span>
        <a href="/login" className="hover:text-green-700">Sign In</a>
      </header>

      {/* Hero */}
      <main className="px-4 flex flex-col items-center max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
          Online Local Grocery Shopping
        </h1>
        <p className="text-lg text-gray-700 mb-8">Shop from local grocers near you.</p>

        {/* Unified search bar with dropdowns */}
<div className="w-full max-w-2xl shadow-md rounded-lg border border-gray-300 bg-white">
  <div className="flex">
    {/* Product input */}
    <div ref={productRef} className="relative flex items-center gap-2 px-4 w-1/2">
      <span className="text-lg">🛒</span>
      <input
        type="text"
        value={query}
        onChange={handleProductChange}
        onFocus={() => setFilteredPostcodes([])}
        placeholder="Search products..."
        className="w-full py-3 text-sm outline-none bg-transparent"
      />
      {/* ✅ Dropdown for product */}
      {filteredProducts.length > 0 && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-300 shadow-md z-10 max-h-60 overflow-y-auto text-sm">
          {filteredProducts.map((product, idx) => (
            <div
              key={idx}
              onClick={() => handleSelectProduct(product)}
              className="px-4 py-2 hover:bg-green-100 cursor-pointer"
            >
              {highlightMatch(product, query)}
            </div>
          ))}
        </div>
      )}
    </div>

    {/* Suburb input */}
    <div ref={suburbRef} className="relative flex items-center gap-2 px-4 w-1/2 border-l border-gray-200">
      <MapPinIcon className="h-5 w-5 text-green-600" />
      <input
        type="text"
        value={suburb}
        onChange={handleSuburbChange}
        onFocus={() => setFilteredProducts([])}
        placeholder="Enter your suburb/postcode"
        className="w-full py-3 text-sm outline-none bg-transparent"
      />
      {/* ✅ Dropdown for suburb */}
      {filteredPostcodes.length > 0 && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-300 shadow-md z-10 max-h-60 overflow-y-auto text-sm">
          {filteredPostcodes.map((postcode, idx) => (
            <div
              key={idx}
              onClick={() => handleSelectPostcode(postcode)}
              className="px-4 py-2 hover:bg-green-100 cursor-pointer"
            >
              {highlightMatch(postcode, suburb)}
            </div>
          ))}
        </div>
      )}
    </div>

    {/* Search button */}
    <button
      onClick={handleSearch}
      className="bg-green-600 hover:bg-green-700 text-white px-6 text-sm font-semibold transition"
    >
      Search
    </button>
  </div>
</div>

      </main>

      {/* Logo footer */}
      <footer className="pb-10 pt-16 flex justify-center items-center">
        <img src={logo} alt="GrocerMate" className="h-14 md:h-16 object-contain" />
      </footer>
    </div>
  );
}
