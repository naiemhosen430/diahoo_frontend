import {Outlet} from 'react-router-dom'
import Menu from '../Components/Shared/Menu'
import LeftSideBer from '../Components/Shared/LeftSideBer'
import RightSideBer from '../Components/Shared/RightSideBer'

function Main() {
    return (
        <>
            <Menu />
            <div className='grid grid-cols-7 p-4'>
                <LeftSideBer />
                <Outlet />
                <RightSideBer />
            </div>
        </>
    )
}

export default Main
