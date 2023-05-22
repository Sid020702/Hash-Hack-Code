import React from 'react'
import left from '../../assets/chevron-left.svg'
import { useSelector } from 'react-redux';
const Calendar = ({ months }) => {
    const festivals = useSelector(state => state.festivalsReducer.data)
    const date = new Date();
    // const month = date.getMonth()
    const month = 5
    const year = date.getFullYear()
    // let selected = new Date(String(year) + "-" + String(month) + "-01")  
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    let noOfDays = new Date(year, month + 1, 0).getDate()
    var map = new Array(noOfDays).fill(0)

    if (festivals) {
        for (let festival of festivals) {
            map[festival.date] = 1
        }
    }

    let dates = Array.from({ length: noOfDays }, (value, index) => { return index + 1 })

    return (
        <div className='w-full min-w-[300px] md:min-w-[100px]'>
            <div className="flex justify-between">
                <h3 className=' font-semibold md:text-sm text-xl px-4'>June {year}</h3>
                <div className='flex items-center justify-center'>
                    <img src={left} className="w-[25px] md:w-[18px] cursor-pointer" alt="" />
                    <img src={left} className=" rotate-180 w-[25px] md:w-[18px] cursor-pointer" alt="" />
                </div>
            </div>
            <div className=' grid full grid-cols-7 my-5 md:gap-4 '>
                {
                    days.map(day => (
                        <span className=' font-semibold md:text-xs' key={day}>{day}</span>
                    ))
                }
            </div>
            <div className="grid w-full grid-cols-7 gap-y-5">
                {
                    dates.map(date => (

                        <span key={date} className={`${date === 1 ? "col-start-4" : ""} ${(map[date] === 1) ? "text-white border-[#4E176C] bg-[#4E176C]" : ""} w-[25px] cursor-pointer m-auto font-semibold md:text-xs md:w-[16px] rounded-full `}>{date}</span>

                    ))

                }

            </div>

        </div>

    )
}

export default Calendar