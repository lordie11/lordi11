import http from './http-common'

export async function getallCategory(){
    
   return await http.get('/')
}

export async function addC(p){
    
    return await http.post('/api/category/',p);
    
}
export async function getC(id){
    
    return await http.get(`/${id}`);
    
}
export async function getProC(id){
    
    return await http.get(`/:id/products/${id}`);
    
}