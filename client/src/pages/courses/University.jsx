import React from 'react';
import suniv from "../../assets/suniv.png";

const University = () => {
  const data = [
    { sn: "1", course: "DCA", eligibility: "10+2 or eq.", duration: "1 Year" },
    { sn: "2", course: "ADCA", eligibility: "10+2 or eq.", duration: "2 Year" },
    { sn: "3", course: "PGDCA", eligibility: "Graduation or eq.", duration: "1 Year" },
    { sn: "4", course: "BCA", eligibility: "10+2 or eq.", duration: "3 Year" },
    { sn: "5", course: "MCA", eligibility: "Graduation with Mathematics", duration: "3 Year" },
    { sn: "6", course: "B.Sc Computer", eligibility: "10+2 or eq.", duration: "3 Year" },
    { sn: "7", course: "M.Sc Computer", eligibility: "Graduation or eq.", duration: "2 Year" },
  ];

  const data2 = [
    { sn: "1", course: "B.A", eligibility: "10+2 or eq.", duration: "3 Year" },
    { sn: "2", course: "B.Com", eligibility: "10+2 or eq.", duration: "3 Year" },
    { sn: "3", course: "B.Sc", eligibility: "Graduation or eq.", duration: "3 Year" },
    { sn: "4", course: "M.A", eligibility: "Graduation or eq.", duration: "2 Year" },
    { sn: "5", course: "M.Com", eligibility: "Graduation with Commerce or eq.", duration: "2 Year" },
    { sn: "6", course: "M.Sc", eligibility: "Graduation or eq.", duration: "2 Year" },
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="w-full bg-[#441752] px-4 sm:px-[5%] py-4">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-2xl sm:text-3xl text-white font-bold">University Courses</h2>
        </div>
      </div>

      {/* Image Section */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8">
        <img src={suniv} className="rounded-lg my-5 w-full" alt="University Courses" />
      </div>

      {/* Computer Science Courses */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8">
        <h2 className="font-bold text-2xl my-4">Computer Science</h2>
        <table className="border w-full mb-4">
          <thead>
            <tr className="w-full border bg-[#493D9E] text-white">
              <th className="border w-[20%] px-2 py-2">Sr No.</th>
              <th className="border w-[40%] px-2 py-2">Course</th>
              <th className="border w-[25%] px-2 py-2">Eligibility</th>
              <th className="border w-[15%] px-2 py-2">Course Duration</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele, ind) => (
              <tr className={`w-full border ${ind % 2 === 0 ? 'bg-[#DAD2FF]' : ''}`} key={ind}>
                <td className="border w-[20%] px-2 py-1">{ele.sn}</td>
                <td className="border w-[40%] px-2 py-1">{ele.course}</td>
                <td className="border w-[25%] px-2 py-1">{ele.eligibility}</td>
                <td className="border w-[15%] px-2 py-1">{ele.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Academic Courses */}
        <h2 className="font-bold text-2xl my-4">Academic Courses</h2>
        <table className="border w-full mb-4">
          <thead>
            <tr className="w-full border bg-[#493D9E] text-white">
              <th className="border w-[20%] px-2 py-2">Sr No.</th>
              <th className="border w-[40%] px-2 py-2">Course</th>
              <th className="border w-[25%] px-2 py-2">Eligibility</th>
              <th className="border w-[15%] px-2 py-2">Course Duration</th>
            </tr>
          </thead>
          <tbody>
            {data2.map((ele, ind) => (
              <tr className={`w-full border ${ind % 2 === 0 ? 'bg-[#DAD2FF]' : ''}`} key={ind}>
                <td className="border w-[20%] px-2 py-1">{ele.sn}</td>
                <td className="border w-[40%] px-2 py-1">{ele.course}</td>
                <td className="border w-[25%] px-2 py-1">{ele.eligibility}</td>
                <td className="border w-[15%] px-2 py-1">{ele.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default University;
