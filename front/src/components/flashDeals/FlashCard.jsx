import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { getAllProduct } from "../../services/ProdService"
import { Link } from "react-router-dom"

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}
const FlashCard = ({ productItems, addToCart }) => {

  
  const [products,setProducts]=useState([]);

  useEffect(()=>{
      fetchProducts();
      
  },[]);
  
  async function fetchProducts(){
      const resp= await getAllProduct();
      setProducts(resp.data)
      console.log(resp.data)
      
  }



  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
    <Slider {...settings}>
        {products.map((productItems) => {
          return (

            
            <div className='box'>
              <div className='product mtop'>
                <div className='img'>
                  <span className='discount'>{productItems.sold}% Off</span><br /><br /><br /><br />
                  <img src={"http://localhost:4000"+productItems.image} className="w" alt='' />
                  <div className='product-like'>
                    <label>{count}</label> <br />
                    <i className='fa-regular fa-heart' onClick={increment}></i>
                  </div>
                </div>
                <div className='product-details'>
                  <h3>{productItems.title}</h3>
                  <h3>{productItems.brand}</h3>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  <div className='price'>
                    <h4>${productItems.price}.00 </h4>
                    {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                    <button onClick={() => addToCart(productItems)}>
                      <i className='fa fa-plus'></i>
                    </button>
                    <Link to={`/show/${productItems._id}`} >
                    <button >
                      <i className='fa fa-eye'></i>
                    </button>
                    </Link>
                    
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>  
    </>
  )
}

export default FlashCard
