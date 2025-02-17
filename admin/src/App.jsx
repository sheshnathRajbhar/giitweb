import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// import components and pages
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Media from './pages/Media'
import EnquiryList from './pages/EnquiryList'
import RegistrationList from './pages/RegistrationList'
import Result from './pages/Result'
import News from './pages/News'


const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'')
  useEffect(()=>{
    localStorage.setItem('token', token)
  },[token])

  return (
    <> 
       {token?(
        <>
        <Navbar setToken={setToken}/>
            <div className='flex gap-16'>
              <Sidebar/>
              <div className='w-[70%] pt-12'>
                  <Routes>
                     <Route path='/' element={<Dashboard/>}/>
                     <Route path='/upload-media' element={<Media/>}/>
                     <Route path='/news' element={<News/>}/>
                     <Route path='/upload-result' element={<Result/>}/>
                     <Route path='/enquiry-list' element={<EnquiryList/>}/>
                     <Route path='/registration-list' element={<RegistrationList/>}/>
                  </Routes>
              </div>
            </div> 
        </>
       ):(<Login setToken={setToken}/>)}     

    </>
  )
}

export default App