import React from 'react'
import img1 from '../../assets/img1.svg'
import img2 from '../../assets/img2.svg'
import img3 from '../../assets/img3.svg'
import img4 from '../../assets/img4.svg'
import img5 from '../../assets/img5.svg'
import left from '../../assets/chevron-left.svg'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAllfestivals } from '../../actions/festivals'
const EventList = () => {

    const dispatch = useDispatch()

    var festivals = [
        {
            festival: "World Environment Day",
            img: img1,
            about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloremque qui neque in maiores molestias hic commodi sed autem culpa",
            month: "June",
            date: 5
        },
        {
            festival: "Father's Day",
            img: img2,
            about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloremque qui neque in maiores molestias hic commodi sed autem culpa",
            month: "June",
            date: 19
        },
        {
            festival: "International Yoga Day",
            img: img3,
            about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloremque qui neque in maiores molestias hic commodi sed autem culpa",
            month: "June",
            date: 21
        },
        {
            festival: "Bakrid/Eid ul-Adha",
            img: img4,
            about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloremque qui neque in maiores molestias hic commodi sed autem culpa",
            month: "June",
            date: 28
        },
        {
            festival: "World Chocolate Day",
            img: img5,
            about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloremque qui neque in maiores molestias hic commodi sed autem culpa",
            month: "June",
            date: 30
        },
    ]

    useEffect(() => {
        dispatch(fetchAllfestivals(festivals))
    })
    return (
        <div className='w-full'>
            {
                festivals.map(festival => (
                    <div className='w-[95%] flex justify-center mb-5 rounded-md  h-auto p-5 shadow-md xs:flex-col xs:items-center'>
                        <div className='flex items-center'>
                            <img className=' inline-block m-auto' src={festival.img} alt="" />
                        </div>
                        <div className='w-3/4 flex flex-col mx-5 px-5 justify-between xs:mt-10 xs:p-0 xs:w-full' >
                            <div>
                                <h1 className='md:text-sm font-semibold text-xl text-left'>{festival.festival}</h1>
                                <p className='md:text-xs text-justify my-[5px]'>{festival.about}</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <span className='md:text-sm font-semibold text-lg'>{festival.month} {festival.date}</span>
                                <img className=' rotate-180 w-[25px] cursor-pointer rounded-full bg-[#F8C000]' src={left} alt="" />
                            </div>
                        </div>

                    </div>
                ))

            }
        </div >
    )
}

export default EventList