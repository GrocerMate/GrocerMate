import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Grocer from '../models/Grocer.js';

dotenv.config();

const grocers = [
  {
    id: "fresh-farm",
    name: "Fresh Farm Market",
    suburb: "Richmond",
    description: "Locally sourced fruits and vegetables. Serving Richmond for 10+ years.",
    contact: "0412 345 678",
    image: "/images/grocers/fresh-farm-banner.png",
    logo: "/images/fresh-farm-market.png"
  },
  {
    id: "local-organics",
    name: "Local Organics",
    suburb: "Carlton",
    description: "Your neighborhood organic shop. All products are chemical-free and handpicked.",
    contact: "0433 876 543",
    image: "/images/grocers/local-organics-banner.png",
    logo: "/images/local-organics.png"
  }
];

const seedGrocers = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Grocer.deleteMany(); // remove previous entries
    const inserted = await Grocer.insertMany(grocers);
    console.log('✅ Grocers seeded:', inserted);
    process.exit();
  } catch (err) {
    console.error('❌ Seeding failed:', err);
    process.exit(1);
  }
};

seedGrocers();
