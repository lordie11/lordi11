import http from './http-common'


export async function Register(user){
    
    return await http.post('/api/user/register',user)
    
 }

export async function logIn(user){
    
    return await http.post('/api/user/login',user)
 }