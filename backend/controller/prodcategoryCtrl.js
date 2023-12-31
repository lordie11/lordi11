const Category = require("../models/prodcategoryModel.js");
const Product = require('../models/prodcategoryModel.js')
const asyncHandler = require("express-async-handler");
// const validateMongoDbId = require("../utils/validateMongodbId");

const createCategory = asyncHandler(async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.json(newCategory);
  } catch (error) {
    throw new Error(error);
  }
});
const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedCategory);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedCategory = await Category.findByIdAndDelete(id);
    res.json(deletedCategory);
  } catch (error) {
    throw new Error(error);
  }
});
 


const getCategory = asyncHandler(async (req, res) => {

  const idP=req.params.id;
  const p= await Category.findById(idP)
  res.json(p)

});
const showCategory = asyncHandler(async (req, res) => {

  const id = req.params.id;

  try {
    const productsInCategory = await Product.find({ category: id });
    res.json(productsInCategory);
  } catch (error) {
    console.error('Error fetching products by category:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

});
const getallCategory = asyncHandler(async (req, res) => {
  const Cat = await Category.find()
    res.json(Cat)
});
module.exports = {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  showCategory,
  getallCategory,
  
};
