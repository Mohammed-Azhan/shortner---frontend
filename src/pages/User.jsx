import React, { useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'

const User = () => {
    const { key } = useParams();
    useEffect(() => {
       const returnOriginal = async () => {
           const response = await axios.post("http://localhost:3000/returnOriginal" ,{url : key});
           console.log(response.data)
           if(response.data.status){
            return window.location.href = response.data.url;
           }
       }
       returnOriginal();
    }, [])
  return (
    <div>
      
    </div>
  )
}

export default User
