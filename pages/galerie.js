import React from 'react'
import {motion} from 'framer-motion'
import baseUrl from '../helpers/baseUrl'



const galerie = ({photo}) => {
    

  return (

  <motion.div  id='galerie'  className='  mt-7      md:grid-cols-3 gap-6  lg:grid-cols-4   sm:grid grid-cols-1 sm:gap-y-5 '>

{photo.map((photo)=>(
<div key={photo._id} >

 <img src={photo.image}  className="  sm:w-full h-full md:w-56 md:h-52 mx-auto pt-3 " />


</div>

))}   
     </motion.div>
  )
}



export default galerie


export async function getStaticProps(){
    const res =  await fetch(`${baseUrl}/api/photo`)
    const data = await res.json()
    return {
      props:{
       photo:data
      }
    }
   }
   
  /* export async function getServerSideProps(){
    const res =  await fetch(`${baseUrl}/api/photo`)
    const data = await res.json()
    return {
      props:{
       photo:data
      }
    }
   }*/ 
