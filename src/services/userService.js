//ham goi axios
import axios from '../axios';// axios de goi den sever nodejs ben phia khach
// request gui request len server can phai gui kem  token sinh ra axios 
//ket noi voiw nodejs 

const handleLoginAPI =(userEmail,userPassword) =>{
     return axios.post('http://localhost:3000/api/login',{ email:userEmail, password:userPassword });
}
//
const getAllUsers = (InputId) =>{
     //template string
     return axios.get(`http://localhost:3000/api/get-all-user?id=${InputId}`)
}

const createNewuserserver = (data) =>{
     console.log('check data from server', data)
     return axios.post('http://localhost:3000/api/create-new-user', data)
}
const DeletUserServer = (userId) =>{
     console.log('check deleteUserServer', userId)
     // code cau lenh xoa user theo dia chi id tu thu vien axios
     return axios.delete("http://localhost:3000/api/delete-user",{
          data:{
               id : userId
          }
     });
}
export {handleLoginAPI,getAllUsers,createNewuserserver,DeletUserServer};