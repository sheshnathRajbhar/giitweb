import React from 'react'

const SmallCard = () => {
    return (
        <div className="w-full rounded-lg shadow-lg h-36 p-4 relative bg-white flex flex-col justify-between">
          <div className="flex items-center space-x-4">
            <button className="bg-red-400 w-12 h-12 flex items-center justify-center rounded-lg text-white">
              Users
            </button>
            <h1 className="text-2xl font-bold">281</h1>
          </div>
          <p className="text-gray-500 text-sm">Than Last Week</p>
        </div>
      );
}

export default SmallCard