import {GoArrowSwitch} from 'react-icons/go'
import MainSetting from './Components/MainSetting'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Setting() {
    const [mainsetting, setMainSetting] = useState(true)
    const [setting, setSetting] = useState(false)



    //hundle onclick
    const showSetting = () => {
        setSetting(true)
        setMainSetting(false)
    }
    const closeSetting = () => {
        setSetting(false)
        setMainSetting(true)
    }
    return (
        <div className='col-span-3 bg-slate-900 mx-2 p-4'>
            {mainsetting &&
            <div>
                <div className='flex items-center bg-slate-700 px-4 py-2'>
                    <h1 className=' w-5/6 text-white rounded text-2lg'>Switch Account</h1>
                    <GoArrowSwitch className='w-1/6 text-white' />
                </div>
                <ul className='my-4'>
                    <Link to={'/profile'}>
                        <li className='text-lg text-white py-2 px-4 cursor-pointer rounded shadow'>profile</li>
                    </Link>
                    <Link to={'/message'}>
                        <li className='text-lg text-white py-2 px-4 cursor-pointer rounded shadow'>Message</li>
                    </Link>
                    <Link to={'/friend'}>
                        <li className='text-lg text-white py-2 px-4 cursor-pointer rounded shadow'>Friend</li>
                    </Link>
                    <Link to={'/video'}>
                        <li className='text-lg text-white py-2 px-4 cursor-pointer rounded shadow'>Video</li>
                    </Link>
                    <Link to={'/rendompeople'}>
                        <li className='text-lg text-white py-2 px-4 cursor-pointer rounded shadow'>Rendom People</li>
                    </Link>
                    <li className='text-lg text-white py-2 px-4 cursor-pointer rounded shadow' onClick={showSetting}>Setting</li>
                    <Link to={'/report'}>
                        <li className='text-lg text-white py-2 px-4 cursor-pointer rounded shadow'>Report</li>
                    </Link>
                    <Link to={'/support'}>
                        <li className='text-lg text-white py-2 px-4 cursor-pointer rounded shadow'>Help And Support</li>
                    </Link>
                    <Link to={'/logout'}>
                        <li className='text-lg text-white py-2 my-2 cursor-pointer bg-slate-800 text-center px-4 rounded shadow'>Log Out</li>
                    </Link>
                </ul>
            </div>
            }

            {setting && <MainSetting 
                closeSetting={closeSetting}
            />}
            
        </div>
    )
}

export default Setting
