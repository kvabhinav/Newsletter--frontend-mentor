import { useState } from 'react'

import TicSymbol from '../components/TicSymbol'

export default function ContentBox() {
    const [email, setEmail] = useState('')
    return (
        <div className="w-screen lg:w-max h-full rounded-xl px-6 pr-8 lg:p-10 lg:pr-[60px] flex-row justify-between items-center font-Roboto">
            <h1 className="text-darkSlateGrey text-4xl lg:text-5xl font-bold mt-6 lg:mt-0 mb-6">Stay Updated!</h1>
            <p className="text-darkSlateGrey text-base font-medium">Join 60,000+ product managers recieving monthly updates on:</p>
            <TicSymbol />
            <div className='grid grid-rows-2 gap-3 place-items-center'>
                <div>
                    <h3 className='text-darkSlateGrey font-bold'>Email address</h3>
                    <input type="text" className='w-80 lg:w-96 h-12 text-left pl-4 border-2 rounded-lg  border-grey ' name="email" placeholder='email@company.com' onChange={(e) => setEmail(e.target.value)} value={email}></input>
                </div>
                <button className='text-white bg-darkSlateGrey hover:bg-gradient-to-r from-pink-500 to-tomato   w-80  lg:w-full h-14 text-center rounded-lg'>Subscribe to monthly newsletter</button>
            </div>

        </div>
    )
}