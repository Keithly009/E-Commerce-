// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, { 
  foreignKey: "Category_Id",
})
// Categories have many Products
Category.haveMany(Category, { 
  foreignKey: "Category_Id",
})
// Products belongToMany Tags (through ProductTag)
ProductTag.belongsToMany(Category, {
  through: { 
    model: ProductTag,
    Unique: false,
  }
}); 
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { 
  through: { 
    model: ProductTag, 
    Unique: false, 
  }
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
