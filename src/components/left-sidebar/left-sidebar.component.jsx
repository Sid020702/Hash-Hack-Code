import React from 'react'
import smile from '../../assets/smile.svg'
import thumbs from '../../assets/thumbs-up.svg'
import group from '../../assets/Group.svg'
import { useState } from 'react'


const LeftSidebar = () => {
    const [menu, setMenu] = useState("celebration")
    return (
        <div className=' bg-[#4E176C] w-[285px] h-auto flex flex-col justify-start items-center'>
            <div className="w-4/5 my-10">
                <div className='flex w-full p-4 items-center justify-center '>
                    <img className=' m-3' src={smile} alt="img" />
                    <span onClick={() => setMenu("celebration")} className={`${menu == "celebration" ? "text-[#F8C000]" : "text-white"} text-2xl cursor-pointer`}>Celebration</span>
                </div>
                <div className='flex w-full p-4 items-center justify-center '>
                    <img className=' m-3' src={thumbs} alt="img" />
                    <span onClick={() => setMenu("challenges")} className={`${menu == "challenges" ? "text-[#F8C000]" : "text-white"} text-2xl cursor-pointer`}>Challenges</span>
                </div>
                <div className='flex w-full p-4 items-center justify-center '>
                    <img className=' m-3' src={group} alt="img" />
                    <span onClick={() => setMenu("feature")} className={`${menu == "feature" ? "text-[#F8C000]" : "text-white"} text-2xl  cursor-pointer`}>Feature Work</span>
                </div>
            </div>
        </div>
    )
}

export default LeftSidebar