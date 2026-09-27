const express = require("express");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/users", userRoutes);

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "ShopIn Sprint 14 backend is running",
    });
});
const PORT = process.env.PORT || 4000;

connectDB();

app.listen(PORT, () => {
    console.log(`Sprint 14 ShopIn backend running on port ${PORT}`);
})