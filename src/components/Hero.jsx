import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import axios from 'axios';

const Hero = () => {
    const [clipborad, setClipboard] = useState(false);
    const [shorted, setShorted] = useState(false);
    const [error, setError] = useState(false);
    const [url, setUrl] = useState("");
    const handleChange = (e) => {
        setUrl(e.target.value);
    }

    const shortUrl = async () => {
        if(error){
            setError(false)
        }
       if(validateUrl(url)){
        const response = await axios.post("http://localhost:3000/shortenurl" ,{url : url});
        if(response.data.status){
            setUrl(response.data.url);
            setShorted(true);
        }
       }
       else{
        setError("Invalid URL format");
       }
    }

    const hadleMore = () => {
        setShorted(false);
        setClipboard(false);
        setUrl("");
    }

    const validateUrl = (url) => {
       try{
        const checkurl = new URL(url);
        if(checkurl.protocol === "http:" || checkurl.protocol === "https:"){
            return true;
        }
        return false;
       }
       catch(e){
        console.log(e)
       }
    }

    const handleCopy = () => {
        if(shorted){
            navigator.clipboard.writeText(url);
            setClipboard(true);
        }
    }
   
  return (
    <div className='parent bg-black h-[100vh] flex items-center justify-center'>
      <div className='elements mx-auto overflow-x-auto'>
        <div className="box w-[600px] h-[500px] m-12 rounded-2xl dark:bg-gray-900">
        {error ? <div className='bg-red-700 mb-2 w-full rounded-2xl'>
                <h1 className='text-white p-2 text-md'>{error}</h1>
              </div> : null}
             <a href="https://flowbite.com/" className="flex justify-center pt-8 items-center space-x-3 rtl:space-x-reverse">
              <FontAwesomeIcon className='text-white text-2xl' icon={faCompass} />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Shortner</span>
              </a>
              <div className='flex flex-col items-center justify-center mt-8'>
              <h1 className="text-4xl font-bold text-gray-300">Simplify Your Links</h1>
              <p className="mt-6 text-md text-gray-400 max-w-[400px] text-center">A powerful and easy-to-use URL shortener for all your sharing needs.</p>
            
              </div>
              <div className="mains m-12">
              
                 <input type="text" className='bg-white w-full p-2 border-none rounded-lg outline-none' value={url} onChange={(e) => handleChange(e)} placeholder='Paste your url here' />
                 {shorted ? 
                  <div className='flex items-center mt-4'>
                  <button className='w-full text-white bg-green-600 p-2 rounded-lg hover:bg-green-500 text-white' onClick={handleCopy}>{clipborad ?<> <FontAwesomeIcon icon={faCheck} /> Copied</> : <> <FontAwesomeIcon icon={faCopy} /> Copy</>}</button>
                  <button className='w-full text-white bg-gray-600 p-2 ml-2 rounded-lg hover:bg-green-500' onClick={hadleMore}>Convert More</button>
               </div> :
                  <button className='w-full mt-2 text-white bg-green-600 p-2 rounded-lg hover:bg-green-500' onClick={shortUrl}>Get Shorten</button> 
                 
                 }
                 </div> 
                <div>
                
                

               

              </div>
                {shorted ? <h1 className='text-center text-white text-2xl font-bold'>Thank you for using Shortner 🙌 </h1> : <h1 className='text-center text-white text-2xl font-bold'>Welcome to url shortner  👋  </h1>}
        </div>
      </div>
    </div>
  )
}

export default Hero
