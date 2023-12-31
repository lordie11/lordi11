import { useEffect,useState } from "react";


import { Link } from "react-router-dom";
import { dProduct, getAllProduct } from "../../services/ProdService";

export default function ProductList(){

const [products,setProducts]=useState([]);

useEffect(()=>{
    fetchProducts();
},[]);

async function fetchProducts(){
    const resp= await getAllProduct();
    setProducts(resp.data)
    // const token =localStorage.getItem('jwtToken')
    // console.log('tokeen' + token)
    
}
async function deleteProduct (idP)  {
   await dProduct(idP);
   await fetchProducts()
  
  
};


return(
    <>
   
    <table className="table table-stripped bg-light">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
          <th>brand</th>
          <th>sold</th>
          <th>Qauntite</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p)=><tr key={p._id}>
            <td>{p.title}</td>
            <td>{p.price}</td>
            <td>{p.brand}</td>
            <td>{p.sold}</td>
            <td>{p.quantity}</td>
            <td><img width={100} height={100} src={"http://localhost:4000"+p.image} /></td>
            

            <td><button className="btn btn-info" onClick={()=>{deleteProduct(p._id)}}> DELETE</button>
            <Link to={`/edit/${p._id}`} > <button  className="btn btn-info"> Editer</button></Link>
            {/* <Link to={`/show/${p._id}`} > <button  className="btn btn-info"> show</button></Link> */}
            
            </td>
            
           
           
        </tr>)}


      </tbody>
    </table><br/><br/><br/><br/><br/><br/><br/>
   
   
  

    </>
)
} 