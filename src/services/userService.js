//ham goi axios
import axios from '../axios';// axios de goi den sever nodejs ben phia khach
// request gui request len server can phai gui kem  token sinh ra axios 
//ket noi voiw nodejs 

const handleLoginAPI =(userEmail,userPassword) =>{
     return axios.post('http://localhost:3000/api/login',{ email:userEmail, password:userPassword });
}
export {handleLoginAPI};