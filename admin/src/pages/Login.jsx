import React, { useState } from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';


const Login = ({setToken}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const onSubmitHandler = async(e)=>{
        e.preventDefault()
        try {
            const {data} = await axios.post(backendUrl + '/api/user/admin', {username, password})

            if(data.success){
                setToken(data.token)
            }else{
                console.log(data.message)
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error.message)
            toast.error(error.message)
        }
    }

  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-cyan-200'>
        <ToastContainer/>
         <form onSubmit={onSubmitHandler} className='shadow-md w-[300px] p-4 rounded bg-white'>
            <h2 className='text-center font-bold text-xl my-4'>Admin Login</h2>
            <div className='my-3'>
                <label className='block mb-2'>Login Id</label>
                <input 
                value={username} onChange={(e)=>setUsername(e.target.value)}
                className="border-1 rounded border-black border px-3 py-2 w-full" type="text" placeholder='xyz@gmail.com'/>
            </div>

            <div className='my-3'>
                <label className='block mb-2'>Password</label>
                <input
                value={password} onChange={(e)=>setPassword(e.target.value)}
                className="border-1 rounded border-black border px-3 py-2 w-full" type="password" placeholder='xyz@gmail.com'/>
            </div>

            <button type="submit" className='w-full py-2 text-center bg-blue-500 text-white rounded'>Login</button>
         </form>
    </div>
  )
}

export default Login