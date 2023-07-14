import { useLocation } from 'react-router-dom'

import iconlist from '../images/iconlist.svg'

export default function Success() {
    const location = useLocation()

    return (
        <div className="bg-white w-[400px] h-[420px] rounded-3xl p-10 flex flex-col justify-between items-center">
            <div className="mt-1 lg:mt-0 w-12 h-12 bg-tomato rounded-full flex justify-center lg:items-center self-start">
                <img src={iconlist} alt="tic symbol" width={50} height={50}></img>
            </div>
            <h1 className='text-5xl font-bold text-darkSlateGrey'>Thanks for subscribing!</h1>
            <p className='text-sm font-medium text-darkSlateGrey'>A confirmation email has been sent to <span className='font-bold'>{location.state.email}</span> Please open it and click the button inside to confirm your subscription.</p>
            <button className='text-white font-medium bg-darkSlateGrey hover:bg-gradient-to-r from-pink-500 to-tomato   w-80  lg:w-full h-14 text-center rounded-lg'>Dismiss message</button>
        </div>
    )
}