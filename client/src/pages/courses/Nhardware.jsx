import React from 'react';
import nielith from "../../assets/nielith.jpg";

const Nhardware = () => {
  return (
    <div>
      {/* Header Section */}
      <div className='w-full bg-[#441752] px-4 sm:px-[5%] py-4'>
        <div className="max-w-[1100px] mx-auto">
          <h2 className='text-2xl sm:text-3xl text-white font-bold'>Nielit Hardware Courses</h2>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-[1100px] mx-auto py-4 px-4 sm:px-8">
        <img src={nielith} className='rounded-lg my-5 w-full' alt="Nielit Hardware Course" />

        {/* Course Description */}
        <h2 className='text-2xl my-4'>CHM - O Level</h2>
        <p className='font-bold text-[#5C7285] my-4'>
          The Objective of the CHM-O Level course is to train 10+2, Diploma, graduate and other degree qualifiers to acquire basic knowledge in Computer hardware and peripherals for installation, troubleshooting and maintenance including system software management and its backup, and to undertake disaster prevention, diagnosis and rectification of faults besides personality development and communication skills.
        </p>

        <p className='font-bold text-[#5C7285] my-4'>COURSE STRUCTURE</p>

        {/* Course Table */}
        <table className='border w-full mb-4'>
          <thead>
            <tr className='w-full border bg-[#DAD2FF]'>
              <th className='border w-1/8 px-2'>Subject Code</th>
              <th className='border w-full px-2 py-1'>Subject Name</th>
            </tr>
          </thead>
          <tbody>
            {[
              { code: "H1", name: "Electronics Components and PC Hardware" },
              { code: "H2", name: "PC Architecture" },
              { code: "H3", name: "Computer Peripherals and Networking" },
              { code: "H4", name: "System Software, Diagnostic and Debugging Tools" },
              { code: "H5", name: "Personality Development and Communication Skills" },
              { code: "H6", name: "PC Debugging Repair and Maintenance" },
              { code: "H7", name: "Inventory Info, Inventory Items & Goods Stock" },
            ].map((course, index) => (
              <tr key={index} className={`w-full border ${index % 2 === 0 ? 'bg-[#DAD2FF]' : ''}`}>
                <td className='border w-1/8 px-2'>{course.code}</td>
                <td className='border w-full px-2 py-1'>{course.name}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Eligibility and Job Opportunities */}
        <h2 className='font-bold text-xl text-[#5C7285]'>Eligibility Criteria</h2>
        <p className='font-bold text-[#5C7285] my-4'>10 + 2 pass or ITI (one year after 10 pass), diploma, graduation, post-graduation or doctorate.</p>

        <h2 className='font-bold text-xl text-[#5C7285]'>Job Opportunities</h2>
        <ul className="text-[#5C7285] my-4 font-bold">
          <li>Service Industry (Hardware and Software)</li>
          <li>Academia such as Troubleshooters</li>
          <li>Technicians (PC)</li>
          <li>Assistant System Administrators</li>
          <li>Lab Demonstrators</li>
        </ul>

        {/* CHM A Level Section */}
        <h1 className="text-[#5C7285] my-4 font-bold text-3xl">CHM - A Level</h1>
        <p className="text-[#5C7285] my-4 font-bold">
          The Objective of the CHM-A level is to train the candidates, who have qualified O level, with advancements in computer hardware, networking and troubleshooting. Being a modular course, only those who have qualified O level will be enrolled for A level.
        </p>

        <h2 className="my-4 text-xl">Course Structure</h2>

        {/* A Level Course Table */}
        <table className='border w-full mb-4'>
          <thead>
            <tr className='w-full border bg-[#DAD2FF]'>
              <th className='border w-1/8 px-2'>Subject Code</th>
              <th className='border w-full px-2 py-1'>Subject Name</th>
            </tr>
          </thead>
          <tbody>
            {[
              { code: "A1", name: "Advance PC Hardware and Networking Components" },
              { code: "A2", name: "Data Communication and Computer Networks" },
              { code: "A3", name: "Network Management and Administration" },
              { code: "A4", name: "Linux Administration" },
              { code: "A5", name: "Entrepreneurship Development" },
              { code: "A6", name: "Project" },
              { code: "A7", name: "Elective" },
              { code: "A8", name: "IT Security" },
              { code: "A9", name: "Introduction to Embedded Systems" },
              { code: "A10", name: "Elective" },
            ].map((course, index) => (
              <tr key={index} className={`w-full border ${index % 2 === 0 ? 'bg-[#DAD2FF]' : ''}`}>
                <td className='border w-1/8 px-2'>{course.code}</td>
                <td className='border w-full px-2 py-1'>{course.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Nhardware;
