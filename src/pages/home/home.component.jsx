import React from 'react'
import LeftSidebar from '../../components/left-sidebar/left-sidebar.component'
import Celebrations from '../../components/celebrations/celebrations.component'
const HomePage = () => {
    return (
        <div className='h-max flex justify-center'>
            <LeftSidebar />
            <div className=' flex-grow h-full max-w-full w-[80%] bg-white'>
                <Celebrations />
            </div>
        </div>
    )
}

export default HomePage