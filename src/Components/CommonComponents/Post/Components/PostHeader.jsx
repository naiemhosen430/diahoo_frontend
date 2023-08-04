import { BiDotsHorizontal } from 'react-icons/bi'

export default function PostHeader(props) {
  return (
    <div className='flex items-center justify-center space-2'>
        <div className='w-2/6 flex items-center justify-center'>
          <img className='h-10 w-10 block rounded-full' src={props.postOwnerImage} alt="no image" />
        </div>
      <div className='w-3/6'>
        <h4>{props.postOwnerName}</h4>
        <h6>{props.postedDate}</h6>
      </div>
      <div className='w-1/6 flex justify-center items-center text-rose-50 text-4xl'>
        <BiDotsHorizontal />
      </div>
    </div>
  )
}
