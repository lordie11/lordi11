const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
    },
   
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    category:{
      type:mongoose.Types.ObjectId,
      ref:"PCategory"
    },
    brand: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    sold: {
      type: Number,
      default: 0,
    },
    image:{
      type:String
    }
    
    
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("Product", productSchema);
