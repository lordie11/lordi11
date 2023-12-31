import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import {  getCategoryProduct } from '../../../services/ProdService'
// import './show.css'
function Showc() {
    
    const [products,setP]=useState([])
    
    const {id}=useParams();

    useEffect(()=>{
      
      fetchProduct()
    },[]);
    async function fetchProduct(){
        const resp = await getCategoryProduct(id);
        console.log(resp);
        
        setP(resp.data);
       

        
        
    }


   
  return (
    <div className=''>
     
    
      
  
        {products.map((p)=><div key={p._id}>
           





        <div className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="d-flex flex-nowrap overflow-auto">
            {products.map((product, index) => (
              <div
                className="card text-black mx-2 mb-4 flex-grow-0"
                style={{ maxWidth: '500px' }}
                key={index}
              >
                <img
                  src={"http://localhost:4000" + product.image}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body">
                  <div className="text-center">
                    <h5 className="card-title">{product.title}</h5>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between">
                      <span>SOLD</span><span>{product.sold}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Quantity left</span><span>{product.quantityLeft}</span>
                    </div>
                    <div className="d-flex justify-content-between total font-weight-bold mt-4">
                      <span>Price</span><span>${product.price}</span>
                    </div>
                    <div className="text-center mt-3">
                      <button className='btn btn-primary'>Add To Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
            
           
           
        </div>)}


     
    
    
  
   
   </div>
   
    
  
  )
}

export default Showc