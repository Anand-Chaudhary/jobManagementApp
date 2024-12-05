import React from 'react'

const Header = ({data}) => {
  console.log(data);
  return (
    <div className='flex justify-between items-end'>
        <h1 className='text-2xl font-medium'>Hello, <br /> <span className='text-3xl font-semibold'>user 👋</span></h1>
        <button className='bg-red-500 outline-none rounded-full text-xl px-10 py-2'>Log Out</button>
    </div>
  )
}

export default Header