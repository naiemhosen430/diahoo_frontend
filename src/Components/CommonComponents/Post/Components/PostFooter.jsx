import React from 'react'
import { BsStar } from 'react-icons/bs'
import { BiSolidComment } from 'react-icons/bi'
import { PiShareFatFill } from 'react-icons/pi'

export default function PostFooter() {
  return (
    <div className='p-4 flex text-fuchsia-50 text-center'>
        <div className='w-1/3 text-center'>
            <BsStar className='block w-full' />
        </div>
        <div className='w-1/3 text-center'>
            <BiSolidComment className='block w-full' />
        </div>
        <div className='w-1/3 text-center'>
            <PiShareFatFill className='block w-full' />
        </div>
    </div>
  )
}
