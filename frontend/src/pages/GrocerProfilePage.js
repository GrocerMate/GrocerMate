import { useParams } from 'react-router-dom';
import grocers from '../data/grocers';
import Header from '../components/Header';
import { useState, useEffect, useRef } from 'react';
import PageUtilities from '../components/PageUtilities';
import { getCategoryLabelStyle, getCategoryIcon } from '../utils/categoryUtils';
import ShoppingListDrawer from '../components/ShoppingListDrawer';

function GrocerProfilePage() {
  const { id } = useParams();
  const grocer = grocers.find((g) => g.id === id);
  const footerRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(grocer.products.map(p => p.category))];
  const filteredProducts = selectedCategory === 'All'
    ? grocer.products
    : grocer.products.filter((p) => p.category === selectedCategory);


  const [shoppingList, setShoppingList] = useState(() => {
    return JSON.parse(localStorage.getItem('shoppingList')) || [];
  });

  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
  }, [shoppingList]);


  if (!grocer) {
    return <div className="p-6 text-red-600">Grocer not found.</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <Header />

      <PageUtilities />

      {/* Banner Image */}
      <div className="w-full h-48 md:h-64 overflow-hidden">
        <img
  src={grocer.banner || "/images/grocers/default-banner.png"}
  alt={grocer.name}
  className="w-full h-full object-cover"
  />
      </div>


      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Grocer Logo + Info */}
<div className="flex items-center gap-6 mb-6">
{/* Grocer Logo and Info - Centered Block */}
<div className="flex flex-col items-center text-center mb-6">
  {/* Logo */}
  <div className="w-36 h-36 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm">
    <img
      src={grocer.logo}
      alt={grocer.name}
      className="h-[110px] object-contain"
    />
  </div>

  {/* Name and Info */}
  <h1 className="text-3xl font-bold text-green-700 mt-4">{grocer.name}</h1>
  <p className="text-gray-600 text-sm mt-1">📍 {grocer.suburb}</p>
  <p className="text-gray-700 mt-1">{grocer.description}</p>
  <p className="text-sm text-gray-700 mt-1">📞 {grocer.contact}</p>
</div>

</div>


        <h2 className="text-xl font-semibold mb-4">Products</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
  {/* Sidebar */}
  <aside className="hidden md:block md:col-span-1 bg-white border rounded-lg p-4 shadow h-fit sticky top-28">
    <h3 className="text-md font-semibold mb-3 text-green-700">Filter by Category</h3>
    <ul className="space-y-2">
      {categories.map((cat) => (
        <li key={cat}>
          <button
            onClick={() => setSelectedCategory(cat)}
            className={`w-full text-left text-sm px-3 py-2 rounded hover:bg-green-100 ${
              selectedCategory === cat ? 'bg-green-600 text-white font-medium' : 'text-gray-700'
            }`}
          >
            {cat}
          </button>
        </li>
      ))}
    </ul>
  </aside>

{/* Mobile Category Dropdown */}
<div className="block md:hidden mb-4">
  <label className="text-sm font-medium text-gray-700">Filter by Category</label>
  <select
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
    className="w-full mt-1 p-2 border border-gray-300 rounded bg-white text-sm"
  >
    {categories.map((cat) => (
      <option key={cat} value={cat}>
        {cat}
      </option>
    ))}
  </select>
</div>

  {/* Product Grid */}
  <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {filteredProducts.map((product, idx) => (
      <div
        key={idx}
        className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 flex flex-col"
      >
        <img
          src={product.image || "https://placehold.co/300x200?text=Product"}
          alt={product.name}
          className="w-full h-48 object-contain bg-white p-3"
        />
        <div className="p-4 flex-1 flex flex-col justify-between">
          <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
          <span className="text-sm text-gray-900 font-semibold mt-1">${product.price.toFixed(2)}</span>
          <span className={`inline-block mt-2 text-xs px-3 py-1 rounded-full ${getCategoryLabelStyle(product.category)}`}>
            {getCategoryIcon(product.category)} {product.category}
          </span>

          {/* Add to cart logic here (your same logic) */}
          {(() => {
            const foundItem = shoppingList.find((item) => item.name === product.name);
            if (!foundItem) {
              return (
                <button
                  onClick={() =>
                    setShoppingList((prev) => [...prev, { ...product, quantity: 1 }])
                  }
                  className="mt-3 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded transition-all duration-300"
                >
                  + Add to Shopping List
                </button>
              );
            } else {
              return (
                <div className="mt-3 flex items-center gap-2">
                  <button
                    onClick={() =>
                      setShoppingList((prev) =>
                        prev.map((item) =>
                          item.name === product.name && item.quantity > 1
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                        ).filter(item => item.quantity > 0)
                      )
                    }
                    className="px-2 py-1 bg-gray-200 rounded text-sm font-bold"
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
                    className="px-2 py-1 bg-gray-200 rounded text-sm font-bold"
                  >
                    +
                  </button>
                </div>
              );
            }
          })()}
        </div>
      </div>
    ))}
  </div>
</div>
      </div>

      <ShoppingListDrawer
        shoppingList={shoppingList}
        setShoppingList={setShoppingList}
        footerRef={footerRef}
      />

      <footer
        ref={footerRef}
        className="bg-green-700 text-white py-6 text-center text-sm mt-8"
      >
        © 2025 GrocerMate. All rights reserved. &nbsp;|&nbsp;
        <a href="#" className="underline hover:text-green-100">About</a> &nbsp;|&nbsp;
        <a href="#" className="underline hover:text-green-100">Contact</a> &nbsp;|&nbsp;
        <a href="#" className="underline hover:text-green-100">Terms</a> &nbsp;|&nbsp;
        <a href="#" className="underline hover:text-green-100">Privacy</a>
      </footer>


    </div>


  );
}

export default GrocerProfilePage;