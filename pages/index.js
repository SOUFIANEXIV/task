import Head from 'next/head'
import axios from 'axios'
import { useEffect, useState } from 'react';

/*import Data from '../components/Data';*/

<<<<<<< HEAD
=======

>>>>>>> de6666511fe1fd846888fe64b0a1d20701f647e1
import Image from 'next/image'
import Images from '../components/Images'


import {motion} from 'framer-motion';

export default function Home({data}) {


  /*const[data,setData]=useState({});*/


  /*useEffect(()=>{
  
     axios.get('http://numbersapi.com/1/30/date?json')
    .then((response => {
     setData(response.data);
     
    }), error => {
      console.log(error);
  
    });
  },[]);*/

<<<<<<< HEAD
=======
    
>>>>>>> de6666511fe1fd846888fe64b0a1d20701f647e1

  return (
<div className='font-mono  lg:grid grid-cols-2 gap-4  align-middle overflow-hidden  '>
     
<<<<<<< HEAD
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
=======
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
      <h1 className='text-xl pb-5   first-letter:text-5xl first-letter:text-cyan-700   underline underline-offset-4'>Let's Train</h1>
     <p className=' mb-2 '> {data.text}   </p> 

       
<span className='mb-4'> {data.type}:</span>
<p className='inline-block'> {data.year} Year,

</p>
<p> Number:{data.number},</p>
<p>  {!data.found ? (
<span  className='text-red-600'>Not found</span>
):(
<span>found</span>
)}</p>

        
   



     <Images/>

     </motion.div>


>>>>>>> de6666511fe1fd846888fe64b0a1d20701f647e1
  
     >
       <h1 className='text-xl pb-5   first-letter:text-5xl first-letter:text-cyan-700   underline underline-offset-4'>Let's Train</h1>
      <p className=' mb-2 '> {data.text}   </p> 
 
        
 <span className='mb-4'> {data.type}:</span>
 <p className='inline-block'> {data.year} Year,
 
 </p>
 <p> Number:{data.number},</p>
 <p>  {!data.found ? (
 <span  className='text-red-600'>Not found</span>
 ):(
 <span>found</span>
 )}</p>
         
    
 
 
      <Images/>
 
      </motion.div>
 
 
   
 
      <motion.div className=' sm:mt-4  '
      
<<<<<<< HEAD
      
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
      </div>
=======
     </motion.div>
     </div>
    
>>>>>>> de6666511fe1fd846888fe64b0a1d20701f647e1
     
      


  )
<<<<<<< HEAD

   } ;








export const getStaticProps=async()=>{

=======
};


export const getStaticProps=async()=>{
>>>>>>> de6666511fe1fd846888fe64b0a1d20701f647e1
const res = await fetch('http://numbersapi.com/1/30/date?json');

  const data = await res.json();
  return {
    props :{
      data
    }
  }
<<<<<<< HEAD
}
=======

}
  
        

  
>>>>>>> de6666511fe1fd846888fe64b0a1d20701f647e1

