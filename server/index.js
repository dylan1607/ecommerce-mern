require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectdb = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

//Application-level Middleware layer

connectdb();
app.use(cors());
app.use(express.json()); //Must have if app has CRUD and json request
app.use((req, res, next) => {
  console.log(`New request at: ${Date()}`);
  next("route");
});

//Any request going to routes /api/... will access Router
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
