import Head from 'next/head'
import axios from 'axios'
import { useEffect, useState } from 'react';
import Data from '../components/Data';
import Image from 'next/image'
import Images from '../components/Images'


import {motion} from 'framer-motion';

export default function Home() {


  const[data,setData]=useState({});


  useEffect(()=>{
  
     axios.get('http://numbersapi.com/1/30/date?json')
    .then((response => {
     setData(response.data);
     
    }), error => {
      console.log(error);
  
    });
  },[]);
  

  return (
    <div className='font-mono  lg:grid grid-cols-2 gap-4  align-middle overflow-hidden  '>
     
    <motion.div className='lg:mt-36'
    
    
    initial={{

     x:-1000,
        opacity:0,
      
   }}
   animate={{
     x:0,
     opacity:1,
     scale:1,
   }}
   transition={{
     duration:1.5,
   }}
    
    
    
    >
     {<Data data={data} /> }

     <Images/>

     </motion.div>


  

     <motion.div className=' sm:mt-4  '
     
     
     initial={{

       x:1000,
          opacity:0,
          scale:0.5,
     }}
     animate={{
       x:0,
       opacity:1,
       scale:1,
     }}
     transition={{
       duration:1.5,
     }}
     



     
     
     >
       <Image
       src='/spencer-davis-0ShTs8iPY28-unsplash.jpg'
       width={400}
       height={400}
       alt='gym'
       className='w-full h-[500px]  rounded-lg sm:w-full object-cover '
     
       
       />
     </motion.div>

     <motion.div
     
     initial={{

       x:-1000,
          opacity:0,
          scale:0.5,
     }}
     animate={{
       x:0,
       opacity:1,
       scale:1,
     }}
     transition={{
       duration:1.5,
     }}
     
     
     
     >
      
     </motion.div>
     <div></div>
    
     




    
</div>
  )
}

/*export const getStaticProps=async()=>{
  const res = await fetch('http://numbersapi.com/1/30/date?json');
  const data = await res.json();
  return {
    props :{
      data
    }
  }
}
   <p> {data.text}   </p> 
       <p> {data.year}</p>
       <p> {data.number}</p>
       <p>  {data.found}</p>
       <p> {data.type}</p>
        
*/
