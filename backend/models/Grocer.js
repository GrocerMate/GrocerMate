import mongoose from 'mongoose';

const grocerSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: String,
  suburb: String,
  contact: String,
  description: String,
  logo: String,          // URL to logo
  banner: String,        // URL to banner
  products: [
    {
      name: String,
      category: String,
      price: Number,
      image: String       // URL to product image
    }
  ]
}, { timestamps: true });

export default mongoose.model('Grocer', grocerSchema);
