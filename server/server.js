require('dotenv').config();
const express = require('express'); 
const connectdb = require('./config/db');
const productRoutes = require('./routes/productRoutes');

connectdb();
const app = express();

//Run this command app.use() in ALL request GET POST PUT
app.use(express.json());
app.use('/api/products', productRoutes); //any request going to routes /api/products will access productRoutes

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));