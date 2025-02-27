import React from 'react'
import { setLocalStorage } from '../utils/LocalStorage'

const Header = (props) => {
  const logOut = () =>{
    localStorage.setItem('loggedInUser', '');
    props.changeUser('')
  }

  return (
    <div className='flex justify-between items-end'>
        <h1 className='text-2xl font-medium'>Hello, <br /> <span className='text-3xl font-semibold'> User👋</span></h1>
        <button 
        className='bg-red-500 outline-none rounded-full text-xl px-10 py-2'
        onClick={logOut}
        >Log Out</button>
    </div>
  )
}

export default Header