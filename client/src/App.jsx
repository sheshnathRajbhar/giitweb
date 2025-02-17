import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {MyContextProvider} from './context/store'
import Footer from "./components/Footer"
import { ToastContainer, toast } from 'react-toastify';
// Import pages
import Result from './pages/Result';
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Media from "./pages/Media"
import Enquery from './pages/Enquiry'
import OnlineRegistration from "./pages/OnlineRegistration"
import ResultVerification from "./pages/ResultVerification"


// import courses
import AllCourses from "./pages/courses/AllCourses"
import Deploma from "./pages/courses/Deploma"
import Accounting from "./pages/courses/Accounting"
import Nsoftware from "./pages/courses/Nsoftware"
import Nhardware from "./pages/courses/Nhardware"
import University from "./pages/courses/University"
import Certificate from "./pages/courses/Certificate"
import Scholarship from "./pages/courses/Scholarship"
import WebDesigining from "./pages/courses/WebDesigining"
const App = () => {
  return (
   <>
   <div>
     <Header/>
     <Navbar/>
     <ToastContainer/>
   </div>
   <div>
    <Routes>

      {/* pages Routes */}
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/course-list' element={<AllCourses/>}/>
       <Route path='/media' element={<Media/>}/>
       <Route path='/quick-enquiry' element={<Enquery/>}/>
       <Route path='/online-registration' element={<OnlineRegistration/>}/>
       <Route path='/certificate-verification' element={<ResultVerification/>}/>
       <Route path='/result/:image_url' element={<Result/>}/>



       {/* Courses routes */}
       <Route path='//course-list' element={<AllCourses/>} />
       <Route path='/course-list/deploma' element={<Deploma/>} />
       <Route path='/course-list/accounting' element={<Accounting/>} />
       <Route path='/course-list/software' element={<Nsoftware/>} />
       <Route path='/course-list/hardware' element={<Nhardware/>} />
       <Route path='/course-list/university' element={<University/>} />
       <Route path='/course-list/certificate' element={<Certificate/>} />
       <Route path='/course-list/scholarship' element={<Scholarship/>} />
       <Route path='/course-list/web-designing' element={<WebDesigining/>} />
    </Routes>
   </div>
   <div>
    <Footer/>
   </div>
   </>
  )
}

export default App