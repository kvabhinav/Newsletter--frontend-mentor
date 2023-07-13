import { useState,useEffect } from 'react'

import List from './List'

export default function ContentBox() {

    const [text,setText] =useState('')
    const [email, setEmail] = useState('')

    const mailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    useEffect(()=>{
        if(email===""){
            setText('')
        }else if(!mailFormat.test(email)){
            setText("Valid email required")
        }else{
            setText('')
        }
    },[email])


    return (
        <div className="w-screen lg:w-max h-full rounded-xl px-6 pr-8 lg:p-10 lg:pr-[60px] flex-row justify-between items-center font-Roboto">
            <h1 className="text-darkSlateGrey text-4xl lg:text-5xl font-bold mt-6 lg:mt-0 mb-6">Stay Updated!</h1>
            <p className="text-darkSlateGrey text-base font-medium">Join 60,000+ product managers recieving monthly updates on:</p>
            <List />
            <div className='grid grid-rows-2 gap-3 place-items-center'>
                <div>
                    <div className='flex justify-between'>
                        <h3 className='text-darkSlateGrey font-bold'>Email address</h3>
                        <span className='text-tomato text-sm'>{text}</span>
                    </div>
                    <input type="text" className='input' name="email" placeholder='email@company.com' onChange={(e)=>setEmail(e.target.value)} value={email} pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$' ></input>
                </div>
                <button className='text-white bg-darkSlateGrey hover:bg-gradient-to-r from-pink-500 to-tomato   w-80  lg:w-full h-14 text-center rounded-lg' onInvalid={()=>console.log('invalid')}>Subscribe to monthly newsletter</button>
            </div>

        </div>
    )
}