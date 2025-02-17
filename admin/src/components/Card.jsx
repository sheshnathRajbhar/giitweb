import React from 'react'

const Card = ({bg}) => {
    return (
        <div className='px-4 shadow-md shadow-gray py-2 bg-white'>
          <div className={`${bg} w-full h-48 rounded`}>
          </div>
          <div className='my-3'>
            <h2 className='font-bold text-sm'>Students</h2>
            <p className='text-[12px] py-3'>Last camp Performance</p>
            <p className='my-5 text-[12px]'>Sent 2 days Ago</p>
          </div>
        </div>
      );
}

export default Card