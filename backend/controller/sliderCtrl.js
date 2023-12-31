const Slider = require('../models/sliderModel');

async function getAllSlider(req,res){
  const products=await Slider.find()
  res.json(products);
}

async function getS(req,res){
  const idP=req.params.id;
  const p= await Slider.findById(idP)
  res.json(p)


}

async function createSlider(req, res){

    // const p = JSON.parse(req.body.productData);
    // p.images ='/uploads/'+req.file.originalname;
    const p =JSON.parse(req.body.productData);
    p.image= '/uploads/'+req.file.originalname;
    try{
    await Slider.create(p)
      res.status(201)  
    }catch(error){
      res.status(500).send(error)
      console.log(error);
    }
  }
  ;

  module.exports = {createSlider,getAllSlider,getS}