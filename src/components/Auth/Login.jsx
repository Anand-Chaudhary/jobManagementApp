import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password)
        setEmail('')
        setPassword('')
    }

    return (
        <div className='flex items-center h-screen justify-center'>
            <div className="border-2 p-20 border-blue-500 rounded-xl">
                <form
                    className='flex flex-col items-center justify-center'
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                    <input 
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value);}}
                    required 
                    className='border-2 outline-none placeholder:text-zinc-700 rounded-full bg-white text-xl px-6 py-2 text-black' type="email" placeholder='Enter your Email' />
                    <input 
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    required 
                    className='border-2 outline-none placeholder:text-zinc-700 rounded-full bg-white m-5 text-xl px-6 py-2 text-black' type="password" placeholder='Enter your password' />
                    <button className='bg-blue-500 outline-none rounded-full text-xl px-10 py-2'>LogIn</button>
                </form>
            </div>
        </div>
    )
}

export default Login