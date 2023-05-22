import React, { useEffect, useState } from 'react'
import left from '../../assets/chevron-left.svg'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchAllfestivals } from '../../actions/festivals';
const Calendar = () => {
    const dispatch = useDispatch()
    const festivals = useSelector(state => state.festivalsReducer.data)
    const months = useSelector(state => state.festivalsReducer.months)
    console.log(festivals)
    const date = new Date();
    const [month, setMonth] = useState(date.getMonth())
    const year = date.getFullYear()
    // let selected = new Date(String(year) + "-" + String(month) + "-01")  
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    let noOfDays = new Date(year, month + 1, 0).getDate()
    var map = new Array(noOfDays).fill(0)

    if (festivals) {
        for (let festival of festivals) {
            map[10 * parseInt(festival.date_day[0]) + parseInt(festival.date_day[1])] = 1
        }
    }

    let dates = Array.from({ length: noOfDays }, (value, index) => { return index + 1 })
    const handleClick = (val) => {
        if (val == "prev") {

            setMonth(((month - 1) + 12) % 12)
        }
        else {
            setMonth((month + 1) % 12)
        }

    }

    useEffect(() => {
        dispatch(fetchAllfestivals(month))
    }, [month])
    return (
        <div className='w-full min-w-[300px] md:min-w-[100px]'>
            <div className="flex justify-between">
                <h3 className=' font-semibold md:text-sm text-xl px-4'>{months ? months[month] : ""} {year}</h3>
                <div className='flex items-center justify-center'>
                    <img onClick={() => handleClick("prev")} src={left} className="w-[25px] md:w-[18px] cursor-pointer" alt="" />
                    <img onClick={() => handleClick("next")} src={left} className=" rotate-180 w-[25px] md:w-[18px] cursor-pointer" alt="" />
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

                        <span key={date} className={`${date === 1 ? "col-start-5" : ""} ${(map[date] === 1) ? "text-white border-[#4E176C] bg-[#4E176C]" : ""} w-[25px] cursor-pointer m-auto font-semibold md:text-xs md:w-[16px] rounded-full `}>{date}</span>

                    ))

                }

            </div>

        </div>

    )
}

export default Calendar