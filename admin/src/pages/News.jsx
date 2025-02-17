import React, { useState } from 'react'
import axios from "axios"
import {toast} from "react-toastify"

const News = () => {

const [title, setTitle] = useState('')
const [desc, setDesc] = useState('')

const onSubmitHandler = async(e) =>{
    e.preventDefault()
    try {
        const {data} = await axios.post(import.meta.env.VITE_BACKEND_URL + '/api/admin/post-news',{title, desc})
        if(data.success){
           toast.success(data.message) 
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
    <div className=''>
        <div className='max-w-[400px] mx-auto shadow p-4 rounded'>
            <h2 className='text-center text-lg'>Publis News</h2>
            <form onSubmit={onSubmitHandler}>
                <div className='flex flex-col gap-4 my-3'>
                    <label htmlFor="">News Title</label>
                    <input type="text" 
                    value={title} onChange={(e)=>setTitle(e.target.value)}
                    className='border border-1 border-black px-4 py-2 rounded'/>
                </div>

                <div className='flex flex-col gap-4 my-3'>
                    <label htmlFor="">News Description</label>
                    <textarea rows={'6'}
                     value={desc} onChange={(e)=>setDesc(e.target.value)} 
                    className='border border-1 h-[200px] border-black px-4 py-2 rounded'></textarea>
                </div>
                <button type='submit' className='px-4 py-2 rounded bg-blue-600 text-white w-full'>Publish</button>
            </form>
        </div>
    </div>
  )
}

export default News