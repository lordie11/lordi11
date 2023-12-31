const express = require("express");
const {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getallCategory,
  showCategory,
  productsInCategory
} = require("../controller/prodcategoryCtrl");

const router = express.Router();

router.post("/",  createCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);
router.get("/:id", getCategory);
router.get("c/:id",showCategory)
router.get("/", getallCategory);

module.exports = router;
