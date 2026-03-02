import React from 'react'

const Signin = () => {
  return (
    <div>
      <form className='flex flex-col max-w-[30%] justify-center mt-4 mx-auto border-2 rounded-2xl p-10'>
        <h1 className='text-3xl text-center text-orange-600 font-bold'>Login</h1>

        <label htmlFor="email">Email: </label>
        <input type="email" id='email' name='email' className='border-1 border-amber-400 outline-red-600 px-3 mt-2'/><br />

        <label htmlFor="password">Password: </label>
        <input type="password" id='password' name='password' className='border-1 border-amber-400 outline-red-600 px-3 mt-2'/>

        <button type='submit' className='bg-green-600 mt-10 p-1 w-20 mx-auto rounded-md'>Submit</button>
      </form>
    </div>
  )
}

export default Signin
