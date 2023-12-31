import React, { useEffect, useState } from "react"
import Sdata from "./Sdata"
import Slider from "react-slick"
import './Home.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom"

import { getAllS } from "../../services/ProdService"

const SlideCard = () => {
  const [products,setProducts]=useState([]);

useEffect(()=>{
    fetchProducts();
},[]);

async function fetchProducts(){
    const resp= await getAllS();
    setProducts(resp.data)
    // console.log(resp)
    // // const token =localStorage.getItem('jwtToken')
    // console.log('tokeen' + token)
    
}


  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }
  return (
    <>
    <h1>Best Sales this Month</h1>
      <Slider {...settings}>
        {products.map((value, index) => {
          return (
            <>
              <div className='box d_flex top' key={index}>
                <div className='left'>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                  <Link to={`/shows/${value._id}`} >
                    <button >
                       <button className='btn-primary'>see product</button>
                    </button>
                    </Link>
               
                </div>
                <div className='right'>
                  <img className='zigzag' src={"http://localhost:4000"+value.image} alt='' />
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default SlideCard
