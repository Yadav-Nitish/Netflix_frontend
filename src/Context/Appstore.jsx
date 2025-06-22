
import { useEffect, useState } from "react"
import AppContext from "./Appcontext"
import axios from 'axios'

const Appstore = ({children}) =>{
  
   const api_url = "http://localhost:1000/api"
   const[token,setToken] = useState('')
   const[authentication,setAuthentication]=useState(false)

  useEffect(()=>{
    const storedToken = localStorage.getItem('token')
    if(storedToken){
        setToken(storedToken)
        setAuthentication(true)
    }
  },[]) 

   const userRegister =async (name,email,password)=>{
        console.log(name,email,password)
         const api = await axios.post(`${api_url}/user/register`,
            {name,email,password},
            {
                headers:{
                    "Content-Type":"Application/json"
                },
                withCredentials:true,
            }
         )
         console.log(api.data);
         return api.data
   }

   
   const userLogin =async (email,password)=>{
        console.log(email,password)
         const api = await axios.post(`${api_url}/user/login`,
            {email,password},
            {
                headers:{
                    "Content-Type":"Application/json"
                },
                withCredentials:true,
            }
         )
         setToken(api.data.token);
         localStorage.setItem('token',token)
         setAuthentication(true);
         return api.data
   }

   const logOut = async() =>{
        setAuthentication(false)
        localStorage.removeItem('token')
        setToken(null)
        alert('logout')
   }

   

    return (
        <AppContext.Provider value={{userRegister,userLogin,logOut}}>
          {children}
        </AppContext.Provider>
    )
}

export default Appstore