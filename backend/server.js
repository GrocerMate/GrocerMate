import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
//import productRoutes from './routes/products.js';
import grocerRoutes from './routes/grocerRoutes.js';
import uploadRoute from './routes/upload.js';



dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/upload', uploadRoute);


// Routes
//const productRoutes = require('./routes/products');
//const grocerRoutes = require('./routes/grocersRoutes');

//app.use('/api/products', productRoutes);
app.use('/api/grocers', grocerRoutes);

// DB + Server start
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ Connected to MongoDB');
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}).catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});
