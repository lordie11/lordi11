import {  useEffect, useState } from "react";

import { getallCategory } from "../../services/CatServices";
import { addProduct } from "../../services/ProdService";




export default function Add(){
    const [title,setTitle] = useState('')
    const [description,setDes] = useState('')
    const [price,setPrice] = useState(0)
    const [sold,setSold] = useState(0)
    const [quantity,setQuantity] = useState(0)
    const [brand,setBrand] = useState(0)
    const [productImage,setproductImage] = useState(null)
    const [categories,setCategories] = useState([])
    const [selectedCat,setSelectedCat] = useState(0)
    
    useEffect(()=>{
      fetchCategories()
    },[]);


    async function fetchCategories(){
      const resp = await getallCategory()
      setCategories(resp.data)
      console.log(resp.data)
      
    }
    
 async function handleForm(e){
    e.preventDefault();
    const p = {"title":title,"price":price,"description":description,"sold":sold,"brand":brand,"quantity":quantity,"category":categories[selectedCat]};
    const formData = new FormData();
    formData.append('productData',JSON.stringify(p));
    formData.append('productImage',productImage);
    // const formData = new FormData();
    // formData.append('productData',JSON.stringify(p));
    // formData.append('productImage',productImage);
    await addProduct(formData)
    const token =localStorage.getItem('jwtToken')
    console.log('tokeen' + token)
   
    

     
   
    // nav('/list')
    
    
 }
 return (
    <form onSubmit={e=>handleForm(e)}>
        <label className="form-label"> Nom :</label>
        <input className="form-control" onChange={e=>setTitle(e.target.value)}/>

        <label className="form-label"> Desc :</label>
        <input className="form-control" onChange={e=>setDes(e.target.value)}/>

        <label className="form-label"> Sold :</label>
        <input className="form-control" onChange={e=>setSold(e.target.value)}/>

        <label className="form-label"> brand :</label>
        <input className="form-control" onChange={e=>setBrand(e.target.value)}/>

        <label className="form-label"> prix :</label>
        <input className="form-control" onChange={e=>setPrice(e.target.value)}/>

        <label className="form-label"> quantite :</label>
        <input className="form-control" onChange={e=>setQuantity(e.target.value)}/>

         <label className="form-label"> Image :</label>
        <input className="form-control" type="file" onChange={e=>setproductImage(e.target.files[0])}/>


        <label className="form-label"> Category :</label>

        <select className="form-control" onChange={(e)=>setSelectedCat(e.target.value)}>
         {categories.map((cat,index)=>

         <option value={index}>{cat.title}</option>
         )}

        </select>

        <button type="submit" className="btn btn-primary">Save </button>

    </form>
 )

}