import React from 'react'

export default function SingleMsg({openChat}) {
  return (
    <div className='py-4' onClick={openChat}>
      <div className='py-2 px-4 flex items-center shadow-md cursor-pointer hover:bg-slate-700 rounded-2xl'>
        <div className='w-1/6 rounded-full'>
          <img className='w-14 h-14 rounded-full' src="" alt="No image" />
        </div>
        <div className='w-5/6'>
          <div>
            <h1 className='text-white py-2 text-2xl'>MD Naiem Hosen</h1>
          </div>
          <div className=' flex items-center space-x-2'>
            <h4 className='text-slate-500'>Hello</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
