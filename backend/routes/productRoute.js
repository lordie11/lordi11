const express = require("express");
const multer = require('multer')
const {
  createProduct,
  getaProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  addToWishlist,
  rating,
  showCategoryProducts
} = require("../controller/productCtrl");


const prodC=require('../controller/productCtrl')


const router = express.Router();


// const storage = multer.diskStorage({
//   destination:(req,file,cb)=>{
//       cb(null,"../uploads");
//   },
//   filename : (req,file,cb)=> {
//       cb(null,file.originalname);
//   }

// })

// const upload=multer({storage:storage})





const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"C:/Users/u/Downloads/Front_E-commerce_website_using_Reactjs-main/backend/uploads");
    },
    filename : (req,file,cb)=> {
        cb(null,file.originalname);
    }

})

const upload=multer({storage:storage})
router.post("/",upload.single("productImage"),prodC.createProduct);

router.get('/category/:id/products', showCategoryProducts);



router.get("/:id", getaProduct);
router.put("/wishlist", addToWishlist);
router.put("/rating",  rating);

router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

router.get("/", getAllProduct);


module.exports = router;
