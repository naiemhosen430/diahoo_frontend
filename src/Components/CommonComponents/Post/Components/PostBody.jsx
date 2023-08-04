import React from 'react'

export default function PostBody(props) {
  return (
    <div>
      <h4 className='text-rose-300 p-4'>{props.postTittle}</h4>
      <img src={props.postImage} alt="" />
    </div>
  )
}
