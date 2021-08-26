const express = require("express");
const cors = require("cors");
const path = require("path");

const connectdb = require("./config/db");
const productRoutes = require("./routes/productRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

//Application-level Middleware
app.use(cors());
app.use((req, res, next) => {
  console.log(`New request at: ${Date()}`);
  next("route");
});

//any request going to routes /api/products will access Router
app.use("/api/products", productRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
connectdb();
