// src/config/database.js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: false, // set to console.log to see the raw SQL queries
  dialectOptions: {
    ssl: false, // Disable SSL
  },
});

module.exports = sequelize;
