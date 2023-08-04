
import { useState } from 'react';
import BoxField from './Components/BoxField';

function Friend() {
    const [showMyfriendBox, setShowMyfriendBox] = useState(false)

    function showMyfriend() {
      setShowMyfriendBox(true)
    }

    return (
        <div className='col-span-3 bg-slate-900 mx-2'>
            <div className='p-4 pb-1'>
                <ul className='flex items-center justify-center'>
                    <button className='text-2sm w-2/6 text-slate-300 mx-1 rounded p-1 px-4 bg-slate-800' onClick={showMyfriend}>My Friend</button>
                    <button className='text-2sm w-2/6 text-slate-300 mx-1 rounded p-1 px-4 bg-slate-800'>Friend Request</button>
                    <button className='text-2sm w-2/6 text-slate-300 mx-1 rounded p-1 px-4 bg-slate-800'>Send Friend</button>
                </ul>

                <div>
                    {showMyfriendBox && <BoxField />}
                </div>
            </div>
        </div>
    )
}

export default Friend;
