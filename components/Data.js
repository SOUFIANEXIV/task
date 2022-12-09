import React from 'react'

const Data = ({data}) => {

console.log(data)
  return (



    <div>
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
      
    
    
    </div>
  )
}

export default Data