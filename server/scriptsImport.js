require('dotenv').config();

const connectdb = require('./config/db');
const productsData = require('./data/products');
const Product = require('./models/Product');

connectdb();

const importData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(productsData);
        console.log("Data import Success");
        process.exit();
    } catch (error) {
        console.error("Error import");
        process.exit(1);
    }
};

importData();