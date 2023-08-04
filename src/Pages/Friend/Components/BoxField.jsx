import React from 'react'

export default function BoxField() {
  return (
    <div className='py-4'>
      <div className='py-2 px-4 flex items-center bg-slate-800 hover:bg-slate-700 rounded-2xl'>
        <div className='w-2/6 rounded-full'>
          <img className='w-14 h-14 rounded-full' src="" alt="No image" />
        </div>
        <div className='w-4/6'>
          <div>
            <h1 className='text-white py-2 text-2xl'>MD Naiem Hosen</h1>
          </div>
          <div className=' flex items-center space-x-2'>
            <button className='text-slate-100 bg-slate-600 px-8 rounded-xl py-1' type="button">Delete</button>
            <button className='text-slate-100 bg-slate-600 px-8 rounded-xl py-1' type="button">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  )
}
