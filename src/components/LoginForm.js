import React from 'react'

const LoginForm = () => {
  return (
    <div>
      <form className='w-3/12 mx-auto left-0 right-0 my-36 px-10 py-4 bg-blue-950 text-white rounded-lg'>
        <p className='font-bold text-lg'>Sin In</p>
        <input type='text' placeholder='Email Id' className='w-full p-2 my-3'/>
        <input type='password' placeholder='Password' className='w-full p-2 my-3' />
        <button className='bg-red-700 p-2 w-full py-2 my-5'>SignIn</button>
      </form>
    </div>
  )
}

export default LoginForm
