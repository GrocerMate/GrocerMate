import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { MapPinIcon, PencilSquareIcon } from '@heroicons/react/24/solid';
import products from './data/products';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Header from './components/Header';
import PageUtilities from './components/PageUtilities';
import ShoppingListDrawer from './components/ShoppingListDrawer';

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

function SearchResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const suburb = params.get('suburb') || '';
  const query = params.get('query') || '';
  const category = params.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [isEditingSuburb, setIsEditingSuburb] = useState(false);
  const [suburbInput, setSuburbInput] = useState(suburb); // initialized from URL
  const [filteredPostcodes, setFilteredPostcodes] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [shoppingList, setShoppingList] = useState(() => {
    const saved = localStorage.getItem('shoppingList');
    return saved ? JSON.parse(saved) : [];
  });

  const [showList, setShowList] = useState(false);

  const [stickToBottom, setStickToBottom] = useState(true);
  const footerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setStickToBottom(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);


  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
  }, [shoppingList]);



  const handleClearList = () => {
    setShoppingList([]);
  };

  const removeFromList = (itemToRemove) => {
    setShoppingList((prevList) =>
      prevList.filter((item) => item.name !== itemToRemove.name)
    );
  };



  const handleSuburbChange = (e) => {
    const value = e.target.value;
    setSuburbInput(value);
    const filtered = postcodes.filter(p =>
      p.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPostcodes(filtered);
  };

  const handleSelectPostcode = (selected) => {
    setIsEditingSuburb(false);
    setSuburbInput(selected);
    setFilteredPostcodes([]);
    navigate(`/search?query=${encodeURIComponent(query)}&suburb=${encodeURIComponent(selected)}`);
  };

  const filteredProducts = products.filter(product => {
    const matchesQuery =
      !query || query === 'all'
        ? true
        : product.name.toLowerCase().includes(query.toLowerCase());

    const matchesCategory =
      !selectedCategory || selectedCategory === 'all'
        ? true
        : product.category === selectedCategory;

    return matchesQuery && matchesCategory;
  });


  const getCategoryLabelStyle = (category) => {
    switch (category) {
      case "Fruits & Vegetables":
        return "bg-green-100 text-green-700";
      case "Eggs,Milk & Dairy":
        return "bg-blue-100 text-blue-700";
      case "Meat & Poultry":
        return "bg-red-100 text-red-700";
      case "Bakery":
        return "bg-yellow-100 text-yellow-700";
      case "Frozen Food":
        return "bg-cyan-100 text-cyan-700";
      case "Snacks & Confectionery":
        return "bg-pink-100 text-pink-700";
      case "Beverages":
        return "bg-purple-100 text-purple-700";
      case "Pantry Staples":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Fruits & Vegetables":
        return "🥦";
      case "Eggs,Milk & Dairy":
        return "🥛";
      case "Meat & Poultry":
        return "🍗";
      case "Bakery":
        return "🍞";
      case "Frozen Food":
        return "🧊";
      case "Snacks & Confectionery":
        return "🍫";
      case "Beverages":
        return "🥤";
      case "Pantry Staples":
        return "🧂";
      default:
        return "🛒";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">

      {/* Header */}
      <header className="w-full bg-white border-b shadow min-h-[80px]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/">
            <img
              src="/images/logo.png"
              alt="GrocerMate Logo"
              className="h-10 md:h-12"
            />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center gap-2 text-gray-700"
          >
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
            <span className="text-sm font-medium">{menuOpen ? 'Close' : 'Menu'}</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <a href="/" className="text-gray-600 hover:text-green-600">Home</a>
            <a href="#" className="text-gray-600 hover:text-green-600">About</a>
            <a
              href="https://forms.gle/48Gs3EsHeP4Mtm3G7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600"
            >
              Become a Seller
            </a>
            <a
              href="https://forms.gle/fsGnewXtwJxLC6j19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600"
            >
              Feedback
            </a>
            <button className="bg-green-600 text-white px-4 py-2 rounded">
              Login / Sign Up
            </button>
          </nav>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-3 px-4 pb-4 max-w-7xl mx-auto">
            <a href="/" onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-green-600">Home</a>
            <a href="#" onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-green-600">About</a>
            <a
              href="https://forms.gle/48Gs3EsHeP4Mtm3G7"
              onClick={() => setMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600"
            >
              Become a Seller
            </a>
            <a
              href="https://forms.gle/fsGnewXtwJxLC6j19"
              onClick={() => setMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600"
            >
              Feedback
            </a>
            <button className="bg-green-600 text-white px-4 py-2 rounded w-full">
              Login / Sign Up
            </button>
          </div>
        )}
      </header>

      <PageUtilities />

      {/* Browse by Stores Heading */}
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 px-4 md:px-0">
        Browse by Stores
      </h2>
      {/**/}

      {/* ✅ Browse by Stores Scroll Bar */}
      <div className="w-full bg-white py-6 px-[180px] overflow-x-auto whitespace-nowrap flex gap-4 border-b border-gray-200 mb-6">
        {/* Store Card 

        <div className="flex-shrink-0 w-36 h-25 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md cursor-pointer">
          <img src="/images/Georgies_Harvest_Logo_HQ.png" alt="Georgies Harvest" className="h-[150px] object-contain" />
        </div>*/}

        {/* Fresh Farm Market (clickable) */}
        <div
          onClick={() => navigate('/grocer/fresh-farm')}
          className="flex-shrink-0 w-36 h-25 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md cursor-pointer"
        >
          <img src="/images/fresh-farm-market.png" alt="(Sample) Fresh Farm Market " className="h-[150px] object-contain" />
        </div>

        {/* Local Organics (clickable) */}
        <div
          onClick={() => navigate('/grocer/local-organics')}
          className="flex-shrink-0 w-36 h-25 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md cursor-pointer"
        >
          <img src="/images/local-organics.png" alt="(Sample) Local Organics " className="h-[150px] object-contain" />
        </div>

        {/* the fruiter's wife (clickable) <div
          onClick={() => navigate('/grocer/fruiterers-wife')}
          className="flex-shrink-0 w-36 h-25 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md cursor-pointer"
        >
          <img src="/images/the-fruiterers-wife-logo.png" alt="The Fruiter's Wife " className="h-[150px] object-contain" />
        </div>
        
        



       {/* <div className="flex-shrink-0 w-36 h-25 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md cursor-pointer">
          <img src="/images/simply-groceries.png" alt="Simply Groceries" className="h-[150px] object-contain" />
        </div>
        <div className="flex-shrink-0 w-36 h-25 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md cursor-pointer">
          <img src="/images/daily-veggies.png" alt="Daily Veggies" className="h-[150px] object-contain" />
        </div>
        <div className="flex-shrink-0 w-36 h-25 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md cursor-pointer">
          <img src="/images/market-hall.png" alt="Market Hall" className="h-[150px] object-contain" />
        </div>*/}


      </div>

      <div className="w-full px-4 mt-4 flex justify-start">
        {isEditingSuburb ? (
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              value={suburbInput}
              onChange={handleSuburbChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setIsEditingSuburb(false);
                  navigate(`/search?query=${encodeURIComponent(query)}&suburb=${encodeURIComponent(suburbInput)}`);
                }
              }}
              placeholder="Enter your suburb/postcode"
              className="w-full p-2 border border-gray-300 rounded-lg text-sm bg-white"
            />
            {filteredPostcodes.length > 0 && (
              <div className="absolute top-full mt-1 left-0 w-full bg-white border border-gray-200 rounded-md shadow-md z-10 max-h-60 overflow-y-auto">
                {filteredPostcodes.map((postcode, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleSelectPostcode(postcode)}
                    className="px-3 py-2 hover:bg-green-100 cursor-pointer text-sm text-left"
                  >
                    {postcode}
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => setIsEditingSuburb(true)}
            className="flex items-center gap-2 bg-green-50 text-green-700 text-sm font-medium px-4 py-2 rounded-full border border-green-200 shadow-sm hover:shadow hover:cursor-pointer transition-all duration-200"
          >
            <MapPinIcon className="h-4 w-4 text-green-600" />
            {suburb}
            <PencilSquareIcon className="h-4 w-4 text-green-600 ml-1" />
          </button>

        )}
      </div>



      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 mt-8 px-4">

        {/* Category Dropdown */}
        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            navigate(`/search?query=${encodeURIComponent(query)}&category=${encodeURIComponent(e.target.value)}&suburb=${encodeURIComponent(suburb)}`);
          }}
          className="w-full md:w-1/4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 bg-white"
        >
          <option value="all">All Categories</option>
          <option value="Fruits & Vegetables">Fruits & Vegetables</option>
          <option value="Eggs,Milk & Dairy">Eggs,Milk & Dairy</option>
          <option value="Meat & Poultry">Meat & Poultry</option>
          <option value="Bakery">Bakery</option>
          <option value="Frozen Food">Frozen Food</option>
          <option value="Snacks & Confectionery">Snacks & Confectionery</option>
          <option value="Beverages">Beverages</option>
          <option value="Pantry Staples">Pantry Staples</option>
        </select>

        {/* Product Search Input */}
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            value={query}
            onChange={(e) => {
              const newQuery = e.target.value;
              navigate(`/search?query=${encodeURIComponent(newQuery)}&category=${encodeURIComponent(selectedCategory)}&suburb=${encodeURIComponent(suburb)}`);
            }}
            className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 bg-white"
          />
          {query && (
            <button
              onClick={() =>
                navigate(`/search?query=&category=${encodeURIComponent(selectedCategory)}&suburb=${encodeURIComponent(suburb)}`)
              }
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black hover:text-green-600"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}

        </div>

        {/* Search Button */}
        <button
          onClick={() => navigate(`/search?query=${encodeURIComponent(query)}&category=${encodeURIComponent(selectedCategory)}&suburb=${encodeURIComponent(suburb)}`)}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center"
        >
          <MagnifyingGlassIcon className="h-5 w-5" />
        </button>

      </div>

      {/* Hero Section */}
      <div className="text-center mb-8 mt-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">
          Search Results
        </h1>
        {query ? (
          <p className="text-gray-600 text-lg">
            Showing results for "<span className="text-green-600">{query}</span>"
          </p>
        ) : (
          <p className="text-gray-600 text-lg">
            No search query entered.
          </p>
        )}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="w-full max-w-7xl mx-auto px-4">
          {/* ✅ Product Grid (left side) */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

            {filteredProducts.map((product, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 flex flex-col">
                <img
                  src={product.image || "https://placehold.co/300x200?text=Product"}
                  alt={product.name}
                  className="w-full h-48 object-contain bg-white p-3"
                />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                  <span className="text-sm text-gray-900 font-semibold mt-1">${product.price?.toFixed(2)}</span>
                  <span className={`inline-block mt-2 text-xs px-3 py-1 rounded-full ${getCategoryLabelStyle(product.category)}`}>
                    {getCategoryIcon(product.category)} {product.category}
                  </span>
                  <span
                    onClick={() =>
                      navigate(`/grocer/${product.grocer === 'Fresh Farm Market' ? 'fresh-farm' : 'local-organics'}`)
                    }
                    className="text-sm font-semibold text-green-700 mt-1 underline cursor-pointer"
                  >
                    Sold by {product.grocer}
                  </span>
                  {(() => {
                    const foundItem = shoppingList.find((item) => item.name === product.name);

                    return !foundItem ? (
                      <button
                        onClick={() =>
                          setShoppingList([...shoppingList, { ...product, quantity: 1 }])
                        }
                        className="mt-3 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded transition-all duration-300"
                      >
                        + Add to Shopping List
                      </button>
                    ) : (
                      <div className="mt-3 flex items-center gap-2">
                        <button
                          onClick={() => {
                            if (foundItem.quantity === 1) {
                              setShoppingList((prev) =>
                                prev.filter((item) => item.name !== product.name)
                              );
                            } else {
                              setShoppingList((prev) =>
                                prev.map((item) =>
                                  item.name === product.name
                                    ? { ...item, quantity: item.quantity - 1 }
                                    : item
                                )
                              );
                            }
                          }}
                          className="px-2 py-1 text-green-700 border border-green-500 rounded hover:bg-green-50 transition text-sm font-bold"

                        >
                          −
                        </button>

                        <span className="text-sm font-medium">{foundItem.quantity}</span>

                        <button
                          onClick={() =>
                            setShoppingList((prev) =>
                              prev.map((item) =>
                                item.name === product.name
                                  ? { ...item, quantity: item.quantity + 1 }
                                  : item
                              )
                            )
                          }
                          className="px-2 py-1 text-green-700 border border-green-500 rounded hover:bg-green-50 transition text-sm font-bold"

                        >
                          +
                        </button>
                      </div>
                    );
                  })()}
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Sticky Shopping List Sidebar (right side) <div className="hidden md:block md:w-1/4 h-fit sticky top-28">
            <div className="bg-green-50 border border-green-200 rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold text-green-800 flex items-center mb-3">
                🛒 Your Shopping List
              </h3>

              {shoppingList.length === 0 ? (
                <p className="text-sm text-gray-600">No items yet.</p>
              ) : (
                <div className="max-h-[300px] overflow-y-auto pr-1 mb-4">
                  <ul className="text-sm text-gray-800 space-y-1">
                    {shoppingList.map((item, i) => (
                      <li key={i} className="flex justify-between items-center">
                        <span>{item.name}</span>
                        <button
                          onClick={() =>
                            setShoppingList((prev) =>
                              prev.filter((p) => p.name !== item.name)
                            )
                          }
                          className="text-red-500 text-xs ml-2 hover:underline"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {shoppingList.length > 0 && (
                <button
                  onClick={() => setShoppingList([])}
                  className="w-full bg-green-600 hover:bg-green-700 text-white text-sm py-2 rounded"
                >
                  Clear List
                </button>
              )}
            </div>
          </div>*/}

        </div>
      ) : (
        <p className="text-gray-500 text-xl mt-8">
          No products found. Try a different search.
        </p>
      )}

      <ShoppingListDrawer
        shoppingList={shoppingList}
        setShoppingList={setShoppingList}
        buttonRef={buttonRef}
        stickToBottom={stickToBottom}
      />

      <footer
        ref={footerRef}
        className="py-6 text-center text-white text-sm w-full mt-8 bg-green-700"
      >
        © 2025 GrocerMate. All rights reserved. &nbsp;|&nbsp;
        <a href="#" className="underline hover:text-green-100">About</a> &nbsp;|&nbsp;
        <a href="#" className="underline hover:text-green-100">Contact</a> &nbsp;|&nbsp;
        <a href="#" className="underline hover:text-green-100">Terms of Service</a> &nbsp;|&nbsp;
        <a href="#" className="underline hover:text-green-100">Privacy Policy</a>
      </footer>



    </div>


  );
}

export default SearchResultsPage;