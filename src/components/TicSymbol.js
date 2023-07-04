import iconlist from '../images/iconlist.svg'

export default function TicSymbol() {
    const points = ["Product discovery and build what matters", "Measuring to ensure updates are a success ", "And much more!"]
    return (
        <div className='mt-4 mb-6 font-Roboto'>
            {
                points.map((data) => {
                    return (
                        <div className='flex items-center my-2'>
                            <div className="w-5 h-5 bg-tomato rounded-full flex justify-center items-center">
                                <img src={iconlist} alt="tic symbol"></img>
                            </div>
                            <h2 className='mx-2'>{data}</h2>
                        </div>
                    )

                })
            }
        </div>

    )
}