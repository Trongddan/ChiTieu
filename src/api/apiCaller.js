import axios from "axios";
axios.interceptors.request.use((config)=>{
  const token=""
  if(token){
     config.headers.Authorization= `Bearr ${token}`
  }
  return config
})
axios.interceptors.response.use(
  (res)=>{
    return res
  },(err)=>{
    return new Promise(resolve,reject)=()=>{
      
    }
  }
)