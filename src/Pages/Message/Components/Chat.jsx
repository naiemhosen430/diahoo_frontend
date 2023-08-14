import React from 'react'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import { AiTwotoneSetting } from 'react-icons/ai'

export default function Chat({closeChat}) {
  return (
    <>
      <div className='bg-black shadow-md rounded-lg fixed bottom-1 z-20 w-3/12 ms-80 h-4/6'>
        <div className='bg-slate-950 p-2 flex'>
            <HiArrowNarrowLeft className='text-gray-50 w-2/12 text-2xl cursor-pointer' onClick={closeChat} />
            <h2 className='text-white px-2 w-6/12'>MD Nasiem Hosen</h2>
            <div className='w-4/12 flex'>
                <BiSolidPhoneCall className='text-gray-50 w-4/12 text-2xl' />
                <BsFillCameraVideoFill className='text-gray-50 w-4/12 text-2xl' />
                <AiTwotoneSetting className='text-gray-50 w-4/12 text-2xl' />
            </div>
        </div>

        <div className='h-5/6'>
          <div className='p-2'>
            <div className='inline-block shadow-md py-1 px-4 rounded-xl bg-slate-900'>
              <h4 className='text-white'>Hello</h4>
              <p className='text-right text-xs text-slate-600'>5:46 AM</p>
            </div>
          </div>
        </div>

        <div className='flex'>
            <input className='text-sm text-white py-2 px-4 w-9/12 bg-slate-900 rounded-md shadow-md' type="text" placeholder='Type your message....' />
            <button className='text-white text-sm py-2 px-4 bg-slate-800 w-3/12 rounded-md' type="button">Send</button>
        </div>
      </div>
    </>
  )
}
