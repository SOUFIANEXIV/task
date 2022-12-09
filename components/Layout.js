import Head from 'next/head'
import React, { useState } from 'react'
import Link from 'next/link';
import {AiFillHome } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import {RiTeamFill} from "react-icons/ri";
import { MdFitnessCenter } from "react-icons/md";
import { BsFillBookFill } from "react-icons/bs";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {motion} from 'framer-motion'
import { BsGithub} from "react-icons/bs";











const Layout = ({children}) => {
  const [open,setOpen]=useState(false);


  return (
    <>

<Head>
        <title>Click FIt</title>
        <meta name="description" content="Click Fit" />

      </Head>

      
  <div className="flex  min-h-screen flex-col justify-between">

<motion.header className='flex  justify-between   shadow-md py-5 '

initial={{

  y:-100,
     opacity:0,
     
    
}}
animate={{
  y:0,
   opacity:1,
 
 

}}
transition={{
  duration:1,
  type:'spring',
  delay:0.5,    }}



>
<Link href='/' className='px-5 font-semibold font-serif  text-2xl  '>
    Click Fit
</Link>






<div  onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-4   cursor-pointer md:hidden' >
<span ><AiOutlineMenu  className='inline-block pb-2' size={40} name={open ? 'close':'menu'}   /></span>
</div>

<div className={`mx-auto font-semibold  md:flex md:items-center w-full md:pb-0 pb-12 absolute md:static bg-white md:z-auto left-0 w-full    md:w-auto md:pl-0 pl-9  transition-all duration-500 ease-in ${open ? 'top-[54px] ':'top-[-490px]'} scroll-smooth`} >

<Link href='/'   onClick={()=>setOpen(false)}className='px-5 md:ml-8 text-lg md:my-0 my-7 duration-500 block '>
    < AiFillHome className='inline-block mb-2 hover:animate-bounce mr-1  ' size={20}/>
    Home
</Link>
<Link href='/about'  onClick={()=>setOpen(false)} className='px-5 md:ml-8 text-lg md:my-0 my-7 duration-500 block'>
    < BsFillBookFill className='inline-block mb-2 hover:animate-bounce mr-1 ' size={20}/>
   About 
</Link>
<Link href='/courses'  onClick={()=>setOpen(false)} className='px-5 md:ml-8 text-lg md:my-0 my-7 duration-500 block' >
    < MdFitnessCenter className='inline-block mb-2 hover:animate-bounce mr-1 ' size={20}/>
    Exercises
</Link>

<Link href="/galerie"  onClick={()=>setOpen(false)}  className='px-5  md:ml-8 text-lg md:my-0 my-7 duration-500 block'>
    < RiTeamFill className='inline-block mb-2 hover:animate-bounce mr-1 ' size={20}/>
 Galeries
</Link>

</div>


</motion.header>

<ToastContainer
position="bottom-center"
autoClose={5000}
limit={1}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

   <main className='container m-auto  px-4'>{children}   </main> 

    <footer className="flex h-10 justify-center items-center shadow-inner">
    <Link href='https://github.com/SOUFIANEXIV/task' target='_blank'>Copyright © 2022 source code <BsGithub className='inline-block mb-1'/></Link>
    </footer>
    </div>
  </>
  )
}

export default Layout