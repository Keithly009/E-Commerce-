const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      PrimaryKey: true, 
      autoIncrement: true, 
    }, 
    product_name: { 
      type: DataTypes.STRING, 
      allowNull: false, 
    }, 
    price: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      validate: { 
        isDecimal: true, 
      }
    },
    stock: {
      type: DataTypes.INTEGER, 
      allowNull: false, 
      defaultValue: "10",
      validate: { 
        isNumeric: true,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
