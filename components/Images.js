import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { getError } from '../utils/error';


const image = () => {
    const[image,setImage]=useState("");
    console.log(image);



    const handleSubmit = async (e)=>{
        e.preventDefault()

    
        try{
               const image =  await imageUpload()
        const res =  await fetch(`api/photo`,{
          method:"POST",
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
           
            
            image,
           
          })
        })
        const res2 = await res.json()
        if(res2.error){
          toast({html: res2.error})
        }else{
          toast.success('Image Uploaded Succesfuly')
          setImage('');
        }
        }catch(err){
          toast.error(getError(err))
        }
   
      }




    const imageUpload = async ()=>{
        const data =  new FormData()
        data.append('file',image)
        data.append('upload_preset',"czfyzpjv")
        data.append('cloud_name','sttcid7e')

        const res = await fetch("https://api.cloudinary.com/v1_1/dyhfvtezk/image/upload",{
          method:"POST",
          body:data
        })
        const res2  = await res.json();
        
        return res2.url
        
   }
    

  return (
    <div>
<form  onSubmit={(e)=>handleSubmit(e)}>

  
  <label className='font-semibold text-lg'> Add image to galeries :</label>
        <input 
        type='file'
        accept='image/*'
        onChange={(e)=>setImage(e.target.files[0])}
      

        required
        />
  <button type='submit' className='bg-cyan-500 mt-4 py-3 text-white font-semibold ml-2    px-3 rounded-lg  hover:animate-bounce  ' >Send</button>
    <div className='mb-1 mt-1' >
    <img  style={{height:'150px'}}  src={image?URL.createObjectURL(image):''}
    

    />
    
    </div>
   
    </form>
    </div>
    
  )   
}

export default image