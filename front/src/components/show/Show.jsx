import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import { getP } from '../../services/ProdService'
import './show.css'
function Show() {
    const [title,setName] = useState('')
    const [image,setImage] = useState(null)
    const [price,setPrice] = useState(0)
    const [brand,setbrand] = useState(0)
    const [sold,setSold] = useState(0)
    const [quantity,setQuantite] = useState(0)
    const [desc,setD] = useState('')
    const {id}=useParams();

    useEffect(()=>{
      
      fetchProduct()
    },[]);
    async function fetchProduct(){
        const resp = await getP(id)
       setName(resp.data.title)
       setPrice(resp.data.price)
       setQuantite(resp.data.quantity)
       setSold(resp.data.sold)
       setD(resp.data.description)
       setImage(resp.data.image)
    }


   
  return (
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
                    <span>SOLD</span><span>{sold}%</span>
                  </div>
                  
                  <div className="d-flex justify-content-between">
                    <span>Quantity left</span><span>{quantity}</span>
                  </div>
                  <div className="d-flex justify-content-between total font-weight-bold mt-4">
                    <span>Price</span><span>${price}</span>
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

  )
}

export default Show