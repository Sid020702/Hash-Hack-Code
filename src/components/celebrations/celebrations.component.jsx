import React from 'react'
import { useState } from 'react'
import Calendar from '../calendar/calendar.component'
import EventList from '../event-list/event-list.component'

const Celebrations = () => {
    var months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let date = new Date()
    const [month, setMonth] = useState(months[date.getMonth()])
    return (
        <div className='p-10 overflow-x-hidden w-full '>
            <div className="navbar flex items-center w-full overflow-x-auto ">
                {
                    months.map(m => (
                        <span onClick={() => setMonth(m)} className={`${month == m ? "bg-[#F8C000]" : "bg-white"} shrink-0 min-w-[110px] border-[#F8C000] cursor-pointer mx-2 text-lg font-semibold border-solid border-2 rounded-md`}>{m}</span>
                    ))
                }
            </div>
            <div className='w-full flex  m-5 p-7'>
                <div className=' flex flex-col  w-3/4 '>
                    <EventList />
                </div>
                <div className=' min-w-[20%] flex flex-col h-screen justify-start '>
                    <Calendar months={months} />
                </div>
            </div>
        </div>
    )
}

export default Celebrations