import http from './http-common'

export async function getAllProduct(){
    
   return await http.get('/api/product/')
}

export async function getCategoryProduct(id){
    
    return await http.get(`/api/product/category/${id}/products`)
 }


// ,{ 
//     headers : {'Content-Type':'multipart/form-data'}}
export async function addProduct(p){
    
    return await http.post('/api/product/',p,{ 
        headers : {'Content-Type':'multipart/form-data'}}
    );
   
    
    
    
}
export async function getS(id){
    
    return await http.get(`/api/slider/${id}`)
 }
export async function getAllS(){
    
    return await http.get("/api/slider/")
 }
export async function addSlider(p){
    
    return await http.post('/api/slider/',p,{ 
        headers : {'Content-Type':'multipart/form-data'}}
    );
   
    
    
    
}
export async function getP(id){

    return await http.get( `/api/product/${id}`);
     

}


export async function dProduct(idP){

    return await http.delete( `/api/product/${idP}`);
     

}

export async function UpdateProduct(idP,p){

    return await http.put( `/api/product/${idP}`,p);
     

}  

export async function wishlist(){
    
}



 