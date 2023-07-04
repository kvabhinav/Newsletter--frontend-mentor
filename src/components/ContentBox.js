import { useState } from 'react'

import TicSymbol from '../components/TicSymbol'

export default function ContentBox() {
    const [email, setEmail] = useState('')
    return (
        <div className="w-max h-ful rounded-xl p-10 pr-[60px] flex-row justify-between items-center font-Roboto">
            <h1 className="text-darkSlateGrey text-5xl font-bold mt-0 mb-6">Stay Updated!</h1>
            <p className="text-darkSlateGrey text-base font-medium">Join 60,000+ product managers recieving monthly updates on:</p>
            <TicSymbol />
            <div className='grid grid-rows-2 gap-3 place-items-center'>
                <div>
                    <h3 className='text-darkSlateGrey font-bold'>Email address</h3>
                    <input type="text" className='w-96 h-12 text-center border-2 rounded-lg  border-grey ' name="email" placeholder='email@company.com' onChange={(e) => setEmail(e.target.value)} value={email}></input>
                </div>
                <button className='text-white bg-darkSlateGrey w-full h-14 text-center rounded-lg'>Subscribe to monthly newsletter</button>
            </div>

        </div>
    )
}