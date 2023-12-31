import iconlist from '../images/iconlist.svg'

export default function List() {
    const points = ["Product discovery and build what matters", "Measuring to ensure updates are a success ", "And much more!"]
    return (
        <div className='mt-4 mb-6 font-Roboto'>
            {
                points.map((data) => {
                    return (
                        <div className='flex items-start lg:items-center my-2 lg:mb-4'>
                            <img src={iconlist} alt="tic symbol"></img>
                            <h2 className='mx-2'>{data}</h2>
                        </div>
                    )

                })
            }
        </div>

    )
}