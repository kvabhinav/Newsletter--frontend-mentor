import { useLocation } from 'react-router-dom'

import iconSuccess from '../images/iconSuccess.svg'

export default function Success() {
    const location = useLocation()

    return (
        <div className="bg-white sm:h-screen sm:w-full lg:w-[400px] lg:h-[420px] rounded-3xl p-10 flex flex-col justify-start gap-10 lg:gap-0 lg:justify-between items-center Roboto-Regular pt-40 md:pt-10">
            <img src={iconSuccess} className='self-start' width={50} height={50}></img>
            <h1 className='text-5xl Roboto-Bold text-darkSlateGrey'>Thanks for subscribing!</h1>
            <p className='text-sm font-medium text-darkSlateGrey'>A confirmation email has been sent to <span className='font-bold Roboto-Bold'>{location.state.email}</span> Please open it and click the button inside to confirm your subscription.</p>
            <button className='text-white font-medium bg-darkSlateGrey hover:bg-gradient-to-r from-pink-500 to-tomato   w-80  lg:w-full h-14 text-center rounded-lg Roboto-Bold sm:mt-auto lg:mt-0'>Dismiss message</button>
        </div>
    )
}