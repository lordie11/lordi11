import React, { useEffect, useState } from "react"
import { getallCategory } from "../../services/CatServices";
import { Link } from "react-router-dom";


const Categories = () => {
  // const data = [
    
  //   {
  //     cateImg: "./images/category/cat2.png",
  //     cateName: "Electronic",
  //   },
  //   {
  //     cateImg: "./images/category/cat3.png",
  //     cateName: "Cars",
  //   },
    
  //   {
  //     cateImg: "./images/category/cat5.png",
  //     cateName: "Gifts",
  //   },
  //   {
  //     cateImg: "./images/category/cat6.png",
  //     cateName: "Music",
  //   },
    
  //   {
  //     cateImg: "./images/category/cat10.png",
  //     cateName: "Groceries",
  //   },
  //   {
  //     cateImg: "./images/category/cat11.png",
  //     cateName: "Books",
  //   },
  // ]

  const [categories,setCategories] = useState([])

  useEffect(()=>{
    fetchCategories()
  },[]);
  async function fetchCategories(){
    const resp = await getallCategory()
    setCategories(resp.data)
    console.log(resp.data)
    
  }

  return (
    <>
      <div className='category'>
        {categories.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              
           <Link to={`/showc/${value._id}`} > <button  className="btn btn-">  <span>{value.title}</span></button></Link>

             
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
