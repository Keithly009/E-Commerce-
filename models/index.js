// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, { 
  foreignKey: "Category_Id",
  onDelete: 'CASCADE', 
})
// Categories have many Products
Category.hasMany(Product, { 
  foreignKey: "Category_Id"
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: { 
    model: ProductTag,
    unique: false,
  },
  foreignKey: 'product_id'
}); 
Tag.belongsToMany(Product, {
  through: { 
    model: ProductTag, 
    unique: false,
  }
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
