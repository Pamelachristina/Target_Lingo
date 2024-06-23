const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const Translation = sequelize.define("Translation", {
  originalText: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  translatedText: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  fromLanguage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  toLanguage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Translation;
