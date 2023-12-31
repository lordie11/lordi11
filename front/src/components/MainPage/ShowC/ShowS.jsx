import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

import {   getS } from '../../../services/ProdService'
function ShowS() {
    
      
    const [title,setName] = useState('')
    const [image,setImage] = useState(null)
    const [desc,setD] = useState('')
    const {id}=useParams();

    useEffect(()=>{
      
      fetchProduct()
    },[]);
    async function fetchProduct(){
        const resp = await getS(id)
        console.log(resp)

        
        // const respp1 = await getallCategory()
        // const respp = await getAllProduct()
        // const categoryProducts = respp.filter(respp => respp.respp1 === respp1)
        // console.log(categoryProducts.data);
        
       setName(resp.data.title)
     
       setImage(resp.data.image)
       setD(resp.data.description)
    }


   
  return (
    <>
    <section className='ms-5'>
      <div className="container mw-100 py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card text-black">
              <i className=" fa-lg pt-3 pb-1 px-3"></i>
              <img
                src={"http://localhost:4000"+image}
                className="card-img-top w-50 ms-5"
                alt="Apple Computer"
              />
              <div className="card-body">
                <div className="text-center">
                  <h5 className="card-title">{title}</h5>
                 
                </div>
                <div>
                  <div className="d-flex justify-content-between">
                    <span>SOLD</span><span>33%</span>
                  </div>
                  
                  <div className="d-flex justify-content-between">
                    <span>Quantity left</span><span>25</span>
                  </div>
                  <div className="d-flex justify-content-between total font-weight-bold mt-4">
                    <span>Price</span><span>$15</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="description">
              <h3>Description</h3>
              <p>{desc}</p>
              <button className='btn btn-primary'>Add To cart </button>
            </div>
          </div>
        </div>
      </div>
    </section>
</>
  )
}

export default ShowS