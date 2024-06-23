const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
require("dotenv").config({ path: "../.env" });

const app = express();

// Log environment variables
console.log("Environment variables:", {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV,
});

// Middleware
app.use(cors());
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Test database connection
sequelize
  .authenticate()
  .then(() => console.log("Database connected."))
  .catch((err) => console.error("Unable to connect to the database:", err));

// Sample route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Target Lingo API" });
});

// Test route
app.get("/test", (req, res) => {
  res.json({ message: "Server is running and reachable!" });
});

// Routes
const translationsRouter = require("./src/routes/translations");
app.use("/api/translations", translationsRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
