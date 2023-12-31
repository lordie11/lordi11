import {  useState } from "react";


import { addSlider } from "../../services/ProdService";




export default function CreatS(){
    const [title,setTitle] = useState('')
    const [description,setDes] = useState('')
   
    const [productImage,setproductImage] = useState(null)
   
    
    
 async function handleForm(e){
    e.preventDefault();
    const p = {"title":title,"description":description};
    const formData = new FormData();
    formData.append('productData',JSON.stringify(p));
    formData.append('productImage',productImage);
    // const formData = new FormData();
    // formData.append('productData',JSON.stringify(p));
    // formData.append('productImage',productImage);
    await addSlider(formData)
   
   
    

     
   
    // nav('/list')
    
    
 }
 return (
    <form onSubmit={e=>handleForm(e)}>
        <label className="form-label"> Nom :</label>
        <input className="form-control" onChange={e=>setTitle(e.target.value)}/>

        <label className="form-label"> Desc :</label>
        <input className="form-control" onChange={e=>setDes(e.target.value)}/>

       
         <label className="form-label"> Image :</label>
        <input className="form-control" type="file" onChange={e=>setproductImage(e.target.files[0])}/>



        <button type="submit" className="btn btn-primary">Save </button>

    </form>
 )

}