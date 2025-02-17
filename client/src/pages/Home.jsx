import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import slider1 from "../assets/slider1.jpg"
import student2 from "../assets/student2.jpg"
import News from './News'

const Home = () => {

  return (
    <div>

      <div className='w-full bg-[#F5F5F5] px-[5%] py-4'>
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[70%_25%] gap-6">
          <div className='shadow-sm shadow-black'>
            <img src={slider1} className='w-full h-auto' />
          </div>
          <div className='space-y-2'>
            <Link to={'/quick-enquiry'} className='w-full text-center text-white bg-[#889E73] py-2 px-4 block text-md font-bold'>Quick Enquiry</Link>
            <Link to={'/online-registration'} className='w-full text-center text-white bg-[#577BC1] py-2 px-4 block text-md font-bold'>Online Registration</Link>
            <Link to={'/certificate-verification'} className='w-full text-center text-white bg-[#441752] py-2 px-4 block text-md font-bold'>Result Verification</Link>
            <Link className='w-full text-center text-white bg-[#FF9D23] py-2 px-4 block text-md font-bold'>Latest News</Link>
            <div className='w-full border border-[#FF9D23] px-3'>
            <News/>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-[#F5F5F5] px-[5%] py-4'>
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[30%_70%] gap-6">
          <div className='shadow-sm shadow-black'>
            <img src={student2} className='w-full h-auto' />
          </div>
          <div className='space-y-4'>
            <h1 className='text-3xl font-semibold'>Welcome to Our Institute</h1>
            <p className='text-[#FF9D23]'>Where Natural curiosity and imagination leads to exploration and learning.</p>
            <p className='text-sm'>Gyansthaly Institute of Information Technology as the pioneer of Computing and IT Education for India is dedicated to providing the best quality of education with outclass teaching expertise and technical facilities. Thus, GIIT warmly welcomes all, regardless of nationality, whoever is eager to improve and be competitive in the field of Computing and IT.</p>
            <p className='text-sm'>Its academic heritage can be traced back since 2002. This institution is determined to continue striving hard for arranging and ensuring opportunities to the students for educational and personal development through support.</p>
          </div>
        </div>
      </div>

      <div className='w-full bg-[#F5F5F5] px-[5%] py-4'>
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[30%_70%] gap-6">
          <div className='shadow-sm shadow-black'>
            <div className="col-4 course-details pl-4">
              <h3 className='font-bold text-2xl'>Course Offered</h3>
              <div className="course-list">
                <h2 className='text-lg font-bold'>NIELIT SOFTWARE COURSE</h2>
                <ul className="ml-[30px] text-sm uppercase ">
                  <li><a href="#" className="text-blue-400">BCC, CCC, ECC</a></li>
                </ul>
              </div>
              <div className="course-list">
                <h6>NIELIT HARDWARE COURSE</h6>
                <ul className="ml-[30px] text-sm uppercase ">
                  <li><a href="#" className="text-blue-400">CHM A LEVEL</a></li>
                </ul>
              </div>
              <div className="course-list">
                <h6>Under ESDM Scheme (with Govt.Aid)</h6>
                <ul className="ml-[30px] text-sm uppercase ">
                  <li><a href="#" className="text-blue-400">Assembly & Maintenance Of PC’s</a></li>
                  <li><a href="#" className="text-blue-400">Installation & Maintenance of</a></li>
                  <li><a href="#" className="text-blue-400">Telecom Technician-Pc Hardware & Networking</a></li>
                </ul>
              </div>
              <div className="course-list">
                <h6>Accounting Package Tally. ERP 9 with GST</h6>
                <ul className="ml-[30px] text-sm uppercase ">
                  <li><a href="#" className="text-blue-400">Accounting Package Tally</a></li>
                </ul>
              </div>
              <div className="course-list">
                <h6>UNIVERSITY COURSES</h6>
                <ul className="ml-[30px] text-sm uppercase ">
                  <li><a href="#" className="text-blue-400">COMPUTER SCIENCE</a>
                    <ul>
                      <li><a href="" className="text-blue-400">DCA, ADCA</a></li>
                    </ul>
                  </li>
                </ul>
                <ul className="ml-[30px] text-sm uppercase ">
                  <li><a href="#" className="text-blue-400">ACADEMIC COURSES</a>
                    <ul>
                      <li><a href="" className="text-blue-400">B.A, B.COM, B.Sc</a></li>
                      <li><a href="" className="text-blue-400">M.A, M.COM, M.Sc</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="course-list">
                <h6>DIPLOMA COURSES</h6>
                <ul className="ml-[30px] text-sm uppercase ">
                  <li><a href="#" className="text-blue-400">DOA, DAPT, DCA, DDP</a></li>
                  <li><a href="#" className="text-blue-400">DWD, DWP, DIWP</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='space-y-4'>
            <h1 className='text-3xl font-semibold'>Message from Director</h1>
            <p className='text-sm mb-4'>Gyansthaly Institute of Information Technology ( GIIT ) , INDIA is the Computer Institute serving the Indian community, an ISO 9001:2008 certified- was established in 1998, through the aspirations of Mrs. Shakuntala Chauhan, the founder of GIIT , to provide the Indian community exceptional learning experiences in the field of information technology and administration. Engaged in job-oriented courses like BCC, CCC, O Level and A Level, DCA, PGDCA, BCA, MCA, Graphic Design, Programming , Hardware and Networking with facilities par to Metropolitan cities.</p>


            <p className='text-sm mb-4'>The institute occupies 4,000 square meters in which its building is well-equipped with all the necessary state-of-the-art facilities. It is also considered the home of some of the most experienced and dynamic faculty-members , who utilize advanced teaching methodologies. Gives disciplined and safe environments for female students. Organises cultural activities to make students familiar with Indian values and culture. Thus not only giving technical but making them people with good values. Instructors at GIIT are dedicated and have a reputation for making students feel welcome. GIIT management and staff believe that there is a need to adjust the instruction of students to the needs of modernization, the world and the future in order to advance education to its highest level.</p>

            <p className='text-sm mb-4'>To be internationally recognized as a premier information technology and administration learning institution, engaged in the discovery of knowledge, integration and their applications with a global perspective, that educates through innovative, responsive and career-oriented programs.</p>
            <h2 className='font-bold'>M.D. (GIIT)</h2>
            <p><em>GIIT HEAD OFFICE, MAU, UP, INDIA</em></p>
            <Link className='text-blue-400 text-sm'>info@gyansthalyindia.com</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
