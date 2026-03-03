import React from 'react'

const Signup = () => {
  return (
    <div>
      <form className='flex flex-col max-w-[30%] justify-center mt-4 mx-auto border-2 rounded-2xl p-10'>
        <h1 className='text-3xl text-center text-orange-600 font-bold'>Signup</h1>

        <label htmlFor="name" >Full name: </label>
        <input type="text" id='name' className='border-1 border-amber-400 outline-red-600 px-3 mt-2 rounded-md'/> <br />

        <label htmlFor="email">Email: </label>
        <input type="email" className='border-1 border-amber-400 outline-red-600 px-3 mt-2 rounded-md'/><br />

        <label htmlFor="password">Password: </label>
        <input type="password" id='password' className='border-1 border-amber-400 outline-red-600 px-3 mt-2 rounded-md'/>

        <button type='submit' className='bg-green-600 mt-10 p-1 w-20 mx-auto rounded-md'>Submit</button>
      </form>
    </div>
  )
}

export default Signup;
