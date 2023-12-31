const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var sliderSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      
    },
   
    description: {
      type: String,
    },
    image:{
      type:String
    }
    
    
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("Slider", sliderSchema);
