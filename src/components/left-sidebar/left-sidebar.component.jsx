import React from 'react'
import smile from '../../assets/smile.svg'
import thumbs from '../../assets/thumbs-up.svg'
import group from '../../assets/Group.svg'
import { useState } from 'react'


const LeftSidebar = () => {


    const [menu, setMenu] = useState("celebration")
    const [hidden, setHidden] = useState(false)
    return (
        <div className={`bg-[#4E176C] h-auto flex flex-col justify-start items-center sm:absolute sm:left-0 ${hidden ? "w-0" : "w-[285px]"} `}>

            <div className="w-4/5 my-10">
                <div className="flex w-full p-4 items-center justify-center">
                    <img className=' m-3' src={smile} alt="img" />
                    <span onClick={() => setMenu("celebration")} className={`${menu === "celebration" ? "text-[#F8C000]" : "text-white"} text-2xl cursor-pointer md:text-lg ${hidden ? "invisible" : "visible"}`}>Celebration</span>
                </div>
                <div className='flex w-full p-4 items-center justify-center '>
                    <img className=' m-3' src={thumbs} alt="img" />
                    <span onClick={() => setMenu("challenges")} className={`${menu === "challenges" ? "text-[#F8C000]" : "text-white"} text-2xl cursor-pointer md:text-lg ${hidden ? "invisible" : "visible"}`}>Challenges</span>
                </div>
                <div className='flex w-full p-4 items-center justify-center '>
                    <img className=' m-3' src={group} alt="img" />
                    <span onClick={() => setMenu("feature")} className={`${menu === "feature" ? "text-[#F8C000]" : "text-white"} text-2xl  cursor-pointer md:text-lg ${hidden ? "invisible" : "visible"}`}>Feature Work</span>
                </div>
                <div className='w-full  translate-x-full hidden sm:block'>
                    <div onClick={() => setHidden(!hidden)} className={`w-[30px] h-[30px] bg-[#4E176C] flex flex-col items-center justify-center rounded-full ${hidden ? " -translate-x-4" : "translate-x-1/3"}`}>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LeftSidebar