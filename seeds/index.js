//importing all seed files
const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

// import our database connection from config.js
const sequelize = require('../config/connection');

//importing all models
const { Category, Product, Tag, ProductTag } = require('../models');

//function to run seeds
const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
 
    await seedCategories(Category);
    console.log('\n----- CATEGORIES SEEDED -----\n');
    
    await seedProducts(Product);
    console.log('\n----- PRODUCTS SEEDED -----\n');
    
    await seedTags(Tag);
    console.log('\n----- TAGS SEEDED -----\n');
    
    await seedProductTags(ProductTag);
    console.log('\n----- PRODUCT TAGS SEEDED -----\n');

    process.exit(0);
  }
  catch (error) {
    console.error('Error seeding data', error);
    process.exit(1);
  }
};

seedAll();
