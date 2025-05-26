import { useState, useEffect } from 'react';
//import grocers from '../data/grocers';

export default function UploadProducts() {
  const [selectedGrocer, setSelectedGrocer] = useState('');
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('Fruits & Vegetables');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [success, setSuccess] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const [grocers, setGrocers] = useState([]);

const handleImageUpload = async (e) => {
  const file = e.target.files[0];
  const formData = new FormData();
  formData.append('file', file);

  try {
    const res = await fetch('http://localhost:5000/api/upload', {
      method: 'POST',
      body: formData
    });

    const data = await res.json();
    console.log('📸 Cloudinary Upload Response:', data);

    if (!data.url) {
      alert('Upload succeeded but no image URL returned');
      return;
    }

    setImageUrl(data.url); // ✅ store Cloudinary image URL
  } catch (err) {
    console.error('❌ Image upload failed:', err);
    alert('Image upload failed');
  }
};



  useEffect(() => {
    const fetchGrocers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/grocers');
        const data = await response.json();
        setGrocers(data);
      } catch (err) {
        console.error('❌ Failed to fetch grocers:', err);
      }
    };
    fetchGrocers();
  }, []);



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedGrocer || !productName || !price) {
      alert('Please fill all required fields.');
      return;
    }

    const newProduct = {
      name: productName,
      category,
      price: parseFloat(price),
      image: imageUrl
    };

    try {
      const response = await fetch(`http://localhost:5000/api/grocers/${selectedGrocer}/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct)
      });

      if (!response.ok) throw new Error('Failed to upload product');

      const updatedGrocer = await response.json();
      console.log('✅ Product uploaded:', updatedGrocer);
      setSuccessMessage(`Product added to ${updatedGrocer.name}`);
      setProductName('');
      setPrice('');
      setImageUrl('');
    } catch (error) {
      console.error('❌ Upload failed:', error);
      alert('Failed to upload product');
    }
  };


  return (
    <div className="max-w-3xl bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-green-700 mb-4">Upload New Product</h2>

      {success && (
        <div className="mb-4 p-2 bg-green-100 text-green-800 text-sm rounded">{success}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Seller *</label>
          <select
            value={selectedGrocer}
            onChange={(e) => setSelectedGrocer(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
            required
          >
            <option value="">-- Select a Grocer --</option>
            {grocers.map((g) => (
              <option key={g.id} value={g.id}>
                {g.name} ({g.suburb})
              </option>
            ))}
          </select>
        </div>


        <div>
          <label className="block text-sm font-medium">Product Name *</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Category</label>
          <select
            className="w-full border p-2 rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Fruits & Vegetables</option>
            <option>Milk & Dairy</option>
            <option>Meat & Poultry</option>
            <option>Bakery</option>
            <option>Frozen Food</option>
            <option>Snacks & Confectionery</option>
            <option>Beverages</option>
            <option>Pantry Staples</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Price (AUD) *</label>
          <input
            type="number"
            className="w-full border p-2 rounded"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            step="0.01"
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full border p-2 rounded"
          />
        </div>


        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Upload Product
        </button>
      </form>
    </div>
  );
}
