import React, { useEffect, useState } from 'react'
import { UpdateProduct, getP } from '../../services/ProdService'
import {useParams} from 'react-router-dom'
import { useHistory } from 'react-router-dom';

function EditProduct() {
    const {id}=useParams();
     
    const history = useHistory();
    const [title,setTitle] = useState('')
    const [description,setDes] = useState('')
    const [price,setPrice] = useState(0)
    const [sold,setSold] = useState(0)
    const [quantity,setQuantity] = useState(0)
    const [brand,setBrand] = useState(0)
    // const nav = useNavigate()
    useEffect(()=>{
    
      fetchProduct()
    },[]);
    async function fetchProduct(){
        const resp = await getP(id)
        setTitle(resp.data.title)
        setPrice(resp.data.price)
        setDes(resp.data.description)
        setSold(resp.data.sold)
        setQuantity(resp.data.quantity)
        setBrand(resp.data.brand)
    }


   
    
 async function handleForm(e){
    e.preventDefault();
    const p = {"title":title,"price":price,"description":description,"sold":sold,"brand":brand,"quantity":quantity};
    await UpdateProduct(id,p)
    history.push('/list');
    
    
    
 }
 return (
    <form onSubmit={e=>handleForm(e)}>
        <label className="form-label"> Nom :</label>
        <input className="form-control" value={title} onChange={e=>setTitle(e.target.value)}/>

        <label className="form-label"> prix :</label>
        <input className="form-control" value={price} onChange={e=>setPrice(e.target.value)}/>

        <label className="form-label"> quantite :</label>
        <input className="form-control" value={quantity} onChange={e=>setQuantity(e.target.value)}/>

        <label className="form-label"> sold :</label>
        <input className="form-control" value={sold} onChange={e=>setSold(e.target.value)}/>

        <label className="form-label"> des :</label>
        <input className="form-control" value={description} onChange={e=>setDes(e.target.value)}/>

        <label className="form-label"> brand :</label>
        <input className="form-control" value={brand} onChange={e=>setBrand(e.target.value)}/>


        {/* <label className="form-label"> Category :</label>

        <select className="form-control" onChange={(e)=>setSelectedCat(e.target.value)}>
         {categories.map((cat,index)=>
         <option value={index}>{cat.name}</option>
         )}

        </select> */}

        <button type="submit" className="btn btn-primary">Save </button>

        

    </form>
 )


}

export default EditProduct