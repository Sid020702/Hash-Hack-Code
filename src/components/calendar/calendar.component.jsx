import React from 'react'
import left from '../../assets/chevron-left.svg'

const Calendar = ({ months }) => {

    const date = new Date();
    const month = date.getMonth()
    const year = date.getFullYear()
    // let selected = new Date(String(year) + "-" + String(month) + "-01")  
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    let noOfDays = new Date(year, month + 1, 0).getDate()
    let dates = Array.from({ length: noOfDays }, (value, index) => { return index + 1 })
    return (
        <div className='w-full min-w-[300px]'>
            <div className="flex justify-between">
                <h3 className=' font-semibold text-xl px-4'>June {year}</h3>
                <div className='flex items-center justify-center'>
                    <img src={left} className="w-[25px] cursor-pointer" alt="" />
                    <img src={left} className=" rotate-180 w-[25px] cursor-pointer" alt="" />
                </div>
            </div>
            <div className=' grid full grid-cols-7 my-5 '>
                {
                    days.map(day => (
                        <span className=' font-semibold' key={day}>{day}</span>
                    ))
                }
            </div>
            <div className="grid w-full grid-cols-7 gap-y-5">
                {
                    dates.map(date => (

                        <span key={date} className={`${date === 1 ? "col-start-4" : ""} ${(date === 5 || date === 19 || date === 21 || date == 30) ? "text-white border-[#4E176C] bg-[#4E176C]" : ""} w-[25px] cursor-pointer m-auto font-semibold  rounded-full `}>{date}</span>

                    ))

                }

            </div>

        </div>

    )
}

export default Calendar