import React from 'react';
import account from "../../assets/Accountant.jpg";

const Accounting = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="w-full bg-[#441752] px-4 sm:px-8 py-4">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-2xl sm:text-3xl text-white font-bold">Accounting Courses</h2>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-4">
        <img src={account} alt="Accounting" className="w-full my-4 rounded-md" />
        
        <h2 className="text-3xl sm:text-4xl font-bold my-3">Accounting Package Tally. ERP 9 with GST</h2>
        <h2 className="text-2xl sm:text-3xl font-bold my-3">Course Content</h2>

        <table className="border w-full mb-4 table-auto">
          <tbody>
            <tr className="w-full border bg-[#DAD2FF]">
              <td className="border w-1/8 px-2 py-1">1.</td>
              <td className="border w-full px-2 py-1">Basics of Accounting</td>
            </tr>
            <tr className="w-full border">
              <td className="border w-1/8 px-2 py-1">2.</td>
              <td className="border w-full px-2 py-1">Principles and Concepts of Accounting</td>
            </tr>
            <tr className="w-full border bg-[#DAD2FF]">
              <td className="border w-1/8 px-2 py-1">3.</td>
              <td className="border w-full px-2 py-1">Double Entry System of Accounting</td>
            </tr>
            <tr className="w-full border">
              <td className="border w-1/8 px-2 py-1">4.</td>
              <td className="border w-full px-2 py-1">Financial Statements</td>
            </tr>
            <tr className="w-full border bg-[#DAD2FF]">
              <td className="border w-1/8 px-2 py-1">5.</td>
              <td className="border w-full px-2 py-1">Company Info</td>
            </tr>
            <tr className="w-full border">
              <td className="border w-1/8 px-2 py-1">6.</td>
              <td className="border w-full px-2 py-1">Groups, Ledgers, Voucher Types</td>
            </tr>
            <tr className="w-full border bg-[#DAD2FF]">
              <td className="border w-1/8 px-2 py-1">7.</td>
              <td className="border w-full px-2 py-1">Basics of Accounting</td>
            </tr>
            <tr className="w-full border">
              <td className="border w-1/8 px-2 py-1">8.</td>
              <td className="border w-full px-2 py-1">Inventory Info, Inventory Items & Goods Stock</td>
            </tr>
            <tr className="w-full border bg-[#DAD2FF]">
              <td className="border w-1/8 px-2 py-1">9.</td>
              <td className="border w-full px-2 py-1">Accounting Vouchers</td>
            </tr>
            <tr className="w-full border">
              <td className="border w-1/8 px-2 py-1">10.</td>
              <td className="border w-full px-2 py-1">Inventory Vouchers</td>
            </tr>
            <tr className="w-full border bg-[#DAD2FF]">
              <td className="border w-1/8 px-2 py-1">11.</td>
              <td className="border w-full px-2 py-1">Job Costing & Order Processing</td>
            </tr>
            <tr className="w-full border">
              <td className="border w-1/8 px-2 py-1">12.</td>
              <td className="border w-full px-2 py-1">Company Features & Configuration</td>
            </tr>
            <tr className="w-full border bg-[#DAD2FF]">
              <td className="border w-1/8 px-2 py-1">13.</td>
              <td className="border w-full px-2 py-1">Statutory & Taxation</td>
            </tr>
            <tr className="w-full border">
              <td className="border w-1/8 px-2 py-1">14.</td>
              <td className="border w-full px-2 py-1">Reporting MIS & Others</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Accounting;
