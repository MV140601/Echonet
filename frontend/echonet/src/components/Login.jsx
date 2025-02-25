import React, { useState } from 'react'
import logo from '../assests/echonetlogo.jpg'
const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
   const [isLogin,SetIsLogin]=useState(true);
const loginsignuphandler=(ev)=>{
  ev.preventDefault();
  SetIsLogin(!isLogin);
}

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='flex items-center justify-evenly w-[80%]'>
        <div><img src={logo} width={"300px"} alt="" /></div>
        <div className='w-[50%]'>
          <div className='my-5'>
          <h1 className=' font-bold text-5xl font-FacultyGlyphic'>Echo Now,Resonate Forever</h1>
          </div>
          <h1 className='mt-4 mb-2 text-3xl   font-semibold font-serif '>{isLogin?"Login":"Create Account"} </h1>
          <form className='flex flex-col w-[50%] space-y-2'>
            {
              !isLogin && (<>
              
              <input type="text" placeholder='Name' className=' font-semibold outline-blue-300 border border-gray-300 px-3 py-2 rounded-full' />
              <input type="text" placeholder='UserName' className=' font-semibold outline-blue-300 border border-gray-300 px-3 py-2 rounded-full' />
              </>)
            }
            <input type="email" placeholder='Email' className=' font-semibold outline-blue-300 border border-gray-300 px-3 py-2 rounded-full' />
            <input type="password" placeholder='Password' className=' font-semibold outline-blue-300 border border-gray-300 px-3 py-2 rounded-full'  />
          <button className='bg-indigo-400 text-lg border-none py-2 my-4 rounded-full text-white font-bold hover:bg-indigo-500'>{!isLogin? "Register":"Login"}</button>
         <h1>{isLogin? "Do not have an Account?":"Already have an Account"} <button className='text-indigo-600 font-semibold ' onClick={loginsignuphandler}>{isLogin? "Register":"Login"}</button> </h1>
         
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
